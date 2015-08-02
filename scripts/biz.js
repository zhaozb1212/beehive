angular.module("mxs", ['ngRoute', 'ngResource', 'mxs.cart', 'mxs.services'])
    .controller('rootCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
        $rootScope.ROOTHOST = 'http://123.57.249.80:80/beehive/microsite/';
    }])

    .directive('skateShoes', ['$timeout', function (a) {
        return {
            restrict: 'A',
            link: function (b, c, d) {
                var e, f = {click: !0, mouseWheel: !0};
                b.$watch(d.skateShoes, function () {
                    b && a(function () {
                        e && e.destroy(), e = new IScroll(c[0], f);
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

    .controller('orderCtrl', ['$scope', 'address', 'Cart', function (scope, address, Cart) {
        address.save({}, function (addrData) {
            scope.address = addrData.data;
        });

        scope.selectAddr = function (addr) {
            console.log('--->>', addr);
            scope.crtAddress = addr;
            scope.showAddr = false;
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
        console.log('routeProvider', routeProvider);
        routeProvider.when('/index', {
            templateUrl: 'tpl/menuList.html',
            controller: 'listCtrl'
        }).when('/cart', {
            templateUrl: 'tpl/cartList.html',
            controller: 'cartCtrl'
        }).when('/order', {
            templateUrl: 'tpl/order.html',
            controller: 'orderCtrl'
        }).otherwise({
            templateUrl: 'tpl/menuList.html',
            controller: 'listCtrl'
        })
    }]);

angular.module('mxs.cart', [])
    .controller('cartCtrl', ['$scope', '$location', 'Cart', function (scope, $location, Cart) {
        Cart.init();
        scope.list = Cart.list;
        scope.totalAmount = Cart.totalAmount;
        scope.totalPrice = Cart.totalPrice;
        scope.removeFood = Cart.remove;
        scope.decrease = Cart.decrease;
        scope.add = Cart.add;

        scope.checkCart = function () {
            $location.url('#/order');
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
                localStorage.setItem("cartList", "{}"), localStorage.setItem("cartRestaurant", "{}")
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