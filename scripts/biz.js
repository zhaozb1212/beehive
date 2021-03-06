angular.module("mxs", ['ngRoute', 'ngResource', 'mxs.cart', 'mxs.services'])
    .constant("RESTAURANT_SECTIONS_HEIGHT", {
        header: {
            className: "eleme-header",
            height: 44
        }
    })
    .controller('rootCtrl', ['$scope', '$rootScope', "userFactory", "$window", function ($scope, $rootScope, userFactory, $window) {
        //init user
        userFactory.pullRemote();
        if (location.href.indexOf("list.html") !== -1) {
            $window.location.href = "#/list";
        }
    }])

    .directive('skateShoes', ['$timeout', function (timeout) {
        return {
            restrict: 'A',
            link: function (scope, ele, attr) {
                var scrollInstance, scrollConfig = {click: !0, mouseWheel: !0};
                scope.$watch(attr.skateShoes, function (data) {
                    data && timeout(function () {
                        scrollInstance && scrollInstance.destroy();
                        scrollInstance = new IScroll(ele[0], scrollConfig);
                    })
                })
            }
        }
    }])

    .directive("restaurantViewport", ['$timeout', 'RESTAURANT_SECTIONS_HEIGHT', function ($timeout, SECTIONS_HEIGHT) {
        return {
            restrict: "A",
            link: function (scope, element) {
                var clientH = window.document.documentElement.clientHeight;
                for (var prop in SECTIONS_HEIGHT) clientH -= SECTIONS_HEIGHT[prop].height;
                element.css("height", clientH + "px");
            }
        }
    }])

    .directive('goback', ['$location', function ($location) {
        return function (scope, ele, attrs) {
            ele.on('click', function () {
                return function () {
                    return $location.url(attrs.goback);
                }
            })
        }
    }])

    .controller('listCtrl', ['$scope', '$resource', 'dishes', 'Cart', function (scope, $resource, dishes, Cart) {
        var cacheDishes, cacheDishType, typeKeys, tempDishes;
        dishes.save({}, function (dishes) {
            scope.dishType = cacheDishType = dishes.data.dishesType;
            typeKeys = Object.keys(cacheDishType);
            cacheDishes = dishes.data.dishes;

            tempDishes = cacheDishes && cacheDishes.filter(function (item, index, arr) {
                    return item.typeId === parseInt(typeKeys[0]);
                });
            scope.dishes = tempDishes;
        });
        scope.currentIndex = 0;
        scope.selectMenu = function (index, type) {
            (scope.currentIndex !== index) && (scope.currentIndex = index);

            for (var t in cacheDishType) {
                if (type === cacheDishType[t]) {
                    tempDishes = cacheDishes && cacheDishes.filter(function (item, index, arr) {
                            return item.typeId === parseInt(t);
                        });
                    scope.dishes = tempDishes;
                }
            }
        }
    }])

    .controller("tradeCtrl", ['$scope', '$rootScope', '$q', '$http', 'userFactory', "$timeout", "$window", function ($scope, $rootScope, $q, $http, user, $timeout, $window) {
        $scope.foodQuantity = function (order) {
            var count = 0;
            if (!order || !order.dishesType || !order.dishesType.length) return count;
            var dishes = order.dishesType;
            for (var dishIndex = 0, len = dishes.length; dishIndex < len; dishIndex++) {
                var dishItem = dishes[dishIndex];
                count += dishItem.count;
            }
            return count;
        };
        var timeer;
        var init = function () {
            if (user.user.id) {
                $timeout.cancel(timeer);
            } else {
                timeer = $timeout(init, 100);
                return;
            }
            $http({
                url: $rootScope.RESTBASE + "/order/userorderlist",
                method: "post",
                params: {
                    sig: $rootScope.defaultSig.sig,
                    userId: user.user.id
                }
            }).success(function (res) {
                if (res.ret == 0) {
                    $scope.orders = res.data;
                    var orderStatusEnum = ["处理中", "配送中", "已完成", "已取消"];
                    var len = res.data.length;
                    $scope.hasRecord = !!len;
                    for (var i = 0; i < len; i++) {
                        var item = res.data[i];
                        item.status_title = orderStatusEnum[item.status];
                    }
                } else {
                    alert("获取订单信息失败：" + res.msg);
                }
            }).error(function (res) {
                alert("获取订单信息失败：" + JSON.stringify(res));
                console.log("获取订单信息失败：", res);
            });
        };

        timeer = $timeout(init, 100);
    }])

    .directive('addNote', [function () {
        return function (e, t) {
            e.note = e.note || "", e.noteClick = function (t) {
                var r = angular.element(t.target), o = r.text(), n = e.note;
                n.indexOf(o) > -1 ? (n = n.replace(o, ""), r.removeClass("ui-selected")) : (n = n + " " + o, r.addClass("ui-selected"));
                e.note = n.trim()
            }
        }
    }])

    .config(['$routeProvider', '$locationProvider', function (routeProvider, locationProvider) {
        //locationProvider.html5Mode(true);
        routeProvider.when('/index', {
            templateUrl: 'tpl/menuList.html',
            controller: 'listCtrl'
        }).when('/cart', {
            templateUrl: 'tpl/cartList.html',
            controller: 'cartCtrl'
        }).when('/order', {
            templateUrl: 'tpl/order.html',
            controller: 'cartCtrl'
        }).when('/register', {
            templateUrl: 'tpl/registertel.html',
            controller: 'registerCtrl'
        }).when('/detail/:id', {
            templateUrl: 'tpl/order_detail.html',
            controller: 'tradeOrderCtrl'
        }).when('/list', {
            templateUrl: 'tpl/order_list.html',
            controller: 'tradeCtrl'
        }).otherwise({
            templateUrl: 'tpl/menuList.html',
            controller: 'listCtrl'
        })
    }]);

