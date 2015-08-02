angular.module("meleme.cart")
    .controller("cartCtrl", ["$scope", "$rootScope", "$location", "Coupon", "Spell", "SpellStatus", "Restaurant", "newCart", function (a, b, c, d, e, f, g, h) {
        var i = c.search(), j = function () {
            c.url("/spell?cartId=" + i.cartId + "&sig=" + i.sig)
        };
        if (h.init(), a.spell = {enable: !1, finish: !1}, a.spell.enable = !!i.spell, b.bodyWhite = 0, a.coupon = {
                show: !1,
                errorMsg: null
            }, a.list = h.list, a.totalAmount = h.totalAmount, a.totalPrice = h.totalPrice, a.getRestaurant = h.getRestaurant, a.removeFood = h.remove, "/cart" === c.path() && wechat("hideOptionMenu"), a.spell.enable) {
            var k = localStorage.getItem("wechatInfo");
            k = k ? JSON.parse(k) : {}, a.cartTitle = "已选择美食", a.spell.url = "?cartId=" + i.cartId + "&sig=" + i.sig + "&spell=1", a.spellName = k.nickname;
            var l, m = function () {
                return "/spell" === c.path() && l ? clearTimeout(l) : void e.get({
                    cartId: i.cartId,
                    sig: i.sig
                }, function (b) {
                    return b.error ? c.redirect("/404") : void(f(b.data) > 0 && !a.spell.finish && swal({
                        title: "出错啦",
                        text: "拼单已经停止，请返回查看状态！",
                        type: "warning"
                    }, function () {
                        c.url("/spell?spell=1&cartId=" + i.cartId + "&sig=" + i.sig)
                    }))
                })
            };
            m(), l = setTimeout(m, 1e4)
        } else a.cartTitle = "美食篮子", a.spell.enable = !1;
        a.checkCart = function () {
            if (a.spell.enable || c.url("/delivery?total=" + a.totalPrice() + "&name=" + h.getRestaurant().name_for_url), a.spellName) {
                var b = [];
                for (var d in h.list)b.push({id: Number(d), quantity: h.list[d].quantity, garnish: []});
                e.save({cartId: i.cartId, sig: i.sig}, {
                    name: a.spellName,
                    group: b,
                    avatar: k.headimgurl || ""
                }, function (b) {
                    "ok" === b.status && (localStorage.setItem("spellCartName", JSON.stringify(a.spellName)), localStorage.setItem("spellCartId", JSON.stringify(i.cartId)), h.clear(), a.spell.finish = !0, j())
                })
            }
        }, a.onCouponSubmit = function () {
            a.couponNum && d.save(angular.$().param({csrf_token: b.profile.csrf_token, sn: a.couponNum}), function (b) {
                b.error ? a.coupon.errorMsg = b.error && b.error.msg : (a.coupon.errorMsg = null, a.coupon.show = !1)
            })
        }
    }]).directive("cartControl", ["newCart", function (a) {
        return {
            restrict: "E",
            templateUrl: "/msite/html/restaurant_cartcontrol.html",
            scope: {restaurant: "=", food: "="},
            link: function (b) {
                b.cart = {}, b.cart.list = a.list
            }
        }
    }]).directive("cartAdd", ["newCart", function (a) {
        return {
            restrict: "E", link: function (b, c, d) {
                var e = b.food, f = b.restaurant || b.getRestaurant();
                (5 === f.status || 1 === f.status) && (a.isEmpty() && a.setRestaurant(f), b.add = function () {
                    if (f.name_for_url === a.getRestaurant().name_for_url || a.isEmpty())a.add(e); else {
                        var b = confirm("你的美食篮子里有其它餐厅的美食，清空美食篮子吗？");
                        if (!b)return;
                        a.clear(), a.setRestaurant(f), a.add(e)
                    }
                })
            }
        }
    }]).directive("cartDecrease", ["newCart", function (a) {
        return {
            restrict: "E", link: function (b, c, d) {
                var e = (b.food, b.restaurant || b.getRestaurant());
                (5 === e.status || 1 === e.status) && (b.decrease = function () {
                    a.find(b.food) && a.decrease(b.food)
                })
            }
        }
    }]).directive("menuAmount", ["newCart", function (a) {
        return {
            restrict: "EA", link: function (b, c, d) {
                b.list = a.list, b.$watch("list", function (c) {
                    b.amount = a.menuAmount(b.menu)
                }, !0)
            }
        }
    }]).factory("newCartVender", ["$resource", "$rootScope", function (a, b) {
        return a(b.RESTBASE + "/carts/:cart_id/:action/:method", {
            cart_id: "@cart_id",
            action: "@action",
            method: "@method"
        }, {post: {method: "POST"}, change: {method: "PATCH"}, clear: {method: "POST", params: {_method: "DELETE"}}})
    }]).factory("newCart", ["newCartVender", "$q", "$rootScope", "$location", function (a, b, c, d) {
        var e = {
            list: {}, get: function () {
                return f.get()
            }, getRemote: function (a, b) {
                return f.getRemote(a, b)
            }, getRestaurant: function () {
                return f.restaurant
            }, setRestaurant: function (a) {
                var b = ["id", "name", "name_for_url", "minimum_order_amount", "delivery_fee", "minimum_free_delivery_amount", "status", "is_coupon_enabled"];
                for (var c in a)-1 !== b.indexOf(c) && (f.restaurant[c] = a[c]);
                localStorage.setItem("cartRestaurant", JSON.stringify(f.restaurant))
            }, add: function (a) {
                var b = {
                    id: a.id,
                    name: a.name,
                    category_id: a.category_id,
                    price: a.price,
                    stock: a.stock,
                    must_pay_online: a.must_pay_online,
                    quantity: 1
                };
                return this.list[a.id] ? this.list[a.id].quantity++ : this.list[a.id] = b, localStorage.setItem("cartList", JSON.stringify(this.list)), this.list[a.id].quantity
            }, decrease: function (a) {
                var b;
                return this.list[a.id] && this.list[a.id].quantity > 1 ? b = --this.list[a.id].quantity : 1 === this.list[a.id].quantity && (this.list[a.id] && delete this.list[a.id], b = 0), localStorage.setItem("cartList", JSON.stringify(this.list)), b
            }, set: function (a) {
                for (var b in this.list)delete this.list[b];
                for (var b in a) {
                    var c = a[b], d = {
                        id: c.id,
                        name: c.name,
                        category_id: c.category_id,
                        price: c.price,
                        stock: c.stock,
                        must_pay_online: c.must_pay_online,
                        quantity: c.quantity
                    };
                    this.list[b] = d, localStorage.setItem("cartList", JSON.stringify(this.list))
                }
            }, change: function (b, c) {
                return a.change(angular.extend({cart_id: f.id, sig: f.sig, type: b}, c))
            }, sync: function () {
                return f.sync()
            }, totalAmount: function () {
                var a = 0;
                for (var b in this.list)a += this.list[b].quantity;
                return a
            }, totalPrice: function () {
                var a = 0;
                for (var b in this.list)a += this.list[b].quantity * this.list[b].price;
                return a
            }, menuAmount: function (a) {
                if (!a.id || !a.foodIdList.length)return 0;
                var b = 0;
                return a.foodIdList.forEach(function (a) {
                    this.list[a] && (b += this.list[a].quantity)
                }.bind(this)), b
            }, find: function (a) {
                return this.list[a.id]
            }, isEmpty: function () {
                return !Object.keys(this.list).length
            }, remove: function (a) {
                delete this.list[a.id]
            }, clear: function () {
                for (var a in this.list)delete this.list[a];
                for (var b in f.restaurant)delete f.restaurant[b];
                localStorage.setItem("cartList", "{}"), localStorage.setItem("cartRestaurant", "{}")
            }, destroy: function () {
                var a = b.defer();
                return f.clear({type: "group", group_index: 0}).$promise.then(function () {
                    for (var b in this.list)delete this.list[b];
                    localStorage.removeItem("cartId"), localStorage.removeItem("cartSig"), localStorage.setItem("cartList", "{}"), delete f.id, delete f.sig, a.resolve()
                }.bind(this), function (b) {
                    a.reject()
                }), a.$promise = a.promise, a
            }
        }, f = {restaurant: {}};
        return f.create = function () {
            var c = b.defer();
            return a.post({come_from: "mobile"}).$promise.then(function (a) {
                f.id = a.cart.id, f.sig = a.sig, localStorage.setItem("cartId", JSON.stringify(a.cart.id)), localStorage.setItem("cartSig", JSON.stringify(a.sig)), localStorage.setItem("cartList", "{}"), localStorage.setItem("cartRestaurant", "{}"), c.resolve(a)
            }, function () {
                throw"购物车创建失败"
            }), c.$promise = c.promise, c.$promise
        }, f.get = function () {
            var a = b.defer();
            f.sig = JSON.parse(localStorage.getItem("cartSig")), f.id = JSON.parse(localStorage.getItem("cartId"));
            var c = JSON.parse(localStorage.getItem("cartRestaurant"));
            return c ? f.restaurant = c : localStorage.setItem("cartRestaurant", "{}"), null === f.restaurant && localStorage.setItem("cartRestaurant", "{}"), setTimeout(function () {
                a.resolve()
            }, 0), a.promise
        }, f.getRemote = function (b, c) {
            return a.get({cart_id: b, sig: c})
        }, f.clear = function (b) {
            return a.clear(angular.extend({cart_id: f.id, sig: f.sig}, b))
        }, f.sync = function () {
            var a = [];
            for (var b in e.list)a.push({id: b, quantity: e.list[b].quantity});
            var c = e.change("entities_set", {group_index: 0, entities: a, remove_type: "group"});
            return c
        }, e.init = function () {
            var a, b, c;
            if (!(d.search().cartId && d.search().sig && d.search().spell)) {
                a = JSON.parse(localStorage.getItem("cartList"));
                var g = document.cookie.split(";");
                g.some(function (a) {
                    if (a.match(/\scart=(.+)/)) {
                        var d = decodeURIComponent(a.match(/\scart=(.+)/)[1]).split(":");
                        return c = d[0], b = d[1], localStorage.setItem("cartId", JSON.stringify(c)), localStorage.setItem("cartSig", JSON.stringify(b)), !0
                    }
                }), a && e.set(a), c && b ? f.$promise = e.get() : f.$promise = f.create()
            }
        }, e
    }]);