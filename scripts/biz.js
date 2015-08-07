angular.module("mxs", ['ngRoute', 'ngResource', 'mxs.cart', 'mxs.services'])
    .controller('rootCtrl', ['$scope', '$rootScope', "userFactory", function ($scope, $rootScope, userFactory) {
        //init user
        userFactory.pullRemote();
        //alert(JSON.stringify(userFactory.user))
    }])

    .directive('skateShoes', ['$timeout', function (a) {
        return {
            restrict: 'A',
            link: function (b, c, d) {
                var e, f = {click: !0, mouseWheel: !0};
                b.$watch(d.skateShoes, function () {
                    b && a(function () {
                        e && e.destroy();
                        e = new IScroll(c[0], f);
                    })
                })
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
        var cacheDishes, cacheDishType;
        dishes.save({}, function (dishes) {
            scope.dishType = cacheDishType = dishes.data.dishesType;
            cacheDishes = dishes.data.dishes;

            var tempDishes = cacheDishes && cacheDishes.filter(function (item, index, arr) {
                    return item.typeId === 1;
                });
            scope.dishes = tempDishes;
        });
        scope.currentIndex = 1;

        scope.selectMenu = function (index, type) {
            (scope.currentIndex !== index) && (scope.currentIndex = index);

            for (var t in cacheDishType) {
                if (type === cacheDishType[t]) {
                    var tempDishes = cacheDishes && cacheDishes.filter(function (item, index, arr) {
                            return item.typeId === parseInt(t);
                        });
                    scope.dishes = tempDishes;
                }
            }
        }
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
        }).otherwise({
            templateUrl: 'tpl/menuList.html',
            controller: 'listCtrl'
        })
    }]);

angular.module('mxs.cart', [])
    .controller('cartCtrl', ['$scope', '$rootScope', '$location', 'Cart', 'userFactory', 'address', function (scope, rootScope, $location, Cart, User, address) {
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
        };

        scope.checkCart = function () {
            var orderList = Cart.getOrder();
            if (orderList === null) {
                alert("请选择菜品");
                return;
            } else if (!scope.crtAddress) {
                alert("请选择取餐地址");
                return;
            }
            alert(JSON.stringify(User.user));
            $.ajax({
                url: rootScope.RESTBASE + "/order/commitorder",
                type: "post",
                //contentType: "application/json",
                dataType: 'JSON',
                data: {
                    sig: "DBE8317A0D713425B738C762D1639492",
                    userId: User.user.id || -1,
                    voucherId: 0,
                    orderType: 0,
                    remark: scope.note + "" || "",
                    totalPrice: Cart.totalPrice(),
                    dishes: JSON.stringify(orderList)
                },
                success: function (data) {
                    if (data.ret == 0) {
                        alert("订单提交成功")
                    } else {
                        alert("订单提交失败：" + data.msg);
                    }
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
                            typeId: o.typeId
                        };
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
            //var searchObj = $location.search();
            //alert("angular location search obj: " + JSON.stringify(searchObj));
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
            //return searchObj && searchObj.code ? searchObj.code + "" : "";
        };
        //alert("userCode: " + getUserCode());
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
                    _this.setUser(data.data);
                })
            }
        };
    }]);

angular.module("mxs")
    .controller("registerCtrl", ['$scope', function (scope) {
        scope.user = {
            mobile: "",
            password: "",
            code: ""
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
                        t(e, r), e.countdown = !1
                    }() : n ? t(e, r, o.time) : t(e, r)
                })
            }
        }
    });