angular.module("mxs")
    .controller("tradeOrderCtrl", ["$scope", "$rootScope", '$routeParams', 'orderFactory', function ($scope, $rootScope, $routeParams, order) {
        var orderDeferred = order.pullOrder($routeParams.id);
        var orderStatusEnum = ["处理中", "配送中", "已完成", "已取消"];
        orderDeferred.then(function (data) {
            order.initOrder(data);
            var orderDetail = order.order;
            $scope.order = orderDetail;
            $scope.dishes = orderDetail.dishes;
            $scope.status = {
                "orderId": orderDetail.orderId,
                "title": orderStatusEnum[orderDetail.status],
                "description": ""
            };
            $scope.total = orderDetail.totalPrice;
            $scope.foodQuantity = function () {
                var totalCount = 0;
                for (var i = 0; i < orderDetail.dishes.length; i++) {
                    var dishItem = orderDetail.dishes[i];
                    totalCount += dishItem.count;
                }
                return totalCount;
            };
        });
    }])
    .factory("orderFactory", ['$q', '$rootScope', '$q', '$http', function ($scope, $rootScope, $q, $http) {
        var orderFactory = {};

        orderFactory.order = {
            orderId: "",
            status: "",
            takeNo: "",
            createTime: "",
            updateTime: "",
            orderType: "",
            distribution: "",
            tel: "",
            operator: "",
            totalPrice: "",
            dishes: ""
        };

        orderFactory.initOrder = function (order) {
            if (!order) return;
            for (var prop in order) {
                if (this.order.hasOwnProperty(prop)) {
                    this.order[prop] = order[prop];
                }
            }
        };

        orderFactory.pullOrder = function (orderId) {
            var deferred = $q.defer();
            if (!orderId) deferred.reject("orderId is null.");
            $http({
                url: $rootScope.RESTBASE + "/order/orderdetail",
                method: "POST",
                params: {
                    sig: $rootScope.defaultSig.sig,
                    orderId: orderId
                }
            }).success(function (data) {
                if (data.ret === 0) {
                    deferred.resolve(data.data);
                } else {
                    deferred.reject(data);
                }
            }).error(function (data) {
                deferred.reject(data);
            });

            return deferred.promise;
        };

        return orderFactory;
    }]);

angular.module('mxs.cart', [])
    .controller('cartCtrl', ['$scope', '$rootScope', '$location', 'Cart', 'userFactory', 'address', '$window', '$http', function (scope, rootScope, $location, Cart, User, address, $window, $http) {
        Cart.init();
        scope.list = Cart.list;
        scope.totalAmount = Cart.totalAmount;
        scope.totalPrice = Cart.totalPrice;
        scope.removeFood = Cart.remove;
        scope.decrease = Cart.decrease;
        scope.add = Cart.add;

        address.save({}, function (addrData) {
            var address = scope.address = addrData.data;
            if (User.getProp("distributeId")) {
                address.forEach(function (item, index, array) {
                    if (item.id == User.getProp("id")) {
                        scope.crtAddress = item;
                    }
                });
            }
        });

        scope.selectAddr = function (addr) {
            scope.crtAddress = addr;
            scope.showAddr = false;
            if (User.user.distributionId !== addr.id) {
                $http({
                        url: rootScope.RESTBASE + "/user/changedistribution",
                        method: "post",
                        params: {
                            sig: rootScope.defaultSig.sig,
                            userId: User.user.id,
                            distributionId: addr.id
                        }
                    }
                ).success(function (data) {
                        User.user.distributionId = addr.id;//update user distribution
                        console.log("update distribute is success: " + JSON.stringify(data));
                    })
                    .error(function (data) {
                        console.log("update distribute is error: " + JSON.stringify(data));
                    });
            }
        };

        scope.checkStatus = function () {
            var orderList = Cart.getOrder();
            if (orderList === null) {
                alert("请选择菜品。");
            } else {
                $window.location.href = "#/cart";
            }
        };

        scope.checkCart = function () {
            var orderList = Cart.getOrder();
            if (orderList === null) {
                alert("请选择菜品");
                return;
            } else if (!scope.crtAddress) {
                alert("请选择取餐地址");
                return;
            } else if (!User.user.tel) {
                $window.location.href = "#/register";
                return;
            }
            $.ajax({
                url: rootScope.RESTBASE + "/order/commitorder",
                type: "post",
                dataType: 'JSON',
                data: {
                    sig: rootScope.defaultSig.sig,
                    userId: User.user.id || -1,
                    voucherId: 0,
                    orderType: 0,
                    remark: scope.note + "" || "",
                    totalPrice: Cart.totalPrice(),
                    dishes: JSON.stringify(orderList)
                },
                success: function (res) {
                    //alert(JSON.stringify(res));
                    if (res.ret == 0) {
                        localStorage.setItem("cartList", "{}");
                        $window.location.href = "#/detail/" + res.data.orderId;
                    } else {
                        alert("订单提交失败：" + res.msg);
                    }
                },
                error: function (data) {
                    alert("fail: " + JSON.stringify(data));
                }
            })
        }
    }])
    .factory('Cart', ['$q', '$rootScope', '$location', function ($q, $rootScope, $location) {
        var n = {
            list: {},
            add: function (e) {
                var t = {
                    id: e.id,
                    name: e.name,
                    price: e.price,
                    quantity: 1,
                    typeId: e.typeId
                };
                return this.list[e.id] ? this.list[e.id].quantity++ : this.list[e.id] = t, localStorage.setItem("cartList", JSON.stringify(this.list)), this.list
            },
            decrease: function (e) {
                var t;
                return this.list[e.id] && this.list[e.id].quantity > 1 ? t = --this.list[e.id].quantity : 1 === this.list[e.id].quantity && (this.list[e.id] && delete this.list[e.id], t = 0), localStorage.setItem("cartList", JSON.stringify(this.list)), this.list
            },
            setList: function (e) {
                for (var t in this.list) delete this.list[t];
                for (var r in e) {
                    var o = e[r],
                        n = {
                            id: o.id,
                            name: o.name,
                            price: o.price,
                            quantity: o.quantity,
                            typeId: o.typeId,
                            remark: o.remark
                        };
                    if (parseInt(o.id) > 6)//take out demo data.
                        this.list[r] = n
                }
                localStorage.setItem("cartList", JSON.stringify(this.list))
            },
            totalAmount: function () {
                var e = 0;
                for (var t in this.list) e += this.list[t].quantity;
                return e
            },
            totalPrice: function () {
                var e = 0;
                for (var t in this.list) e += this.list[t].quantity * this.list[t].price;
                return e
            },
            menuAmount: function (crtMenu, menuObj) {
                var t = 0, crtKey;
                for (var menuKey in menuObj) {
                    if (menuObj[menuKey] === crtMenu) crtKey = menuKey;
                }
                for (var dishKey in this.list) {
                    this.list[dishKey].typeId === parseInt(crtKey) && (t += this.list[dishKey].quantity);
                }
                return t;
            },
            getOrder: function () {
                var temp = {};
                if (this.isEmpty()) return null;
                for (var key in this.list) {
                    temp[key] = this.list[key].quantity;
                }

                return temp;
            },
            find: function (e) {
                return this.list[e.id]
            },
            isEmpty: function () {
                return !Object.keys(this.list).length
            },
            remove: function (e) {
                delete this.list[e.id];
                localStorage.setItem("cartList", JSON.stringify(this.list))
            },
            clear: function () {
                for (var e in this.list) delete this.list[e];
                for (var t in a.restaurant) delete a.restaurant[t];
                localStorage.setItem("cartList", "{}");
            }
        };
        n.init = function () {
            var cartList;
            try {
                cartList = JSON.parse(localStorage.getItem('cartList'));
            } catch (e) {
                localStorage.setItem('cartList', '{}');
            }

            n.setList(cartList);
        };

        return n;
    }])
    .directive('cartAdd', ['Cart', function (cart) {
        return {
            restrict: "A", link: function (scope) {
                var r = scope.dish;
                scope.cart = cart;
                scope.add = function () {
                    cart.add(r);
                }
            }
        };
    }])
    .directive('cartDecrease', ['Cart', function (cart) {
        return {
            restrict: "A", link: function (scope) {
                var r = scope.dish;
                scope.cart = cart;
                scope.decrease = function () {
                    cart.decrease(r);
                }
            }
        }
    }])
    .directive('menuAmount', ['Cart', function (cart) {
        return {
            restrict: "EA", link: function (scope) {
                scope.list = cart.list;
                scope.$watch('list', function () {
                    scope.amount = cart.menuAmount(scope.type, scope.dishType);
                }, !0);
            }
        }
    }]);

angular.module("mxs")
    .factory("userFactory", ["$rootScope", "$http", "$location", function ($rootScope, $http, $location) {
        var getUserCode = function () {
            var tempCode = "";
            var searchArr = location.search.slice(1).split("&");
            for (var i = 0; i < searchArr.length; i++) {
                var itemArr = searchArr[i].split("=");
                if (itemArr[0] === "code") {
                    tempCode = itemArr[1];
                    break;
                }
            }
            return tempCode;
        };

        return userMod = {
            user: {
                id: void 0,
                tel: void 0,
                distributionId: void 0,
                money: void 0
            },
            setUser: function (data) {
                for (var prop in data) {
                    if (this.user.hasOwnProperty(prop)) {
                        this.user[prop] = data[prop];
                    }
                }
            },
            getProp: function (prop) {
                if (prop) return;
                return this.user[prop];
            },
            setProp: function (prop, value) {
                if (!prop || !value) return;
                return this.user[prop] = value;
            },
            pullRemote: function () {
                var _this = this;
                $http({
                    method: "post",
                    url: $rootScope.RESTBASE + "/user/userinfo",
                    params: {
                        sig: $rootScope.defaultSig.sig,
                        code: getUserCode() + ""
                    }
                }).success(function (data) {
                    //alert(JSON.stringify(data));
                    _this.setUser(data.data);
                })
            }
        };
    }]);

angular.module("mxs")
    .controller("registerCtrl", ['$scope', '$rootScope', '$http', '$window', 'userFactory', 'Cart', function (scope, rootScope, $http, $window, user, Cart) {
        scope.user = {
            mobile: "",
            code: ""
        };
        scope.sendCode = function () {
            $http({
                url: rootScope.RESTBASE + "/user/sendvalidatecode",
                method: "post",
                params: {
                    sig: rootScope.defaultSig.sig,
                    userId: user.user.id,
                    tel: scope.user.mobile
                }
            }).success(function (data) {
                alert("验证码发送成功.");
                scope.countdown = !0;
            }).error(function (data) {
                scope.countdown = !1;
            });
        };
        scope.updateTel = function () {
            $http({
                url: rootScope.RESTBASE + "/user/updatetel",
                method: "post",
                params: {
                    sig: rootScope.defaultSig.sig,
                    userId: user.user.id,
                    tel: scope.user.mobile,
                    validateCode: scope.user.code
                }
            }).success(function (data) {
                var orderList = Cart.getOrder();
                $.ajax({
                    url: rootScope.RESTBASE + "/order/commitorder",
                    type: "post",
                    dataType: 'JSON',
                    data: {
                        sig: rootScope.defaultSig.sig,
                        userId: user.user.id || -1,
                        voucherId: 0,
                        orderType: 0,
                        remark: scope.note + "" || "",
                        totalPrice: Cart.totalPrice(),
                        dishes: JSON.stringify(orderList)
                    },
                    success: function (data) {
                        if (data.ret == 0) {
                            alert("订单提交成功: " + JSON.stringify(data));
                            localStorage.setItem("cartList", "{}");
                            $window.location.href = "#/detail";
                        } else {
                            alert("订单提交失败：" + data.msg);
                        }
                    }
                })
            }).error(function (data) {
                alert("更新手机号码失败：" + data.msg);
            })
        };
    }])
    .directive("countdown", function () {
        var e, t = function (t, r, o) {
            return o ? (o = +o, r.text(o), void(e = setInterval(function () {
                return 0 !== o ? r.text(--o) : void t.$apply(function () {
                    t.countdown = !1
                })
            }, 1e3))) : e && clearInterval(e)
        };
        return {
            restrict: "E",
            link: function (e, r, o) {
                e.$watch("countdown", function (n) {
                    return "stop" == n ? function () {
                        t(e, r);
                        e.countdown = !1
                    }() : n ? t(e, r, o.time) : t(e, r)
                })
            }
        }
    });