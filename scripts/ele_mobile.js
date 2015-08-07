angular.$ = function (a) {
    return a = angular.isString(a) ? document.querySelectorAll(a) : a, angular.element(a)
};
angular.element.prototype.parent = function (a) {
    if (!a)return angular.$(this[0].parentNode);
    for (var b, c = [].slice.call(document.querySelectorAll(a)), d = this[0]; "HTML" !== d.nodeName;) {
        d = d.parentNode;
        var e = c.indexOf(d);
        -1 === e || (b = d, d = document.documentElement)
    }
    return angular.$(b)
};
angular.element.prototype.param = function (a) {
    if (a) {
        var b = "";
        for (var c in a)/^\$/.test(c) || (b += encodeURIComponent(c) + "=" + encodeURIComponent(a[c]) + "&");
        return b.slice(0, -1)
    }
    s
};
angular.element.prototype.find = function (a) {
    if (!a)return angular.$();
    var b = [].slice.call(document.querySelectorAll(a)), c = [].slice.call(this[0].getElementsByTagName("*")), d = [];
    return b.forEach(function (a) {
        -1 !== c.indexOf(a) && d.push(a)
    }), angular.$(d)
};
angular.module("meleme.controllers", []);
angular.module("meleme.cart", []);
angular.module("meleme", ["ngRoute", "ngResource", "ngAnimate", "infinite-scroll", "hosts",
    "UBT", "batchrequest", "angular-carousel", "meleme.filters", "meleme.services", "meleme.directives",
    "meleme.controllers", "meleme.cart"]).config(["$routeProvider", "$locationProvider", "$interpolateProvider",
    "$compileProvider", "$resourceProvider", "$provide", function (a, b, c, d, e, f) {
        e.defaults.actions.put = {method: "PUT"}, e.defaults.actions.post = {method: "POST"}, d.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|eleme|file|tel):/), c.startSymbol("[[").endSymbol("]]"), f.decorator("ngClickDirective", ["$delegate", function (a) {
            return a.shift(), a
        }]), b.html5Mode({enabled: !0, requireBase: !1}), a.when("/home", {
            templateUrl: "/msite/html/home_city.html",
            controller: "homeCtrl"
        }), a.when("/city/:id", {
            templateUrl: "/msite/html/home_search.html",
            controller: "homeSearchCtrl"
        }), a.when("/search/:geohash", {
            templateUrl: "/msite/html/geoplace_search.html",
            controller: "geoSearchCtrl",
            controllerAs: "search"
        }), a.when("/login", {
            templateUrl: "/msite/html/account_login.html",
            controller: "loginCtrl"
        }), a.when("/register", {
            templateUrl: "/msite/html/account_register.html",
            controller: "registerCtrl"
        }), a.when("/loginmsg", {
            templateUrl: "/msite/html/account_loginmsg.html",
            controller: "loginmsgCtrl"
        }), a.when("/findpw", {
            templateUrl: "/msite/html/account_findPassword.html",
            controller: "findPasswordCtrl"
        }), a.when("/agreement", {templateUrl: "/msite/html/account_agreement.html"}), a.when("/verify", {
            templateUrl: "/msite/html/account_verifyMobile.html",
            controller: "verifyMobileCtrl"
        }), a.when("/404", {
            templateUrl: "/msite/html/base_404.html",
            controller: "nofoundCtrl"
        }), a.when("/cart", {
            templateUrl: "/msite/html/order_cart.html",
            controller: "cartCtrl"
        }), a.when("/delivery", {
            templateUrl: "/msite/html/order_delivery.html",
            controller: "deliveryCtrl"
        }), a.when("/order/:id/success", {
            templateUrl: "/msite/html/order_success.html",
            controller: "orderSuccessCtrl"
        }), a.when("/trade", {
            templateUrl: "/msite/html/trade_list.html",
            controller: "tradeCtrl"
        }), a.when("/trade/:id", {
            templateUrl: "/msite/html/trade_order.html",
            controller: "tradeOrderCtrl"
        }), a.when("/cancel_order/:id", {
            templateUrl: "/msite/html/trade_cancelOrder.html",
            controller: "tradeCancelOrderCtrl"
        }), a.when("/spell", {
            templateUrl: "/msite/html/spell_info.html",
            controller: "spellCtrl"
        }), a.when("/pay", {
            templateUrl: "/msite/html/pay_base.html",
            controller: "payCtrl"
        }), a.when("/download", {templateUrl: "/msite/html/base_download.html"}), a.when("/hongbao", {
            templateUrl: "/msite/html/hongbao_base.html",
            controller: "hongbaoCtrl",
            reloadOnSearch: !1
        }), a.when("/hongbaobaida", {
            templateUrl: "/msite/html/baida_base.html",
            controller: "hongbaoBaidaCtrl"
        }), a.when("/orderactivity/:id", {template: "<order-activity></order-activity>"}), a.when("/profile", {
            templateUrl: "/msite/html/profile_base.html",
            controller: "profileCtrl"
        }), a.when("/profile/bind", {
            templateUrl: "/msite/html/profile_bindMobile.html",
            controller: "bindMobileCtrl"
        }), a.when("/profile/unbind", {
            templateUrl: "/msite/html/profile_unbindMobile.html",
            controller: "unbindMobileCtrl"
        }), a.when("/profile/service", {
            templateUrl: "/msite/html/profile_service.html",
            controller: "profileServiceCtrl"
        }), a.when("/profile/info", {
            templateUrl: "/msite/html/profile_info.html",
            controller: "profileInfoCtrl"
        }), a.when("/profile/setusername", {
            templateUrl: "/msite/html/profile_setUsername.html",
            controller: "profileSetUsernameCtrl"
        }), a.when("/profile/setpw", {
            templateUrl: "/msite/html/profile_setPassword.html",
            controller: "profileSetPasswordCtrl"
        }), a.when("/profile/changepw", {
            templateUrl: "/msite/html/profile_changePasswordByMobile.html",
            controller: "profileChangePasswordByMobileCtrl"
        }), a.when("/profile/changepw/mobile", {
            templateUrl: "/msite/html/profile_changePasswordByMobile.html",
            controller: "profileChangePasswordByMobileCtrl"
        }), a.when("/profile/changepw/old", {
            templateUrl: "/msite/html/profile_changePasswordByOld.html",
            controller: "profileChangePasswordByOldCtrl"
        }), a.when("/profile/info/address", {
            templateUrl: "/msite/html/profile_address.html",
            controller: "profileAddressCtrl"
        }), a.when("/profile/info/address/add", {
            templateUrl: "/msite/html/profile_addAddress.html",
            controller: "profileAddressCtrl"
        }), a.when("/profile/hongbao", {
            templateUrl: "/msite/html/profile_hongbao.html",
            controller: "profileHongbaoCtrl"
        }), a.when("/profile/hongbao/exchange", {
            templateUrl: "/msite/html/profile_hongbaoExchange.html",
            controller: "profileHongbaoExchangeCtrl"
        }), a.when("/profile/balance", {
            templateUrl: "/msite/html/profile_balance.html",
            controller: "profileBalanceCtrl"
        }), a.when("/profile/recharge", {
            templateUrl: "/msite/html/profile_recharge.html",
            controller: "profileRechargeCtrl"
        }), a.when("/profile/withdraw", {
            templateUrl: "/msite/html/profile_withdraw.html",
            controller: "profileWithdrawCtrl"
        }), a.when("/profile/points", {
            templateUrl: "/msite/html/profile_points.html",
            controller: "profilePointsCtrl"
        }), a.when("/profile/member", {
            templateUrl: "/msite/html/profile_member.html",
            controller: "profileMemberCtrl"
        }), a.when("/profile/member/query", {
            templateUrl: "/msite/html/profile_memberQuery.html",
            controller: "profileMemberQueryCtrl"
        }), a.when("/profile/member/charge", {
            templateUrl: "/msite/html/profile_memberCharge.html",
            controller: "profileMemberChargeCtrl"
        }), a.when("/profile/explain/:page", {
            templateUrl: "/msite/html/profile_explain.html",
            controller: "profileExplainCtrl"
        }), a.when("/profile/gift", {
            templateUrl: "/msite/html/profile_gift.html",
            controller: "profileGiftCtrl"
        }), a.when("/gift", {
            templateUrl: "/msite/html/gift_list.html",
            controller: "giftCtrl"
        }), a.when("/gift/:id", {
            templateUrl: "/msite/html/gift_detail.html",
            controller: "giftDetailCtrl"
        }), a.when("/place", {redirectTo: "/home"}), a.when("/place/:geohash", {
            templateUrl: "/msite/html/geoplace_geo.html",
            controller: "geoNormalCtrl"
        }), a.when("/place/:geohash/premium", {
            templateUrl: "/msite/html/geoplace_geo.html",
            controller: "geoPremiumCtrl"
        }), a.when("/:name", {
            templateUrl: "/msite/html/restaurant_menu.html",
            controller: "restaurantCtrl"
        }), a.when("/:name/photos", {
            templateUrl: "/msite/html/restaurant_photos.html",
            controller: "restaurantPhotoCtrl"
        }), a.when("/:name/info", {
            templateUrl: "/msite/html/restaurant_info.html",
            controller: "restaurantInfoCtrl"
        }), a.when("/:name/:id", {
            templateUrl: "/msite/html/restaurant_food.html",
            controller: "restaurantFoodCtrl"
        }), a.when("/:name/:id/photos", {
            templateUrl: "/msite/html/restaurant_foodphoto.html",
            controller: "restaurantFoodPhotosCtrl"
        }), a.otherwise({redirectTo: "/404"})
    }]).constant("RESTAURANT_SECTIONS_HEIGHT", {
    header: {className: "eleme-header", height: 44},
    tab: {className: "restaurant-tabs", height: 38},
    cart: {className: "menu-cart", height: 32}
}).constant("RESTAURANT_FLAVORS", ["中式", "西式", "港式", "奶茶", "烧烤", "日式", "韩式", "甜点", "汉堡", "清真"]);
angular.module("meleme.filters", []).filter("split", [function () {
    return function (a, b) {
        return b = b || "-", a.split("").join(b)
    }
}]).filter("abs", [function () {
    return function (a) {
        return Math.abs(+a)
    }
}]).filter("smallerimg", [function () {
    return function (a) {
        return a.replace(/\/0$/, "/64")
    }
}]).filter("truncate", [function () {
    return function (a, b, c) {
        return b = isNaN(b) ? b : 10, c = String(c) || "…", a.length > b || a.length - c.length > b ? String(a).substring(0, b - c.length) + c : a
    }
}]).filter("hideMobileNumber", [function () {
    return function (a) {
        return a = a.slice(0, 3) + "****" + a.slice(-4)
    }
}]).filter("flatten", [function () {
    return function (a) {
        var b = [];
        return b = b.concat.apply(b, a)
    }
}]).filter("to_trusted", ["$sce", function (a) {
    return function (b) {
        return a.trustAsHtml(b)
    }
}]).filter("mobileMasker", function () {
    return function (a) {
        return String(a).replace(/^(\w{3})(\w{4})/, "$1****")
    }
}).filter("deliverTime", function () {
    return function (a) {
        if (a) {
            var b, c, d = new Date(Date.now() + 288e6).toISOString().match(/(..):(..)/)[0];
            return a.some(function (a) {
                return b = a.match(/..:../g)[0], b > d ? (c = b, !0) : void 0
            }), c || "明天" + a[0].match(/..:../)[0]
        }
    }
}).filter("distanceFormat", function () {
    return function (a) {
        return !a || isNaN(Number(a)) ? null : Number(a) >= 1e3 ? Number(a) / 1e3 + "千米" : Number(a) + "米"
    }
}).filter("timeDiff", [function () {
    return function (a) {
        var b = (new Date).getTime(), c = a.split("-");
        c = (b - new Date(c[0], c[1] - 1, c[2]).getTime()) / 864e5 - 1;
        var d = c > 0 ? " 天前" : " 天后";
        return c = Math.abs(c.toFixed()), c ? c + d : "今天后"
    }
}]), void function () {
    var a = Date.parse;
    Date.parse = function (b) {
        var c = String(b).match(/^(\d+)-(\d+)-(\d+)T(\d+):(\d+):(\d+)\D?(\d*)$/);
        if (c) {
            var d = c[7].split(/(?=..$)/g);
            return d[0] = 0 | d[0], d[1] = 0 | d[1], new Date(Date.UTC(c[1], c[2] - 1, c[3], c[4] - d[0], c[5] - d[1], c[6]))
        }
        return a.apply(this, arguments)
    }
}(), void function () {
    var a = document.cookie.match(/(?:^|; )track_fingerprint_1=(.*?)(?:; |$)|$/)[1];
    if (!a) {
        var b = new Fingerprint, c = b.get(), d = document.cookie.match(/(?:^|; )track_id=(.*?)(?:; |$)|$/)[1], e = new XMLHttpRequest;
        e.open("POST", "/restapi/v1/browser_fingerprints", !0);
        var f = {track_id: d, json_string: JSON.stringify(c)};
        e.send(JSON.stringify(f)), a = b.murmurhash3_32_gc(JSON.stringify(f), 31);
        var g = document.domain.match(/[\w-]+\.?[\w-]+$/)[0];
        document.cookie = "track_fingerprint_1=" + a + "; Expires=Wed, 31 Dec 2098 16:00:00 GMT; Domain=" + g + "; Path=/"
    }
}(), angular.module("meleme.controllers").controller("bindMobileCtrl", ["$scope", "Page", "Mobile", "$rootScope", "VerifyCode", "UserAgent", "$location", "$timeout", function (a, b, c, d, e, f, g, h) {
    a.isFromApp && (b.title = "绑定手机"), d.profile.$promise.then(function () {
        return d.profile.user_mobile_token || 1 !== d.profile.is_mobile_valid ? void 0 : g.url("/profile/unbind")
    }), a.user = {
        mobile: "",
        code: "",
        serverError: !1
    }, a.user.user_mobile_token = d.profile.mobile_token, a.sendCode = function (b) {
        e.save({way: "mobile", action: "send"}, {mobile: a.user.mobile, type: b}, function (c) {
            a.user.serverError = !1, a.user.validate_token = c.validate_token, "sms" === b ? a.countdown = !0 : a.user.audio = !0
        }, function (b) {
            switch (a.user.serverError = !0, b.data.name) {
                case"VALIDATION_FAILED":
                    a.user.errorMsg = "请填写手机号码";
                    break;
                default:
                    a.user.errorMsg = "服务器好像有问题啦"
            }
        })
    }, a.bind = function () {
        return Number(d.profile.mobile) === Number(a.user.mobile) ? swal({
            title: "无法绑定",
            text: "新手机号同当前绑定手机号一样",
            confirmButtonText: "确定"
        }) : void c.bindMobile({
            mobile_token: a.user.mobile_token,
            user_mobile_token: d.profile.user_mobile_token
        }, function (b) {
            d.profile.mobile = a.user.mobile;
            var c = g.search().redirectPath;
            c ? g.path(c) : a.bindSuccess = !0
        }, function (b) {
            switch (a.user.serverError = !0, b.data.name) {
                case"MOBILE_OCCUPIED_WITHOUT_BALANCE":
                    swal({
                        title: "无法绑定",
                        text: "该手机号已被其他账号绑定。如果继续，原账号将自动解绑，确认绑定吗？",
                        confirmButtonText: "确定",
                        showCancelButton: "true",
                        cancelButtonText: "取消"
                    }, function (b) {
                        b && c.bindMobile({
                            mobile_token: a.user.mobile_token,
                            user_mobile_token: d.profile.user_mobile_token,
                            force: !0
                        }, function () {
                            a.bindSuccess = !0
                        })
                    });
                    break;
                case"MOBILE_OCCUPIED_WITH_BALANCE":
                    swal({title: "无法绑定", text: "该手机号已被其他账号绑定，且原账号内有余额或红包，建议直接使用原账号登录", confirmButtonText: "知道了"});
                    break;
                case"INVALID_MOBILE_TOKEN":
                    a.user.errorMsg = "无效的手机令牌";
                    break;
                case"INVALID_USER_MOBILE_TOKEN":
                    a.user.errorMsg = "无效的用户手机令牌";
                    break;
                default:
                    a.user.errorMsg = "未知的服务器错误"
            }
        })
    }, a.formSubmit = function (b) {
        e.save({way: "mobile", action: "validate"}, {
            validate_token: a.user.validate_token,
            validate_code: b.code
        }, function (b) {
            a.user.mobile_token = b.mobile_token, a.countdown = !1, a.user.serverError = !b.validate, b.validate ? a.bind() : (a.user.serverError = !0, a.user.errorMsg = "验证码错误", a.countdown = !1)
        })
    }
}]), angular.module("meleme.cart")
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
    }]), angular.module("meleme.controllers").controller("deliveryCtrl", ["$scope", "$rootScope", "$location", "newCart", "Restaurant", "Address", "Invoice", "Order", "Mcb", "Discount", "ProfileUser", "ProfileAddr", function (a, b, c, d, e, f, g, h, i, j, k, l) {
    d.init();
    var m = d.sync().$promise;
    a.payInfo = {item: ["餐到付款", "在线支付"], index: 0}, a.server = {done: !1}, a.toggle = function (b) {
        a.payInfo.index = b, a.payMethod(b)
    };
    var n = function (b, c) {
        localStorage.setItem(b, JSON.stringify(c)), a[b] = c
    }, o = function (a, b) {
        angular.extend(a, b), delete a.id
    }, p = function (b, c) {
        b && j.get({action: "check", phone: b || "", phone_bk: c || ""}, function (b) {
            b.error || (a.discount = b.data)
        })
    }, q = function (b) {
        d.change("is_online_paid", {is_online_paid: b || 0}).$promise.then(function (b) {
            b.error || (a.server.foods = b.group[0], a.server.totalPrice = b.total, a.server.extras = b.extra, a.server.abandoned_extras = b.abandoned_extra)
        }, function () {
            console.error("获取支付方式优惠失败")
        })
    };
    a.payMethod = q, a.payMethod(), e.get({nameForUrl: c.search().name}, function (b) {
        a.restaurant = b, a.payOnlineInfo = function () {
            return b.is_online_payment ? "支持余额，支付宝支付，可以使用红包" : "该餐厅不支持在线支付"
        }
    }), m.then(function (b) {
        a.server.foods = b.group[0], a.server.totalPrice = b.total, a.server.extras = b.extra, a.server.abandoned_extras = b.abandoned_extra
    }, function (a) {
        console.error("购物车同步失败 due to: " + a)
    }), a.checkRecipt = function (b) {
        if (b && b.is_support_invoice) {
            var d = c.search().total;
            return d = d - b.invoice_min_amount >= 0, a.supportInvoice = d, d
        }
    };
    var r;
    a.order = r = {
        is_online_paid: 0,
        note: "",
        deliver_time: "",
        invoice: "",
        consignee: ""
    }, a.invoice = g.get(function (b) {
        if (!b.error) {
            var c = b.data.length ? b.data[0] : a.currentInvoice;
            o(r, c), a.currentInvoice = c
        }
    });
    var s = function (b) {
        if (!b || !b.user_id) {
            var c = localStorage.getItem("anonymousAddr");
            return void(c && (a.currentAddr = JSON.parse(c)))
        }
        f.get({user_id: b.user_id}, function (b) {
            !b.error && b.length && (a.address = b, b.forEach(function (b, c) {
                b.is_user_default && (a.currentAddr = b)
            }), a.currentAddr && (o(r, a.currentAddr), p(a.currentAddr.phone, a.currentAddr.phone_bk)))
        })
    }, t = localStorage.getItem("currentInvoice");
    a.currentInvoice = t && JSON.parse(t), b.profile.$promise.then(function (a) {
        s(a)
    })["catch"](function (a) {
        401 === Number(a.status) && s(null)
    }), a.addAddr = function () {
        a.addr.phone_bk = a.addr.phone_bk || "";
        var c = function () {
            b.profile.user_id || n("anonymousAddr", a.addr, a), n("currentAddr", a.addr, a), a.showNewAddr = null, a.showAddr = null, a.addressNotFill = !1, a.addr = null
        };
        return angular.extend(r, a.addr), b.profile.user_id ? void f.save({user_id: b.profile.user_id}, a.addr, function (d) {
            if (!d.error) {
                a.addr.id = d.address_id, a.address.unshift(a.addr);
                var e = d.address_id;
                l.update({address_id: e}, function (a) {
                    a.error || (s(b.profile), c())
                })
            }
        }) : c()
    }, a.removeAddr = function (c, d) {
        a.editing = !1, f.remove({address_id: c}, function (c) {
            c.error || ((a.currentAddr.address === a.address[d].address || 1 === a.address.length) && (a.currentAddr = null), s(b.profile))
        })
    }, a.addInvoice = function () {
        var c = function () {
            n("currentInvoice", a.recipt), a.showNewRecipt = null, a.showRecipt = null, a.invoice = g.get(), a.selectedInvoice = 0
        };
        return b.profile.user_id ? void g.save({csrf_token: b.profile.csrf_token}, angular.$().param(a.recipt), function (a) {
            return a.error ? void 0 : c()
        }) : c()
    }, a.removeInvoice = function (c, d) {
        g["delete"]({csrf_token: b.profile.csrf_token, id: c}, function (b) {
            b.error || a.invoice.data.splice(d, 1)
        })
    }, a.setCurrent = function (c, d) {
        var e, f = "invoice" === d, g = f ? a.invoice.data : a.address;
        -1 !== c && (e = g[c]), f && -1 === c && (e = {invoice_pay_to: "不需要发票"}), angular.extend(r, e), r.invoice_pay_to && (r.invoice = r.invoice_pay_to), delete r.id, delete r.$$hashKey, delete r.invoice_pay_to, n(f ? "currentInvoice" : "currentAddr", e), a.showAddr = null, a.showRecipt = null, a.editing = !1, f ? a.selectedInvoice = c : l.update({address_id: a.address[c].id}, function (a) {
            a.error || s(b.profile)
        })
    }, a.message = function (b, c) {
        a["invalid" + b] = a[c][b].$invalid
    }, a.loginPrepare = function () {
        window.location = "https://" + a.MOBILEHOST + "/login?redirect=" + encodeURIComponent(c.absUrl())
    };
    var u = function () {
        r.name && (r.consignee = r.name, "不需要发票" === r.invoice && (r.invoice = ""), delete r.name), a.payInfo.index && (r.is_online_paid = 1), m.then(function () {
            h.save(angular.$().param(r), function (b) {
                return b.error ? (a.orderClosed = !1, swal("出错啦", b.error.msg, "warning")) : (c.url(a.payInfo.index ? "/pay?id=" + b.data.order_id + "&status=start" : "/order/" + b.data.order_id + "/success"), void(a.orderClosed = !1))
            })
        }, function () {
            console.error("购物车信息同步失败")
        })
    };
    a.instaCheckCode = function () {
        var b = angular.$('input[name="code"]').val();
        return 6 !== b.length || b.match(/\d{6}/) ? (a.invalidcode = !1, void(a.remoteError = !1)) : a.invalidcode = !0
    }, a.mcb = function (c, d) {
        a.type = d || a.type, "send" === c && ("sms" === d && (a.voiceCode = !1), "voice" === d && (a.voiceCode = !0)), i.save({
            action: c,
            csrf_token: b.profile.csrf_token
        }, angular.$().param({type: a.type, phone: r.phone, code: a.code}), function (b) {
            if (a.code = null, "validate" === c && b.data) {
                if (!b.data.success)return a.invalidcode = !0, void(a.remoteError = !0);
                a.showMcb = !1, u()
            }
        })
    }, a.checkout = function () {
        if (a.note && (r.note = a.note), !r.address && (o(r, a.currentAddr), o(r, b.currentInvoice), !r.address))return a.addressNotFill = !0;
        var c;
        c = a.supportInvoice && a.currentInvoice ? "不需要发票" === a.currentInvoice.invoice_pay_to ? "" : a.currentInvoice.invoice_pay_to : "", a.orderClosed = !0, i.get({
            action: "check",
            csrf_token: b.profile.csrf_token,
            phone: r.phone,
            phone_bk: r.phone_bk,
            address: r.address,
            order_note: r.note,
            invoice: c
        }).$promise.then(function (b) {
                if (!b.error) {
                    var c = b.data;
                    switch (!0) {
                        case 3 === c.code:
                            swal("出错啦", "本次订单被系统判定为异常，无法正常下单，请联系饿了么客服", "warning");
                            break;
                        case 2 === c.code && "Voice" === c.type:
                            a.McbPreAct = !0, a.showMcb = !0;
                            break;
                        case 2 === c.code && "Text" === c.type:
                            a.mcb("send", "sms"), a.countdown = !0, a.McbPreAct = !1, a.showMcb = !0;
                            break;
                        case 1 === c.code:
                            u();
                            break;
                        default:
                            return swal("出错啦", "未知错误，请联系客服", "warning")
                    }
                }
            })["finally"](function () {
            a.orderClosed = !1
        })
    }, a.sendVoiceVerificationCode = function () {
        a.mcb("send", "voice"), a.countdown = !0, a.McbPreAct = !1, a.showMcb = !0
    }, a.resend = function () {
        a.mcb("send", a.voiceCode ? "voice" : "sms")
    }
}]), angular.module("meleme.controllers").controller("findPasswordCtrl", ["$scope", "$rootScope", "VerifyCode", "Captcha", "ProfileExists", "Findpw", function (a, b, c, d, e, f) {
    b.isFromApp && (b.Page.title = "重置密码");
    var g = function (b) {
        a.infoErrorMsg = b.message, a.nextClicked = !1
    };
    a.refreshCode = function () {
        d.save(function (c) {
            a.captcha = b.RESTBASE + "/captchas/" + c.code
        })
    }, a.refreshCode(), a.nextStep = function (b) {
        if (a.infoErrorMsg = !1, a.invalidsetpw = !0, !b) {
            a.isTel = /^1[3-9]\d{9}$/.test(a.info.numinfo), a.nextClicked = !0;
            var d = a.isTel ? "mobile" : "email", f = {type: d};
            f[d] = a.info.numinfo, e.get(f, function (b) {
                var e = {way: d, action: "send_with_captcha", captcha_code: a.info.captcha};
                e[d] = a.info.numinfo, "mobile" === d && (e.type = "sms"), b.is_exists ? (a.invalidsetpw = !1, c.save(e, function (b) {
                    a.nextClicked = !1, a.countdown = !0, a.showSet = !0, a.info.validate_token = b.validate_token
                }, function (b) {
                    g(b.data), a.refreshCode()
                })) : (a.infoErrorMsg = "mobile" === d ? "您输入的手机号码尚未绑定" : "您输入的邮箱地址不存在或者尚未绑定", a.nextClicked = !1, a.refreshCode())
            }, function (a) {
                g(a)
            })
        }
    }, a.sendCheckNum = function (b) {
        var d = a.isTel ? "mobile" : "email", e = {way: d, action: "send"};
        e[d] = a.info.numinfo, "mobile" === d && (e.type = b), c.save(e, function (c) {
            a.info.validate_token = c.validate_token, "sms" === b ? (a.countdown = !0, a.showMsg = !1) : "audio" === b ? a.showMsg = !0 : a.countdown = !0
        }, function (b) {
            a.infoErrorMsg = b.data.message
        })
    }, a.reset = function (b) {
        if (a.infoErrorMsg = "", a.invalidsetpw = !0, b) {
            a.nextClicked = !0;
            var d = a.isTel ? "mobile" : "email", e = {
                way: d,
                action: "validate",
                validate_token: a.info.validate_token,
                validate_code: a.info.checknum
            };
            c.save(e, function (b) {
                if (b.validate) {
                    var c = a.isTel ? "mobile_token" : "email_token", d = {type: c, new_password: a.info.password};
                    d[c] = b[c], f.save(d, function () {
                        a.nextClicked = !1, a.showSuccesssend = !0
                    }, function (a) {
                        g(a.data)
                    })
                } else a.infoErrorMsg = "验证码错误,请输入正确的验证码", a.nextClicked = !1
            }, function (a) {
                g(a.data)
            })
        }
    }
}]), angular.module("meleme.controllers").controller("geoSearchCtrl", ["$rootScope", "$routeParams", "$scope", "Restaurant", "Food", "$q", "$timeout", "$location", function (a, b, c, d, e, f, g, h) {
    var i = this, j = 5;
    i.histories = localStorage.getItem("searchHistory") && JSON.parse(localStorage.getItem("searchHistory")) || [], this.restaurantInfo = function (a) {
        h.url(a)
    }, this.query = function (a, g) {
        if (a && "" === i.keyword && (delete i.foods, delete i.restaurants, i.searched = !1), !a || 13 === a.which) {
            if (g) {
                var h = i.histories.indexOf(g);
                i.histories.splice(h, 1), i.keyword = g
            }
            if (i.keyword) {
                var k = d.query({
                    type: "search",
                    geohash: b.geohash,
                    keyword: this.keyword,
                    "extras[]": "restaurant_activity"
                }), l = e.query({type: "search", geohash: b.geohash, keyword: this.keyword, "extras[]": "restaurant"});
                i.histories || localStorage.setItem("searchHistory", "[]"), -1 === i.histories.indexOf(i.keyword) && (i.histories.length === j && i.histories.pop(), i.histories.unshift(i.keyword), localStorage.setItem("searchHistory", JSON.stringify(i.histories))), f.all([k, l]).then(function (a) {
                    i.restaurants = a[0], i.foods = a[1], c.$$postDigest(function () {
                        i.searched = !0
                    })
                })["catch"](function (a) {
                    console.error(a)
                })
            }
        }
    }, this.remove = function (a, b) {
        b.stopPropagation();
        var c = i.histories.indexOf(a);
        i.histories.splice(c, 1), localStorage.setItem("searchHistory", JSON.stringify(i.histories))
    }, this.removeAll = function () {
        i.histories = [], localStorage.removeItem("searchHistory")
    }
}]), angular.module("meleme.controllers").controller("geoNormalCtrl", ["$scope", "$rootScope", "$routeParams", "$location", "Restaurant", "Page", "Poi", "RESTAURANT_FLAVORS", function (a, b, c, d, e, f, g, h) {
    a.Page = f, b.loading = !0, a.limit = 30, a.offset = 0, a.flavors = h;
    var i = "FREE";
    a.getRestaurant = function () {
        "FREE" === i && (i = "BUSY", e.query({
            geohash: c.geohash,
            type: "geohash",
            is_premium: 0,
            "extras[]": ["restaurant_activity", "food_activity"],
            limit: a.limit,
            offset: a.offset * a.limit
        }).$promise.then(function (b) {
                a.offset++, a.restaurants ? Array.prototype.push.apply(a.restaurants, b) : a.restaurants = b, b.length < a.limit && (i = "COMPLETE")
            }, function () {
            }).then(function () {
                "BUSY" === i && (i = "FREE"), b.loading = !1
            }))
    }, a.getRestaurant(), e.query({
        geohash: c.geohash,
        type: "geohash",
        "fields[]": ["name", "image_path", "name_for_url"],
        is_premium: 1
    }, function (b) {
        a.premium = b
    }, function () {
    }), g.query({type: "geohash", geohash: c.geohash}, function (b) {
        a.poi = b[0]
    }), a.toggled = !1, a.search = {}, a.filter = function (b) {
        a.search.flavors = b ? b : a.search.flavors || "", a.toggled && !b && (a.search.flavors = ""), a.toggled = b ? !1 : !a.toggled
    }, a.toSearch = function () {
        d.url("/search/" + c.geohash.replace(/&premium=\d$/, ""))
    }, a.toPremium = function () {
        d.url(d.url() + "/premium")
    }, localStorage.setItem("geohash", c.geohash)
}]), angular.module("meleme.controllers").controller("geoPremiumCtrl", ["$scope", "$rootScope", "$routeParams", "$location", "Restaurant", "Page", "Poi", "RESTAURANT_FLAVORS", function (a, b, c, d, e, f, g, h) {
    b.loading = !0, a.limit = 30, a.offset = 0, a.flavors = h;
    var i = "FREE";
    a.getRestaurant = function () {
        "FREE" === i && (i = "BUSY", e.query({
            geohash: c.geohash,
            type: "geohash",
            is_premium: 1,
            "extras[]": ["restaurant_activity", "food_activity"],
            limit: a.limit,
            offset: a.offset * a.limit
        }).$promise.then(function (b) {
                a.offset++, a.restaurants ? Array.prototype.push.apply(a.restaurants, b) : a.restaurants = b, b.length < a.limit && (i = "COMPLETE")
            }, function () {
            }).then(function () {
                "BUSY" === i && (i = "FREE"), b.loading = !1
            }))
    }, a.getRestaurant(), g.query({type: "geohash", geohash: c.geohash}, function (b) {
        a.poi = b[0]
    }), a.toggled = !1, a.search = {}, a.filter = function (b) {
        a.search.flavors = b ? b : a.search.flavors || "", a.toggled && !b && (a.search.flavors = ""), a.toggled = b ? !1 : !a.toggled
    }, a.toSearch = function () {
        d.url("/search/" + c.geohash.replace(/&premium=\d$/, ""))
    }, localStorage.setItem("geohash", c.geohash)
}]), angular.module("meleme.controllers").controller("giftDetailCtrl", ["$scope", "$rootScope", "$location", "Gift", "UsersGift", "$routeParams", "Address", "ProfileAddr", "SweetAlert", function (a, b, c, d, e, f, g, h, i) {
    b.isFromApp && (b.Page.title = "商品详情"), b.loading = !0;
    var j, k = function (e) {
        d.get({gift_id: f.id}, function (d) {
            b.loading = !1, a.gift = d, a.hasLogin = e.user_id ? !0 : !1, a.hasLogin ? (a.canExchange = a.point >= a.gift.price && a.gift.amount > 0 ? !0 : !1, a.gotoExchange = function () {
                a.showAddr = !0, a.showNewAddr = !1
            }) : a.gotoExchange = function () {
                i.swal({
                    title: "登录后可兑换礼品",
                    confirmButtonText: "登录",
                    showCancelButton: !0,
                    cancelButtonText: "以后再说"
                }, function (d) {
                    if (d) {
                        var e = b.isFromApp ? "eleme://login" : "https://" + a.MOBILEHOST + "/login?redirect=" + encodeURIComponent(c.absUrl());
                        location.href = e
                    }
                })
            }
        })
    }, l = function (c) {
        b.loading = !0, j = c.current_address_id, g.get({user_id: c.user_id}, function (c) {
            c.error || (b.loading = !1, a.address = c)
        })
    };
    b.profile.$promise.then(function (c) {
        a.point = c.point, k(c), l(c), a.selectAddr = function (d) {
            i.swal({
                title: "确认使用该地址",
                confirmButtonText: "确认",
                showCancelButton: !0,
                cancelButtonText: "取消"
            }, function (e) {
                e && (j !== a.address[d].id ? (j = a.address[d].id, h.update({address_id: j}, function (e) {
                    b.profile.current_address_id = j, m(c, a.address[d])
                })) : m(c, a.address[d]))
            })
        }, a.addAddr = function (b) {
            b.phone_bk = b.phone_bk || "", a.addrform.submitted = !0, g.save(b, function (d) {
                if (!d.error) {
                    var e = d.address_id;
                    h.update({address_id: e}, function (d) {
                        d.error || (l(c), i.swal({
                            title: "新增地址成功",
                            text: "是否使用该地址?",
                            confirmButtonText: "确认",
                            showCancelButton: !0,
                            cancelButtonText: "取消"
                        }, function (d) {
                            d ? m(c, b) : (a.showAddr = !0, a.showNewAddr = !1, a.addr = {}, a.addrform.$setPristine(), a.addrform.submitted = !1)
                        }))
                    }, function (a) {
                    })
                }
            })
        }, a.removeAddr = function (b, d) {
            g.remove({address_id: b, user_id: c.user_id}, function (b) {
                b.error || (a.editing = !1, l(c))
            })
        }
    }, function (a) {
        k(a)
    }), a.showExchangeGift = function () {
        c.url("/profile/gift"), b.current_exchange_gift = !0
    };
    var m = function (b, d) {
        e.save({
            way: "exchange",
            user_id: b.user_id,
            gift_id: f.id,
            user_name: d.name,
            user_address: d.address,
            user_phone: d.phone
        }, function (b) {
            a.showSuccesssend = !0, a.showNewAddr = !1, a.showAddr = !1
        }, function (a) {
            i.swal({title: "出错啦", text: a.data.message, type: "warning"}, function () {
                c.url("gift/" + f.id)
            })
        })
    }
}]), angular.module("meleme.controllers").controller("giftCtrl", ["$scope", "$rootScope", "$location", "Gift", function (a, b, c, d) {
    b.isFromApp && (b.Page.title = "积分商城"), b.profile.$promise.then(function (b) {
        a.point = b.point
    }, function (a) {
        console.log(a)
    }).then(function () {
        a.changeUrl = function (d) {
            if (b.profile.user_id)c.url("/profile/" + d); else {
                var e = b.isFromApp ? "eleme://login" : "https://" + a.MOBILEHOST + "/login?redirect=" + encodeURIComponent(c.absUrl());
                location.href = e
            }
        }
    }), a.gifts = [], a.hasRecord = !0, a.isrecordLoading = !1, b.loading = !0, a.hasMoreData = !0;
    var e = 0;
    a.recordLoadMore = function () {
        !a.isrecordLoading && a.hasMoreData && (a.gifts.length > 0 && (a.isrecordLoading = !0), d.query({
            limit: 20,
            offset: e
        }, function (c) {
            b.loading = !1, a.gifts.push.apply(a.gifts, c), a.hasRecord = a.gifts.length ? !0 : !1, a.isrecordLoading = !1, c.length < 20 && (a.hasMoreData = !1), e += 20
        }))
    }
}]), angular.module("meleme.controllers").controller("homeSearchCtrl", ["$scope", "$rootScope", "$routeParams", "Place", "UserPlace", "City", function (a, b, c, d, e, f) {
    var g, h, i = c.id, j = !1, k = function (b) {
        a.places = [], a.places.data = b, 0 === b.length ? (a.searched = !1, a.history = !1) : (a.searched = !0, a.history = !0)
    }, l = function () {
        j ? e.get({}, function (a) {
            h = a.data, h = h ? h : [], k(h)
        }) : (null !== localStorage.getItem("placeHistory") && (h = JSON.parse(localStorage.getItem("placeHistory"))), h = h ? h : [], k(h))
    };
    b.$watch("profile.$resolved", function (a) {
        a === !0 && (j = b.profile.user_id, l())
    }), a.historyDel = function (c) {
        if (h.length > 1 && "object" == typeof c) {
            var d = m(c);
            j ? e["delete"]({csrf_token: b.profile.csrf_token, id: h[d].id}, function (a) {
                a.data.success && h.splice(d, 1)
            }) : (h.splice(d, 1), localStorage.setItem("placeHistory", JSON.stringify(h)))
        } else j ? e["delete"]({csrf_token: b.profile.csrf_token}, function (b) {
            b.data.success && (a.searched = !1, a.history = !1)
        }) : (localStorage.removeItem("placeHistory"), a.searched = !1, a.history = !1)
    };
    var m = function (a) {
        for (var b = 0; b < h.length; b++) {
            var c = "geohash";
            if (h[b][c] === a[c])return b
        }
        return -1
    };
    a.setLocalSpace = function (a) {
        j || -1 !== m(a) && 0 !== h.length || (h.length >= 10 && h.shift(), h.push(a), localStorage.setItem("placeHistory", JSON.stringify(h)))
    }, a.getPlace = function () {
        return a.history = !1, a.searched = !1, a.empty = !1, (g = a.place) ? (a.error = !1, a.searching = !0, void(a.places = d.get({
            city: i,
            keyword: g
        }, function (b) {
            a.searching = !1, b.data.length > 0 ? a.searched = !0 : a.empty = !0
        }))) : void(a.error = !0)
    }, a.cityDetail = {data: [0]}, f.get({code: i}, function (b) {
        a.cityDetail = b
    }), a.child = function (a) {
        if (a) {
            for (var b = [], c = 0, d = a.length; d > c; c++)a[c].entries && (b = b.concat(a[c].entries));
            return b
        }
    }
}]), angular.module("meleme.controllers").controller("homeCtrl", ["$scope", "$location", "Page", "City", function (a, b, c, d) {
    var e = b.search(), f = localStorage.getItem("geohash");
    return (e.force || /\bpsn=|\bpguid=/.test(f)) && (localStorage.removeItem("geohash"), f = !1), f ? b.url("/place/" + f) : (a.currentCity = d.get({type: "guess"}), a.hotCities = d.get({type: "hot"}), a.cities = d.get({type: "group"}), c.title = "叫外卖上饿了么", void(a.setCity = function (a, b) {
        c.city.name = a, c.city.id = b
    }))
}]), angular.module("meleme.controllers").controller("hongbaoCtrl", ["$scope", "$http", "$location", "$rootScope", "$q", "$routeParams", "$timeout", "Page", "Weixin", "WechatInfo", "WeixinHongbao", "SweetAlert", "I18N", function (a, b, c, d, e, f, g, h, i, j, k, l, m) {
    if (d.loading = !0, a.$watch("scene", function (a) {
            a && (d.loading = !1)
        }), !/(MicroMessenger|IEMobile)/i.test(navigator.userAgent))return d.loading = !1, void l.swal({
        type: "error",
        title: "",
        text: "请在微信浏览器中打开链接",
        showConfirmButton: !1
    }, function () {
        location.reload()
    });
    h.title = "吃到饱，玩到爽，饿了么携手腾讯游戏给你发红包啦~", a.caption = "可口可乐送你饿了么红包。", void function () {
        function c(b) {
            if ("ok" === b.status) {
                var c = b.data, d = {
                    title: h.title,
                    link: c.url,
                    imgUrl: "http://m.ele.me/msite/img/hongbao/icon_150-150.png",
                    desc: a.caption
                };
                wx.config({
                    appId: c.appid,
                    timestamp: c.timestamp,
                    nonceStr: c.nonceStr,
                    signature: c.signature,
                    jsApiList: ["onMenuShareTimeline", "onMenuShareAppMessage", "onMenuShareQQ", "onMenuShareWeibo"]
                }), wx.ready(function () {
                    wx.onMenuShareTimeline(d), wx.onMenuShareAppMessage(d), wx.onMenuShareQQ(d), wx.onMenuShareWeibo(d)
                })
            }
        }

        var d = window.location.href.split("#")[0];
        b.get("/v1/weixin/jssign?url=" + encodeURIComponent(d.replace(/\|/g, "%7C"))).success(c)
    }(), a.amountMessageMap = m.hongbao.amountMessageMap;
    var n = a.user = new j, o = function (b) {
        switch (b.data && b.data.name) {
            case"PHONE_IS_EMPTY":
                a.scene = "PREPARE";
                break;
            case"NO_VALID_WEIXIN_ID":
                n.authorize();
                break;
            default:
                return e.reject(b)
        }
        return e.defer().promise
    };
    a.grab = function (b) {
        return n.isValid() ? k.post({action: "hongbao", weixin_id: n.openid}, {
            sign: n.key,
            weixin_username: n.name,
            method: "phone",
            weixin_avatar: n.avatar,
            hongbao_group_sn: f.sn,
            hardware_id: f.hardware_id || "",
            device_id: f.device_id || "",
            app_track_id: f.track_id || "",
            track_id: d.trackId,
            phone: b || void 0
        }).$promise.then(null, o).then(null, function (a) {
                return setTimeout(function () {
                    throw new Error("Hongbao Grabbing Error: " + JSON.stringify(a && a.data || a))
                }), {status_code: 1, records: [], is_success: !1}
            }).then(function (b) {
                a.statusText = (m.hongbao.statusTextMap[b.status_code] || "错误啦").replace(/\{(\w+)\}/g, function (a, c) {
                    return b[c]
                }), a.caption = m.hongbao.statusCaptionMap[b.status_code] || "这是个神奇的错误", a.info = b, a.scene = "SUCCESS"
            }) : n.load().then(a.grab.bind(a, b))
    }, a.getPhone = function () {
        var a = k.get({sign: n.key, action: "phone", weixin_id: n.openid});
        return a.$promise = a.$promise.then(null, o), a
    }, a.setPhone = function (a) {
        var b = k.put({action: "phone", weixin_id: n.openid}, {sign: n.key, phone: a});
        return b.$promsie = b.$promise.then(null, o), b
    }, a["goto"] = function (b) {
        a.scene = b
    }, a.grab()
}]), angular.module("meleme.controllers").controller("hongbaoPrepareCtrl", ["$scope", function (a) {
    a.submit = function () {
        if (!a.submitWaiting) {
            if (!/^1[3-9]\d{9}$/.test(a.phoneNumber))return void(a.errorMessage = "手机号格式不正确");
            a.submitWaiting = !0, a.grab(a.phoneNumber).then(null, angular.noop).then(function () {
                a.submitWaiting = !1
            })
        }
    }
}]), angular.module("meleme.controllers").controller("hongbaoSuccessCtrl", ["$scope", function (a) {
}]), angular.module("meleme.controllers").controller("hongbaoResetCtrl", ["$scope", "SweetAlert", function (a, b) {
    a.current = a.getPhone(), a.submit = function () {
        if (!a.submitWaiting) {
            if (!/^1[3-9]\d{9}$/.test(a.phoneNumber))return void(a.errorMessage = "手机号格式不正确");
            a.submitWaiting = !0, a.setPhone(a.phoneNumber).$promise.then(function () {
                swal({type: "success", title: "修改成功", text: "下次抢红包将使用新设置的手机号"}, function () {
                    a["goto"]("SUCCESS"), a.$root.$apply()
                })
            }).then(null, angular.noop).then(function () {
                a.submitWaiting = !0
            })
        }
    }
}]), angular.module("meleme.controllers").controller("hongbaoBaidaCtrl", ["$scope", "$location", "$q", "HongbaoBaida", "WechatInfo", function (a, b, c, d, e) {
    a.myHeight = document.documentElement.clientHeight + "px", a.logoSrc = a.STATICBASE + "/msite/img/hongbao/elogo.png";
    var f = b.search();
    if (!/MicroMessenger/i.test(navigator.userAgent))return void(a.showFail = "请在微信浏览器中打开链接");
    var g = a.user = new e;
    a.$root.loading = !0, g.load().then(function () {
        return d.get({way: "group", sn: f.group_sn}, function (b) {
            return a.$root.loading = !1, "ok" !== b.status ? (a.showResult = !0, a.errorMessage = b.error.msg, c.reject()) : (b.data.logo && (a.logoSrc = a.FUSSBASE + b.data.logo), void(a.amount = b.data.amount))
        })
    }).then(function () {
        a.submitMobile = function () {
            d.save({way: "get"}, angular.$().param({
                weixin_username: g.name,
                weixin_avatar: g.avatar,
                weixin_id: g.openid,
                key: g.key,
                phone: a.telNum,
                group_sn: f.group_sn
            }), function (b) {
                if ("ok" === b.status)switch (a.showResult = !0, a.statusCode = b.data.status_code, 1 * a.statusCode) {
                    case 1:
                    case 5:
                        break;
                    case 2:
                    case 3:
                    case 4:
                        a.statusAmount = b.data.amount, a.statusTel = b.data.account
                }
                if ("error" === b.status) {
                    var c = b.error.code;
                    switch (1 * c) {
                        case 20:
                            swal("操作太频繁了");
                            break;
                        case 21:
                            swal({title: "无效的微信ID", confirmButtonText: "重新授权"}, function (a) {
                                g.authorize()
                            });
                            break;
                        case 23:
                            swal("缺少必要信息");
                            break;
                        case 40:
                            a.errorMessage = "二维码已失效", a.showResult = !0;
                            break;
                        default:
                            swal("出错了")
                    }
                }
            })
        }
    })
}]), angular.module("meleme.controllers").controller("loginCtrl", ["$rootScope", "$scope", "$location", "Account", "ProfileUser", "Captcha", function (a, b, c, d, e, f) {
    a.isFromApp && (a.Page.title = "登录"), b.user = {}, b.user.username = localStorage.getItem("lastname");
    var g = function () {
        var b = "http://" + a.MOBILEHOST + "/home", d = c.search().redirect || b;
        d = decodeURIComponent(d), location.href = d
    };
    b.refreshCode = function () {
        f.save(function (c) {
            b.captcha = a.RESTBASE + "/captchas/" + c.code
        })
    }, b.refreshCode();
    var h = angular.copy(a.wechatData, {});
    h.title = "登录" + h.title, wechat("timeline", h).on("friend", h), a.loading = !0, b.profile.$promise.then(function () {
        g()
    }, function () {
        a.loading = !1
    }), b.login = function () {
        b.error = null, d.save({action: "login"}, b.user, function (c) {
            localStorage.setItem("lastname", b.user.username), a.profile = e.get(function () {
                g(), localStorage.removeItem("goback")
            })
        }, function (a) {
            b.refreshCode(), b.error = a.data
        })
    }, b.registerPrepare = function () {
        var a = c.search().redirect;
        a = a ? "?redirect=" + encodeURIComponent(a) : "", window.location = "https://" + b.MOBILEHOST + "/register" + a
    }, b.message = function (a) {
        b["invalid" + a] = b.loginform[a].$invalid
    }
}]), angular.module("meleme.controllers").controller("loginmsgCtrl", ["$rootScope", "$scope", "$location", "VerifyCode", "Account", "ProfileUser", function (a, b, c, d, e, f) {
    var g = c.search().redirect, h = g ? decodeURIComponent(g) : "http://" + a.MOBILEHOST + "/home";
    b.user = {mobile: "", code: "", validate_token: ""}, b.sendCode = function (a) {
        d.save({way: "mobile", action: "send"}, {mobile: b.user.mobile, type: a}, function (c) {
            b.user.validate_token = c.validate_token, "sms" === a ? b.countdown = !0 : b.user.audio = !0
        }, function (a) {
            switch (b.error = a.data, a.data.name) {
                case"VALIDATION_FAILED":
                    b.error.message = "请填写手机号码";
                    break;
                default:
                    b.error.message = "服务器好像有问题啦"
            }
        })
    }, b.loginPrepare = function () {
        var a = c.search().redirect;
        a = a ? "?redirect=" + encodeURIComponent(a) : "", window.location = "https://" + b.MOBILEHOST + "/login" + a
    }, b.login = function () {
        b.error = null, e.save({action: "login", param: "mobile"}, b.user, function (b) {
            a.profile = f.get(function (a) {
                window.location = h, localStorage.removeItem("goback")
            })
        }, function (a) {
            b.error = a.data
        })
    }, b.message = function (a) {
        b["invalid" + a] = b.loginmsgform[a].$invalid
    }
}]), angular.module("meleme.controllers").controller("nofoundCtrl", function () {
    localStorage.removeItem("geo"), localStorage.removeItem("goback")
}), angular.module("meleme.controllers").controller("orderSuccessCtrl", ["$scope", "$routeParams", function (a, b) {
    a.orderId = b.id
}]), angular.module("meleme.controllers").controller("payCtrl", ["$scope", "$routeParams", "$location", "PayOnline", "ProfileHongbao", "$rootScope", function (a, b, c, d, e, f) {
    a.orderId = b.id, "zaocan" === b.source && (a.isFromZaocan = !0), a.payMethod = {
        method: {},
        index: null
    }, a.hongBao = {method: {}, index: null, now: 0}, a.methodsToggle = function (b, c) {
        return a.payMethod.index === b ? (a.payMethod.index = null, void(a.payMethod.method = {})) : (a.payMethod.index = b, void(a.payMethod.method = c))
    };
    var g = function () {
        (b.id || b.orderId) && f.profile.$promise.then(function (c) {
            e.get({userid: c.user_id, type: "valid", order_id: b.id || b.orderId}, function (b) {
                a.payInfo.hongbaos = b, a.payInfo.hongbaos.length && (a.hongBaoToggle(0), a.saveHongbao(), h(a.payInfo.hongbaos))
            })
        })
    };
    a.hongBaoItem = function () {
        a.showSelectHongbao = !0, a.hongBao.indexTemp = a.hongBao.index
    }, a.back = function () {
        a.showSelectHongbao = !1
    }, a.hongBaoToggle = function (b) {
        a.payInfo.hongbaos[b].is_valid ? a.hongBao.indexTemp = b : a.hongBao.indexTemp = null
    }, a.saveHongbao = function () {
        a.hongBao.index = a.hongBao.indexTemp, null !== a.hongBao.index && (a.hongBao.method = a.payInfo.hongbaos[a.hongBao.index], a.hongBao.now = a.hongBao.method.amount > a.payInfo.total ? a.payInfo.total : a.hongBao.method.amount, a.back())
    };
    var h = function (a) {
        for (var b = 0; b < a.length; b++) {
            var c = a[b].is_valid ? "" : " pay-invalid-hongbao";
            switch (a[b].source) {
                case"restaurant_activity":
                    a[b].hongbaoBg = "order-bg" + c;
                    break;
                case"weixin_share_hongbao":
                    a[b].hongbaoBg = "share-bg" + c;
                    break;
                case"refer_mobile_from":
                    a[b].hongbaoBg = "invite-bg" + c
            }
        }
    }, i = function () {
        d.get({orderId: b.id, method: "paying"}, {}, function (d) {
            return "error" === d.status ? void(84 === d.error.code ? c.url("pay?id=" + b.id + "&status=start") : swal({
                title: "出错啦",
                text: d.error.msg,
                type: "error"
            }, function () {
                c.url("/trade/" + b.id)
            })) : (a.payInfo = d.data, void g())
        })
    };
    "paying" === b.status ? i() : (a.payStart = !0, d.get({orderId: b.id, method: "online"}, {}, function (d) {
        if ("error" === d.status)return void(82 === d.error.code ? c.url("pay?id=" + b.id + "&status=paying") : swal({
            title: "出错啦",
            text: d.error.msg,
            type: "error"
        }, function () {
            return 81 === d.error.code ? c.url("/trade") : void c.url("/trade/" + b.id)
        }));
        a.payInfo = d.data, g();
        var e = a.payInfo.balancePaid, f = a.payInfo.total, h = a.payInfo.bankPaid;
        a.btnConfirm = function () {
            var b = "number" == typeof a.payMethod.index, c = "number" == typeof a.hongBao.index, d = !c && f === e && a.balancePW && null === a.payMethod.index, g = c && f === a.hongBao.now, i = !c && b && f > e && a.balancePW, j = b && c && 0 === e && (f <= a.hongBao.now + h || f === a.hongBao.now), k = !b && c && f <= e + a.hongBao.now && a.balancePW, l = b && c && f > e + a.hongBao.now && a.balancePW, m = !c && b && h === f;
            return a.payInfo.bankPaid <= a.hongBao.now && (a.payMethod.index = null), !(d || g || i || j || k || l || m)
        }
    })), a.payOnlineCheck = function () {
        a.payWayClosed = !0, d.save({orderId: b.id}, angular.$().param({
            pay_bank: a.payMethod.method.bank || "",
            pay_company_id: a.payMethod.method.company || "",
            hongbao_sn: a.hongBao.method.sn || "",
            password: a.balancePW || ""
        }), function (d) {
            return "error" === d.status ? void swal({title: "出错啦", text: d.error.msg, type: "warning"}, function () {
                c.url("/trade/" + b.id), a.$root.$apply()
            }) : null === a.payMethod.index ? c.url("/trade/" + b.id) : void(window.location = d.data.redirectURL)
        })
    }
}]), angular.module("meleme.controllers").controller("profileAddressCtrl", ["$rootScope", "$scope", "$location", "Address", "ProfileAddr", "SweetAlert", function (a, b, c, d, e, f) {
    var g = function (a) {
        b.selectedAddr = a.current_address_id, d.get({user_id: a.user_id}, function (a) {
            a.error || (b.address = a)
        })
    };
    a.profile.$promise.then(function (a) {
        a.error || g(a)
    }), b.selectAddr = function (d) {
        b.selectedAddr !== b.address[d].id && (b.selectedAddr = b.address[d].id, e.update({address_id: b.selectedAddr}, function (d) {
            d.error || (a.profile.current_address_id = b.selectedAddr, c.url("/profile/info"))
        }))
    }, b.addAddr = function (f) {
        f.phone_bk = f.phone_bk || "", b.addrform.submitted = !0, d.save({user_id: a.profile.user_id}, f, function (b) {
            if (!b.error) {
                var d = b.address_id;
                e.update({address_id: d}, function (b) {
                    b.error || (g(a.profile), c.url("/profile/info"))
                }, function (a) {
                })
            }
        })
    }, b.removeAddr = function (c, e) {
        d.remove({address_id: c}, function (c) {
            c.error || (b.editing = !1, g(a.profile))
        })
    }
}]), angular.module("meleme.controllers").controller("profileBalanceCtrl", ["$scope", "$rootScope", "$location", "UsersRecord", "UserAgent", "BALANCETEXT", "SweetAlert", function (a, b, c, d, e, f, g) {
    a.balance = function () {
        return b.profile.balance
    }, a.isMobileValid = function () {
        return !angular.isUndefined(b.profile.is_mobile_valid)
    }, a.widthdraw = function () {
        b.profile.is_mobile_valid ? c.url("/profile/withdraw") : g.swal({
            title: "绑定手机",
            text: "余额提现需绑定手机",
            confirmButtonText: "立即绑定",
            showCancelButton: !0,
            cancelButtonText: "取消"
        }, function () {
            c.url("/profile/bind")
        })
    }, a.recharge = function () {
        b.profile.is_mobile_valid ? c.url("/profile/recharge") : g.swal({
            title: "绑定手机",
            text: "充值需绑定手机",
            confirmButtonText: "立即绑定",
            showCancelButton: !0,
            cancelButtonText: "取消"
        }, function () {
            c.url("/profile/bind")
        })
    }, a.isOnlyDraw = !1, a.balanceRecords = [];
    var h = function (b) {
        var c = a.balanceRecords.length;
        if (c) {
            a.hasRecord = !0;
            for (var d = b; c > d; d++) {
                var e = parseFloat(a.balanceRecords[d].trade_type), g = parseFloat(a.balanceRecords[d].balance_change);
                a.balanceRecords[d].trade_type = f[e], a.balanceRecords[d].isAdd = g >= 0, a.balanceRecords[d].balance_change = Math.abs(g)
            }
        } else a.hasRecord = !1
    };
    a.hasRecord = !0, a.isrecordLoading = !1, a.hasMoreData = !0;
    var i = 0;
    a.recordLoadMore = function () {
        !a.isrecordLoading && a.hasMoreData && (a.isrecordLoading = !0, b.profile.$promise.then(function (b) {
            d.getBalance({user_id: b.user_id, limit: 10, offset: i}, function (b) {
                a.balanceRecords.push.apply(a.balanceRecords, b), h(i), a.isrecordLoading = !1, b.length < 10 && (a.hasMoreData = !1), i += 10
            })
        }))
    }
}]), angular.module("meleme.controllers").controller("profileChangePasswordByMobileCtrl", ["$rootScope", "$scope", "$location", "ProfileUser", "VerifyCode", function (a, b, c, d, e) {
    b.user = {type: "mobile", new_password: "", validate_token: "", code: ""}, b.sendCode = function (a) {
        e.save({way: "mobile", action: "send", mobile: b.mobile, type: a}, function (c) {
            b.user.validate_token = c.validate_token, "sms" === a ? b.countdown = !0 : b.user.audio = !0
        }, function (a) {
            switch (b.error = a.data, a.data.name) {
                case"VALIDATION_FAILED":
                    b.error.message = "请填写手机号码";
                    break;
                default:
                    b.error.message = "服务器好像有问题啦"
            }
        })
    }, a.profile.$promise.then(function (a) {
        b.mobile = a.mobile, b.sendCode("sms")
    }, function () {
        c.url("/home")
    }), b.savepw = function () {
        b.error = null, d.update({param: "password"}, b.user, function () {
            b.showSuccesssend = !0
        }, function (a) {
            b.error = a.data
        })
    }, b.message = function (a) {
        b["invalid" + a] = b.changepwform[a].$invalid
    }, b.passwordCheck = function () {
        if (b.user.new_password && b.user.repeat) {
            var a = b.user.new_password === b.user.repeat;
            b.invalidrepeat = !a, b.pwnotmatch = !a
        }
    }
}]), angular.module("meleme.controllers").controller("profileChangePasswordByOldCtrl", ["$rootScope", "$scope", "ProfileUser", function (a, b, c) {
    b.user = {type: "old_password"}, b.savepw = function () {
        b.error = null, c.update({param: "password"}, b.user, function () {
            b.showSuccesssend = !0
        }, function (a) {
            b.error = a.data
        })
    }, b.message = function (a) {
        b["invalid" + a] = b.changepwform[a].$invalid
    }, b.passwordCheck = function () {
        if (b.user.new_password && b.user.repeat) {
            var a = b.user.new_password === b.user.repeat;
            b.invalidrepeat = !a, b.pwnotmatch = !a
        }
    }
}]), angular.module("meleme.controllers").controller("profileExplainCtrl", ["$scope", "$routeParams", "UserAgent", "Page", function (a, b, c, d) {
    a.isFromApp && ("balance" === b.page ? d.title = "余额说明" : "hongbao" === b.page ? d.title = "红包说明" : "pointtext" === b.page ? d.title = "积分说明" : "member" === b.page && (d.title = "会员说明")), a.pageUrl = "/msite/html/profile_explain_" + b.page + ".html"
}]), angular.module("meleme.controllers").controller("profileGiftCtrl", ["$scope", "$rootScope", "$location", "UsersGift", "$timeout", function (a, b, c, d, e) {
    b.isFromApp && (b.Page.title = "兑换记录"), a.giftRecords = [], a.hasRecord = !0, a.isrecordLoading = !1, b.loading = !0, a.hasMoreData = !0;
    var f = 0;
    a.recordLoadMore = function () {
        !a.isrecordLoading && a.hasMoreData && (a.giftRecords.length > 0 && (a.isrecordLoading = !0), b.profile.$promise.then(function (c) {
            d.query({user_id: c.user_id, limit: 20, offset: f, "extras[]": "gift"}, function (c) {
                b.loading = !1, 0 === a.giftRecords.length && e(function () {
                    b.current_exchange_gift = null
                }, 1e3), a.giftRecords.push.apply(a.giftRecords, c), a.hasRecord = a.giftRecords.length ? !0 : !1, a.isrecordLoading = !1, c.length < 20 && (a.hasMoreData = !1), f += 20
            })
        }))
    }
}]), angular.module("meleme.controllers").controller("profileHongbaoCtrl", ["$scope", "$rootScope", "$location", "ProfileHongbao", "ProfileHongbaoFormatter", function (a, b, c, d, e) {
    b.loading = !0, a.showHongbao = "available", a.limit = 10, a.showGroup = function (b) {
        a.showHongbao = b, a.limit = 10
    }, b.profile.$promise.then(function (c) {
        d.get({userid: c.user_id, limit: 200, order_by: "created_at"}, function (b) {
            a.hongbaolist = new e.preTemplate(b), a.hongbaoCount = a.hongbaolist.reduce(function (a, b) {
                return b.will_timeout ? a + 1 : a
            }, 0)
        }, function (b) {
            a.hongbaolist = []
        }).$promise["finally"](function () {
            b.loading = !1
        })
    })
}]), angular.module("meleme.controllers").controller("profileHongbaoExchangeCtrl", ["$scope", "$rootScope", "$location", "Page", "ProfileHongbao", function (a, b, c, d, e) {
    a.isFromApp && (d.title = "兑换红包"), a.backHongbaoPage = function () {
        location.href = a.isFromApp ? "eleme://page_back?name=my_gift_page" : "/profile/hongbao"
    }, a.exchange = function () {
        a.searching = !0, e.exchange({userid: b.profile.user_id}, {exchange_code: a.exchange_code}, function () {
            a.searching = !1, a.exchangeSuccess = !0
        }, function (b) {
            a.searching = !1, "INVALID_HONGBAO_EXCHANGER" === b.data.name ? a.error = {msg: "兑换码输入错误"} : "INVALID_EXCHANGE_FREQUENCY" === b.data.name ? a.error = {msg: "兑换得过于频繁，请明天再试吧"} : a.error = {msg: b.data.message}
        })
    }
}]), angular.module("meleme.controllers").controller("profileInfoCtrl", ["$rootScope", "$scope", "$location", "ProfileUser", function (a, b, c, d) {
    b.user = d.get({"extras[]": "is_auto_generated"}, function () {
        b.url = b.user.is_auto_generated.username ? "/profile/setusername" : "#"
    }), b.uploadResp = function (b, c) {
        a.profile.avatar = b.avatar_path
    }, b.selectModifyType = function () {
        return b.user.is_auto_generated.password ? c.url("/profile/setpw") : 1 === b.user.is_mobile_valid ? c.url("/profile/changepw/mobile") : void c.url("/profile/changepw/old")
    }
}]), angular.module("meleme.controllers").controller("profileMemberChargeCtrl", ["$scope", "$rootScope", "$location", "Page", "SweetAlert", "ParamRoute", "VIP", "Captcha", function (a, b, c, d, e, f, g, h) {
    d.title = "品牌馆会员绑定", a.user = {}, a.refreshCode = function () {
        h.save(function (c) {
            a.captcha = b.RESTBASE + "/captchas/" + c.code
        })
    }, a.refreshCode(), a.charge = function () {
        e.swal({
            title: "确认充值？",
            text: "确认为手机号" + a.user.mobile,
            showCancelButton: !0,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "确认",
            cancelButtonText: "取消",
            closeOnConfirm: !0,
            closeOnCancel: !0
        }, function (b) {
            b && g.charge({}, {
                mobile: a.user.mobile,
                card_id: a.user.code,
                card_exchange_code: a.user.password,
                captcha_code: a.user.captcha
            }, function (b) {
                a.user.serverError = !1, a.refreshCode(), a.showSuccesssend = !0, a.cardType = b.card_type
            }, function (b) {
                a.refreshCode(), a.user.serverError = !0, a.user.errorMsg = b.data.message
            })
        })
    }
}]), angular.module("meleme.controllers").controller("profileMemberQueryCtrl", ["$scope", "$location", "Page", "VIP", "VerifyCode", function (a, b, c, d, e) {
    c.title = "查询会员有效期", a.sendCode = function (b) {
        a.user.code = "", e.save({way: "mobile", action: "send"}, {mobile: a.user.mobile, type: b}, function (c) {
            a.user.serverError = !1, a.user.validate_token = c.validate_token, "sms" === b ? a.countdown = !0 : a.user.audio = !0
        }, function (b) {
            switch (a.user.serverError = !0, b.data.name) {
                case"VALIDATION_FAILED":
                    a.user.errorMsg = "请填写手机号码";
                    break;
                default:
                    a.user.errorMsg = "服务器好像有问题啦"
            }
        })
    };
    var f = function (a) {
        return a.getFullYear() + "-" + (a.getMonth() + 1) + "-" + a.getDate()
    };
    a.queryMember = function () {
        e.save({way: "mobile", action: "validate"}, {
            validate_token: a.user.validate_token,
            validate_code: a.user.code
        }, function (b) {
            a.user.mobile_token = b.mobile_token, a.countdown = !1, a.user.serverError = !b.validate, b.validate ? d.get({
                mobile: a.user.mobile,
                mobile_token: a.user.mobile_token
            }, function (b) {
                a.user.errorMsg = !1, a.showSuccesssend = !0;
                var c = Date.parse(b.valid_end), d = Date.now();
                a.queryResultDate = {
                    start: f(Date.parse(b.valid_start)),
                    end: f(Date.parse(b.valid_end))
                }, c.valueOf() < d ? a.queryResult = "outOfDate" : a.queryResult = "isVIP"
            }, function (b) {
                404 === b.status ? (a.user.errorMsg = !1, a.showSuccesssend = !0, a.queryResult = "notVIP") : a.user.errorMsg = "服务器好像有问题啦"
            }) : (a.user.serverError = !0, a.user.errorMsg = "验证码错误", a.countdown = !1)
        })
    }
}]), angular.module("meleme.controllers").controller("profileMemberCtrl", ["$scope", "$rootScope", "$location", "$route", "Page", "ParamRoute", "ProfileUser", function (a, b, c, d, e, f, g) {
    e.title = "品牌馆会员", a.showVIPInfo = !1;
    var h = function (a) {
        return a.getFullYear() + "-" + (a.getMonth() + 1) + "-" + a.getDate()
    };
    a.user = g.get({"extras[]": "premium_vip"}, function (b) {
        a.showVIPInfo = !0, a.validEnd = h(Date.parse(b.premium_vip.valid_end))
    }, function () {
        a.showVIPInfo = !0
    }), a.query = function () {
        c.path("/profile/member/query")
    }, a.charge = function () {
        c.path("/profile/member/charge")
    }, a.isValidMember = function () {
        return a.user.premium_vip && a.user.premium_vip.is_valid && Date.parse(a.user.premium_vip.valid_end).valueOf() > Date.now()
    }, a.images = ["/msite/img/memberExplain1.png", "/msite/img/memberExplain2.png"], a.bindMobile = function () {
        if (a.profile.user_id)return void c.url("/profile/bind?redirectPath=" + encodeURIComponent(c.path()));
        if (a.isFromApp)return void(window.location = "eleme://login");
        var b = "?redirect=" + encodeURIComponent("http://" + a.MOBILEHOST + c.path());
        window.location = "https://" + a.MOBILEHOST + "/login" + b
    }
}]), angular.module("meleme.controllers").controller("profilePointsCtrl", ["$scope", "$rootScope", "UsersRecord", "UserAgent", "ORDERTEXT", function (a, b, c, d, e) {
    b.isFromApp && (b.Page.title = "我的积分"), a.point = function () {
        return b.profile.point
    }, a.pointRecords = [];
    var f = function (b) {
        var c = a.pointRecords.length;
        if (c) {
            a.hasRecord = !0;
            for (var d = b; c > d; d++) {
                var f = parseFloat(a.pointRecords[d].change_type), g = parseFloat(a.pointRecords[d].delta);
                a.pointRecords[d].change_type = e[f], a.pointRecords[d].isAdd = g >= 0, a.pointRecords[d].delta = Math.abs(g)
            }
        } else a.hasRecord = !1
    };
    a.hasRecord = !0, a.isrecordLoading = !1, a.hasMoreData = !0;
    var g = 0;
    a.recordLoadMore = function () {
        !a.isrecordLoading && a.hasMoreData && (a.isrecordLoading = !0, b.profile.$promise.then(function (b) {
            c.getPoint({user_id: b.user_id, limit: 20, offset: g}, function (b) {
                a.pointRecords.push.apply(a.pointRecords, b), f(g), a.isrecordLoading = !1, b.length < 20 && (a.hasMoreData = !1), g += 20
            })
        }))
    }
}]), angular.module("meleme.controllers").controller("profileRechargeCtrl", ["$scope", "$location", "UserAgent", "Balance", "Page", function (a, b, c, d, e) {
    if (a.moneys = [{val: 50, text: "50.00元"}, {val: 100, text: "100.00元"}, {val: 200, text: "200.00元"}, {
            val: 300,
            text: "300.00元"
        }, {val: 500, text: "500.00元"}], a.money = 50, a.selectPayWay = function (b) {
            a.payway = b
        }, a.isFromApp) {
        e.title = "充值", a.payway = 3, a.hasmore = !0, a.selectMore = function () {
            a.hasmore = !a.hasmore
        };
        var f = angular.element();
        a.confirm = function () {
            var b = "http://" + a.MOBILEHOST + "/profile/recharge?isSuccess=1&amount=" + encodeURIComponent(a.money), c = "eleme://recharge_successed?url=" + encodeURIComponent(b);
            location.href = "eleme://recharge?" + f.param({type: a.payway, amount: a.money, callback: c})
        }, a.back = function () {
            location.href = "eleme://page_back?name=my_balance_page"
        }
    } else a.payway = "directPay", a.confirm = function () {
        d.charge({come_from: "web_mobile", total_fee: a.money, company_id: 1, pay_bank: a.payway}, function (b) {
            location.href = a.PAYMENTBASE + b.charge_url
        })
    }, a.back = function () {
        b.url("/profile/balance")
    };
    1 === parseFloat(b.search().isSuccess) && (a.showSuccesssend = !0, a.money = b.search().amount)
}]), angular.module("meleme.controllers").controller("profileServiceCtrl", ["$scope", "$location", "UserAgent", "Page", function (a, b, c, d) {
    d.title = "服务中心";
    var e = encodeURIComponent("https://v2.live800.com/live800/chatClient/chatbox.jsp?companyID=402791&configID=123801&jid=1820947377&enterurl=http%3A%2F%2Fprofile%2Elive800%2Ecom%2Fprofile%2Fpreview%2Ejsp&skillId=6632&pagetitle=%E6%95%88%E6%9E%9C%E9%A2%84%E8%A7%88&pagereferrer=http%3A%2F%2Fprofile%2Elive800%2Ecom%2Fprofile%2FgetNewEmbedScriptEmbedScriptAction%2Eaction%3Ficon%3Dselected7&firstEnterUrl=http%3A%2F%2Fprofile%2Elive800%2Ecom%2Fprofile%2Fpreview%2Ejsp&lan=zh&s=1");
    switch (c) {
        case"ios":
            a.urlOnline = "eleme://web?url=" + e + "&animation_type=1", a.urlPhone = "eleme://make_call?phone_number=10105757", a.urlFeedback = "eleme://feedback?&animation_type=1";
            break;
        case"android":
            a.urlOnline = "eleme://web?url=" + e, a.urlPhone = "eleme://make_call?phone_number=10105757", a.urlFeedback = "eleme://feedback?";
            break;
        case"browser":
            a.urlOnline = "https://v2.live800.com/live800/chatClient/chatbox.jsp?companyID=402791&configID=123801&jid=1820947377&enterurl=http%3A%2F%2Fprofile%2Elive800%2Ecom%2Fprofile%2Fpreview%2Ejsp&skillId=6632&pagetitle=%E6%95%88%E6%9E%9C%E9%A2%84%E8%A7%88&pagereferrer=http%3A%2F%2Fprofile%2Elive800%2Ecom%2Fprofile%2FgetNewEmbedScriptEmbedScriptAction%2Eaction%3Ficon%3Dselected7&firstEnterUrl=http%3A%2F%2Fprofile%2Elive800%2Ecom%2Fprofile%2Fpreview%2Ejsp&lan=zh&s=1", a.urlPhone = "tel:10105757"
    }
    var f = document.getElementById("accordion-1").offsetTop;
    a.isActive = function (b) {
        return a.active === b
    }, a.setActive = function (b) {
        void(a.active === b ? a.active = null : a.active = b), document.body.scrollTop = f
    }
}]), angular.module("meleme.controllers").controller("profileSetPasswordCtrl", ["$rootScope", "$scope", "ProfileUser", function (a, b, c) {
    b.user = {type: "user_id"}, b.setPassword = function () {
        b.error = null, c.update({param: "password"}, b.user, function () {
            b.showSuccesssend = !0
        }, function (a) {
            b.error = a.data
        })
    }, b.message = function (a) {
        b["invalid" + a] = b.setpwform[a].$invalid
    }
}]), angular.module("meleme.controllers").controller("profileSetUsernameCtrl", ["$rootScope", "$scope", "ProfileUser", function (a, b, c) {
    b.user = {}, b.setUsername = function () {
        b.error = null, c.update({param: "username"}, b.user, function () {
            b.showSuccesssend = !0, a.profile = c.get()
        }, function (a) {
            b.error = a.data
        })
    }, b.verifyusername = function () {
        b.invalidusername = {};
        var a = b.user.username || "", c = a.replace(/[\u0100-\uFFFF]/g, "00").length;
        c > 24 || 5 > c ? b.invalidusername.errorlen = !0 : (b.invalidusername.allnum = !/[^0-9]/.test(a), b.invalidusername.errorcode = /[^\-\.\w\u4e00-\u9fa5]/.test(a))
    }
}]), angular.module("meleme.controllers").controller("profileWithdrawCtrl", ["$scope", "$rootScope", "UserAgent", "Balance", "ProfileUser", "$location", "SweetAlert", "Page", function (a, b, c, d, e, f, g, h) {
    a.infoErrorMsg = "输入金额错误", a.isFromApp && (h.title = "余额提现"), d.checkWithdraw({}, function (b) {
        a.is_withdraw_valid = b.is_withdraw_valid, a.is_withdraw_valid || g.swal({
            title: "无法提现",
            text: "每日只提现一次",
            confirmButtonText: "知道了"
        }, function () {
            a.isFromApp ? location.href = "eleme://page_back?name=my_balance_page" : f.url("/profile/balance")
        })
    }), a.back = function () {
        a.isFromApp ? location.href = "eleme://page_back?name=my_balance_page" : f.url("/profile/balance")
    }, a.maxbalance = function () {
        return b.profile.balance
    }, a.is_money_disabled = function () {
        return angular.isUndefined(b.profile.balance) ? !1 : !0
    }, a.invalidMoney = function () {
        return angular.isUndefined(a.money) ? void 0 : isNaN(a.money) || 0 === parseFloat(a.money) || parseFloat(a.money) > parseFloat(b.profile.balance) ? !0 : !1
    }, a.confirm = function () {
        d.widthdraw({total_fee: a.money}, function (c) {
            a.showSuccesssend = !0, b.profile = e.get()
        })
    }
}]), angular.module("meleme.controllers").controller("profileCtrl", ["$scope", "$rootScope", "ProfileUser", "ProfileHongbao", "$location", function (a, b, c, d, e) {
    b.bodyWhite = 0, a.userInfo = angular.copy(b.profile), a.loginUrl = "https://" + a.MOBILEHOST + "/login?redirect=" + encodeURIComponent(e.absUrl()), a.loginPrepare = function () {
        b.profile.user_id ? e.url("/profile/info") : location.href = a.loginUrl
    };
    var f = (new Date).toISOString();
    a.hongbaoCount = "?", b.profile.$promise.then(function (c) {
        d.getcount({
            userid: b.profile.user_id,
            begin_date: "," + f,
            end_date: f + ",",
            "status[]": 0,
            way: "count"
        }, function (b) {
            a.hongbaoCount = b.count
        })
    })
}]), angular.module("meleme.controllers").controller("registerCtrl", ["$rootScope", "$scope", "$location", "VerifyCode", "Account", "ProfileUser", "ProfileExists", function (a, b, c, d, e, f, g) {
    var h = c.search().redirect, i = h ? decodeURIComponent(h) : "http://" + b.MOBILEHOST + "/home";
    b.loginPrepare = function () {
        var a = c.search().redirect;
        a = a ? "?redirect=" + encodeURIComponent(a) : "", window.location = "https://" + b.MOBILEHOST + "/login" + a
    };
    var j = angular.copy(a.wechatData, {});
    j.title = "注册" + j.title, wechat("timeline", j).on("friend", j), b.user = {
        mobile: "",
        password: "",
        code: ""
    }, b.sendCode = function (a) {
        d.save({way: "mobile", action: "send"}, {mobile: b.user.mobile, type: a}, function (c) {
            b.user.validate_token = c.validate_token, "sms" === a ? b.countdown = !0 : b.user.audio = !0
        }, function (a) {
            switch (b.error = a.data, a.data.name) {
                case"VALIDATION_FAILED":
                    b.error.message = "请填写手机号码";
                    break;
                default:
                    b.error.message = "服务器好像有问题啦"
            }
        })
    }, b.register = function () {
        b.error = null, e.save({action: "register", param: "mobile"}, b.user, function () {
            a.profile = f.get(function () {
                window.location = i, localStorage.removeItem("goback")
            })
        }, function (a) {
            b.error = a.data
        })
    }, b.ifExists = function () {
        b.error = null, b.message("mobile"), b.invalidmobile || g.get({
            param: "exists",
            type: "mobile",
            mobile: b.user.mobile
        }, function (a) {
            a.is_exists && (b.error = {}, b.error.message = "用户已存在, 可以直接登录")
        })
    }, b.message = function (a) {
        b["invalid" + a] = b.regform[a].$invalid
    }
}]), angular.module("meleme.controllers").controller("restaurantFoodCtrl", ["$rootScope", "$scope", "Restaurant", "Food", "$routeParams", "$location", function (a, b, c, d, e, f) {
    function g(a, c) {
        d.getRating({id: e.id, offset: Number(a), limit: Number(c)}, function (a) {
            a.error || (b.comments ? Array.prototype.push.apply(b.comments, a) : b.comments = a)
        })
    }

    var h = localStorage.getItem("geohash"), i = 0, j = 10;
    b.commentFilter = 0, a.loading = !0, c.get({nameForUrl: e.name, geohash: h}, function (a) {
        a.error || (b.restaurant = a)
    }), d.get({id: e.id}, function (a) {
        b.food = a, a.image_path && (b.photo = a.image_path)
    }).$promise.then(function (a) {
            d.get({id: e.id, action: "photos", way: "count"}, function (c) {
                b.hasUserImg = 0 !== c.count, a.image_path || 0 === c.count || d.getPhotos({
                    id: e.id,
                    limit: 1
                }, function (a) {
                    b.photo = a[0].image_path
                })
            })
        })["finally"](function (b) {
        a.loading = !1
    }), d.get({id: e.id, action: "ratings", way: "count"}, function (a) {
        b.totalCommentNum = a.count
    }).$promise["finally"](function () {
        b.loadComment = function () {
            (!b.totalCommentNum || !b.comments || (i + 1) * j < b.totalCommentNum) && (g(i * j, j), i++), b.commentNomore = !0
        }, b.loadComment()
    }), d.get({id: e.id, action: "ratings", way: "count", has_text: 1}, function (a) {
        b.fulfillCommentNum = a.count
    }), b.foodPhoto = function () {
        f.path(f.path() + "/photos")
    }
}]),
    angular.module("meleme.controllers").controller("restaurantFoodPhotosCtrl", ["$rootScope", "$scope", "Restaurant", "Food", "$routeParams", function (a, b, c, d, e) {
        function f(a) {
            d.getPhotos({id: e.id, limit: i, offset: a}, function (a) {
                void(b.imgs ? b.imgs.concat(a) : b.imgs = a)
            })
        }

        var g = localStorage.getItem("geohash"), h = 0, i = 3, j = null;
        c.get({nameForUrl: e.name, geohash: g}).$promise.then(function (a) {
            b.restaurant = a
        }), d.get({id: e.id}).$promise.then(function (a) {
            b.food = a
        }), d.get({id: e.id, action: "photos", way: "count"}).$promise.then(function (a) {
            j = a.count
        })["finally"](function () {
            b.loadImg = function () {
                (!j || !b.imgs || j > h * i) && (f(h * i), h++)
            }, b.loadImg(h)
        })
    }]), angular.module("meleme.controllers").controller("restaurantInfoCtrl", ["$scope", "$rootScope", "$routeParams", "$location", "Restaurant", function (a, b, c, d, e) {
    b.loading = !0, a.currentState = "info";
    var f = c.name;
    localStorage.getItem("geohash");
    e.get({nameForUrl: f, "extras[]": "restaurant_activity"}).$promise.then(function (c) {
        if (!c.error) {
            a.restaurant = c;
            var d = angular.copy(b.wechatData, {});
            d.desc = c.name + (c.rating ? " / 评价 " + c.rating + " 星" : "") + (c.deliver_time ? " / " + c.deliver_time + "分钟送达。" : ""), d.img = c.image_path ? a.FUSSBASE + c.image_path + "?w=100&h=100" : d.img, wechat("timeline", d).on("friend", d)
        }
    })["finally"](function () {
        b.loading = !1
    });
    var g = d.search();
    g.cartId && g.sig && (a.spell = 1, a.cartId = g.cartId, a.sig = g.sig)
}]), angular.module("meleme.controllers").controller("restaurantPhotoCtrl", ["$rootScope", "$scope", "$routeParams", "Restaurant", "$location", function (a, b, c, d, e) {
    localStorage.getItem("geohash");
    a.loading = !0, b.photoOffset = 0, b.photoLimit = 8, b.currentState = "photos", d.get({nameForUrl: c.name}).$promise.then(function (a) {
        b.restaurant = a
    }), d.getPhotos({nameForUrl: c.name}).$promise.then(function (a) {
        b.photos = a
    })["finally"](function () {
        a.loading = !1
    }), b.foodPhoto = function (a) {
        e.url(e.url().replace("photos", a + "/photos"))
    }, b.getPhoto = function () {
        b.photoOffset++
    }
}]), angular.module("meleme.controllers").controller("restaurantCtrl", ["$scope", "$rootScope", "$routeParams", "$location", "$timeout", "Restaurant", "Page", function (a, b, c, d, e, f, g) {
    var h = c.name, i = d.search(), j = localStorage.getItem("geohash");
    a.currentState = "menu", b.loading = !0, i.cartId && i.sig && (a.spell = 1, a.cartId = i.cartId, a.sig = i.sig), f.get({
        nameForUrl: h,
        geohash: j
    }).$promise.then(function (b) {
            return b.error && d.path("/home"), a.restaurant = b, b.name_for_url
        }).then(function (c) {
            f.getMenu({nameForUrl: c}).$promise.then(function (b) {
                b.some(function (b, c) {
                    return b.id ? (a.currentIndex = c, !0) : void 0
                }), a.menus = b
            })["finally"](function () {
                b.loading = !1
            })
        }), a.selectMenu = function (b, c) {
        a.currentIndex !== b && (a.currentIndex = b)
    }, a.toggleBroadcast = function () {
        a.broadcastShow = !a.broadcastShow
    }
}]), angular.module("meleme.controllers").controller("rootCtrl", ["$rootScope", "$scope", "$route", "$location", "Page",
    "ProfileUser", "UserAgent", "Account", "SweetAlert", function (a, b, c, d, e, f, g, h, i) {
        var j = /^\/profile(?!\/(service|member|explain))\/.+/i;
        if (/^\/hongbao\w*/i.test(d.url()) ? a.profile = {
                $promise: {
                    then: function () {
                        a.profile = f.get();
                        var b = a.profile.$promise;
                        return b.then.apply(b, arguments)
                    }
                }
            } : a.profile = f.get(), a.isVIPUser = function () {
                return a.profile.premium_vip && a.profile.premium_vip.is_valid && new Date(a.profile.premium_vip.valid_end).valueOf() > Date.now()
            }, a.Page = e, a.isFromApp = "browser" !== g, a.isFromIOS = "ios" !== g, a.$on("$routeChangeStart", function () {
                a.loading = 1
            }), a.$on("$routeChangeSuccess", function () {
                var b = !1;
                a.loading = 0;
                var e = "/msite/html/restaurant_menu.html" === c.current.templateUrl;
                e && (setTimeout(function () {
                    a.bodyWhite = 1
                }, 0), window.ga("send", "pageview", (e ? "restaurant" : "page") + "*" + d.path())), j.test(d.url()) && (b = !0), b && a.profile.$promise["finally"](function () {
                    a.profile.user_id || i.swal({
                        title: "请先登录您的账号",
                        type: "warning",
                        showCancelButton: !0,
                        confirmButtonText: "登录",
                        cancelButtonText: "取消"
                    }, function (a) {
                        d.url(a ? "/login" : "/home")
                    })
                })
            }), a.trackId = document.cookie.match(/(?:^|; )track_id=(.*?)(?:; |$)|$/)[1], a.logout = function () {
                i.swal({
                    title: "是否退出登录",
                    type: "warning",
                    showCancelButton: !0,
                    confirmButtonColor: "#DD6B55",
                    confirmButtonText: "退出登录",
                    cancelButtonText: "再等等"
                }, function (b) {
                    b && h.save({action: "logout"}, angular.$().param(a.profile), function (b) {
                        return b.error ? swal("出错啦", "退出登录失败 :(", "warning") : (a.profile = f.get(), void d.url("/profile"))
                    }, function () {
                        swal("出错啦", "退出登录失败,请重新尝试", "warning")
                    })
                })
            }, a.wechatData = {
                img: "http://static11.elemecdn.com/forward/img/restaurant/rst-default-logo.jpg",
                app: "wx2a416286e96100ed",
                link: function () {
                    return d.absUrl()
                },
                title: "饿了么",
                desc: "中国最专业的网上订餐平台，提供各类中式、日式、韩式、西式等优质美食。"
            }, wechat("timeline", a.wechatData).on("friend", a.wechatData), localStorage.getItem("geo")) {
            var k = localStorage.getItem("geo"), l = k.replace(/(\/place\/|&premium=\d)/g, "");
            localStorage.setItem("geo", l), localStorage.setItem("geohash", l)
        }
    }]), angular.module("meleme.controllers").controller("spellCtrl", ["$scope", "$rootScope", "$location", "Page", "Spell", "SpellStatus", "newCart", "Weixin", function (a, b, c, d, e, f, g, h) {
    var i = ["spell-red", "spell-orange", "spell-yellow", "spell-green", "spell-cyan", "spell-blue", "spell-purple"], j = c.search();
    if (b.bodyWhite = 1, a.$watch("status", function (a) {
            -1 === a && (b.bodyWhite = 0)
        }), a.$on("$destroy", function () {
            b.bodyWhite = 0
        }), "/spell" == c.path()) {
        a.status = 0;
        var k = function (c) {
            if (c.error)return a.status = -1;
            var e = c.data, g = angular.copy(b.wechatData, {});
            g.title = "饿了么微信拼单", g.link = window.location.href.replace(/code=[^&]+&?/, ""), g.desc = "我正在「" + e.restaurantName + "」参与拼单。", g.img = e.image_path ? a.FUSSBASE + e.image_path + "?w=100&h=100" : g.img, wechat("timeline", g).on("friend", g), wechat("showOptionMenu"), a.status = f(c.data), d.title = e.restaurantName, a.spellRestaurant = e, a.total = e.total;
            var h = 0, j = e.groups.length, k = 0;
            for (e.groups.reverse(); j > k; k++) {
                var l = j - k - 1;
                e.groups[k].name = e.pindanMap[l].name, e.groups[k].avatar = e.pindanMap[l].avatar, h += e.groups[k].length;
                var m;
                try {
                    m = JSON.parse(localStorage.getItem("spellCartName"))
                } catch (n) {
                    m = localStorage.getItem("spellCartName")
                }
                m === e.groups[k].name && (a.me = e.groups[k].name), 0 === k || "发起人" !== e.pindanMap[l].name || (e.groups.unshift(e.groups[k]), e.groups.splice(k + 1, 1))
            }
            for (; k >= 0; k--)void 0 !== e.groups[k] && (e.groups[k].listColor = i[(j - k - 1) % 7]);
            if (a.spellRestaurant.personNum = j, a.spellRestaurant.foodNum = h, a.isListExist = e.groups.length, a.spellRestaurant.pindanNum = e.pindanCount ? Math.max(e.pindanCount, 0) : 0, b.spell.data = a.spellRestaurant, e.pindanOrder) {
                var o = e.pindanOrder;
                a.predictTime = 1e3 * (o.restaurant_deliver_time + o.created_at), a.waitTime = parseInt((Date.now() / 1e3 - o.created_at) / 60) + " "
            }
        };
        b.spell = {cartId: j.cartId, sig: j.sig}, a.mockCart = function (d, e) {
            var f = a.spellRestaurant.groups[d];
            if (g.setRestaurant(a.spellRestaurant), g.clear(), f.forEach(function (a) {
                    g.add(a)
                }), localStorage.setItem("cartList", JSON.stringify(g.list)), e) {
                var h = 1, i = 0, j = function (a) {
                    return a.error ? i = i || 1 : (i && swal({
                        title: "出错啦",
                        text: "网络错误",
                        type: "warning"
                    }, function () {
                        return b.loading = 0, c.url("/cart?spell=1&cartId=" + b.spell.cartId + "&sig=" + b.spell.sig)
                    }), h === Object.keys(g.list).length ? (b.loading = 0, c.url("/cart")) : void h++)
                };
                return b.loading = 1, g.destroy().$promise.then(function (a) {
                    return a.error ? j(a) : void g.init()
                }), window.ga("send", "event", "button", "click", "spell/goAlone")
            }
            return window.ga("send", "event", "button", "click", "spell/same"), c.url("/cart?spell=1&cartId=" + b.spell.cartId + "&sig=" + b.spell.sig)
        };
        var l = Date.now(), m = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx2a416286e96100ed&redirect_uri=" + encodeURIComponent(c.absUrl()) + "&response_type=code&scope=snsapi_userinfo&state=" + l, n = localStorage.getItem("wechatData"), o = localStorage.getItem("timeState");
        if (j.code && 0 === a.status) {
            if (!o || j.state !== o || 32 !== j.code.length)return swal("出错啦", "信息验证失败", "warning");
            localStorage.removeItem("timeState"), h.get({code: j.code}, function (a) {
                a.data && localStorage.setItem("wechatData", JSON.stringify(a.data))
            })
        } else!n && /MicroMessenger/i.test(navigator.userAgent) && (localStorage.setItem("timeState", l), location.href = m);
        a.quit = function () {
            var b;
            try {
                b = JSON.parse(localStorage.getItem("spellCartName"))
            } catch (c) {
                b = localStorage.getItem("spellCartName")
            }
            confirm("确认退出拼单吗？") && e.save({cartId: j.cartId, sig: j.sig, action: "delete", name: b}, function (b) {
                return b.error ? swal("出错啦", "退出错误！", "warning") : (k(b), a.status = 0, localStorage.removeItem("spellCartId"), void localStorage.removeItem("spellCartName"))
            })
        };
        var p = function () {
            e.get({cartId: j.cartId, sig: j.sig}, k), setTimeout(p, 1e4)
        };
        p()
    } else a.spellRestaurant = {restaurantNameForUrl: "spell", personNum: 0, foodNum: 0}
}]), angular.module("meleme.controllers").controller("tradeCancelOrderCtrl", ["$scope", "$routeParams", "$location", "Order", function (a, b, c, d) {
    a.orderId = b.id, a.reasons = ["临时有事，无法接收外卖", "点错了，重新点", "不想买了", "其他"], a.setReason = function (b) {
        a.reasonIndex = b
    }, a.submitOrderReason = function () {
        var b;
        b = 3 === a.reasonIndex ? a.otherReason || a.reasons[a.reasonIndex] : a.reasons[a.reasonIndex], b && d.cancelReason({id: a.orderId}, {}, function () {
            c.url("/trade")
        })
    }
}]), angular.module("meleme.controllers").controller("tradeOrderCtrl", ["$rootScope", "$scope", "$routeParams", "$location", "UserAgent", "Order", "OrderTrades", "OrderActivity", "Complaint", "SweetAlert", function (a, b, c, d, e, f, g, h, i, j) {
    b.order = {}, b.order.can_pay = !1, a.loading = !1;
    var k = function (c) {
        a.loading = !1, b.order = c, b.order.pay_invalid_time && (b.order.timeLeft = Date.parse(b.order.pay_invalid_time).getTime() / 1e3, new Date < Date.parse(b.order.pay_invalid_time) && 1 === b.order.is_online_paid && (b.order.can_pay = !0)), b.foodQuantity = function () {
            var a = 0;
            return c.basket.group.forEach(function (b) {
                b.forEach(function (b) {
                    a += b.quantity
                })
            }), a
        }
    };
    a.profile.$promise.then(function (a) {
        g.getOrderDetail({
            user_id: a.user_id,
            order_id: c.id,
            "extras[]": ["basket", "pay_invalid_time", "restaurant"]
        }, function (a) {
            k(a)
        })
    }, function (a) {
        g.getOrderDetail({
            user_id: "anonymous",
            order_id: c.id,
            "extras[]": ["basket", "pay_invalid_time", "restaurant"]
        }, function (a) {
            k(a)
        })
    }), b.$on("countdown:ontime", function () {
        b.order.can_pay = !1
    }), b.payRepeatCheck = function () {
        d.url("/pay?id=" + c.id + "&status=paying")
    }, b.options = ["餐厅已确认，但没有送外卖", "餐厅参加了活动，但没有优惠", "吐槽其他"], b.itemToggle = function (a) {
        b.errorStatus = !1, b.itemIndex = a
    }, b.cancelOrder = function () {
        11 !== b.order.status_code ? j.swal({
            title: "是否取消订单",
            type: "warning",
            showCancelButton: !0,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "取消订单",
            cancelButtonText: "再等等"
        }, function (a) {
            a && f.cancel({id: b.order.unique_id}, {}, function () {
                d.url("/cancel_order/" + b.order.unique_id)
            })
        }) : j.swal({
            title: "餐厅刚刚接了单",
            text: "无法取消，您可以电话餐厅取消",
            type: "warning",
            showCancelButton: !0,
            confirmButtonText: "电话取消",
            cancelButtonText: "再等等"
        }, function (a) {
            a && window.open("tel:18652171158")
        })
    }, b.submitCheck = function () {
        b.errorStatus = 2 === b.itemIndex && !b.mockText, b.errorStatus || i.save({
            user_id: a.profile.user_id,
            order_id: c.id,
            complaint_type: b.itemIndex,
            content: 2 === b.itemIndex ? b.mockText : ""
        }, function () {
            j.swal({
                title: "反馈成功",
                text: "感谢您对我们的支持和帮助，我们会尽快核实，核实无误后，会对餐厅进行惩罚",
                customClass: "complaint-service-box",
                confirmButtonText: "知道了"
            }), b.order.complaint_status = 1, b.showReport = !1
        }, function (a) {
            j.swal({title: "出错啦", text: a.data.message, confirmButtonText: "知道了"}), b.showReport = !1
        })
    };
    var l = encodeURIComponent("https://v2.live800.com/live800/chatClient/chatbox.jsp?companyID=402791&configID=123801&jid=1820947377&enterurl=http%3A%2F%2Fprofile%2Elive800%2Ecom%2Fprofile%2Fpreview%2Ejsp&skillId=6632&pagetitle=%E6%95%88%E6%9E%9C%E9%A2%84%E8%A7%88&pagereferrer=http%3A%2F%2Fprofile%2Elive800%2Ecom%2Fprofile%2FgetNewEmbedScriptEmbedScriptAction%2Eaction%3Ficon%3Dselected7&firstEnterUrl=http%3A%2F%2Fprofile%2Elive800%2Ecom%2Fprofile%2Fpreview%2Ejsp&lan=zh&s=1");
    switch (e) {
        case"ios":
            b.urlOnline = "eleme://web?url=" + l + "&animation_type=1", b.urlPhone = "eleme://make_call?phone_number=10105757", b.urlFeedback = "eleme://feedback?&animation_type=1";
            break;
        case"android":
            b.urlOnline = "eleme://web?url=" + l, b.urlPhone = "eleme://make_call?phone_number=10105757", b.urlFeedback = "eleme://feedback?";
            break;
        case"browser":
            b.urlOnline = "https://v2.live800.com/live800/chatClient/chatbox.jsp?companyID=402791&configID=123801&jid=1820947377&enterurl=http%3A%2F%2Fprofile%2Elive800%2Ecom%2Fprofile%2Fpreview%2Ejsp&skillId=6632&pagetitle=%E6%95%88%E6%9E%9C%E9%A2%84%E8%A7%88&pagereferrer=http%3A%2F%2Fprofile%2Elive800%2Ecom%2Fprofile%2FgetNewEmbedScriptEmbedScriptAction%2Eaction%3Ficon%3Dselected7&firstEnterUrl=http%3A%2F%2Fprofile%2Elive800%2Ecom%2Fprofile%2Fpreview%2Ejsp&lan=zh&s=1", b.urlPhone = "tel:10105757"
    }
    b.orderComplaintService = function () {
        j.swal({
            title: "联系客服",
            text: '<a href="' + b.urlOnline + '">在线客服</a><a href="' + b.urlPhone + '">客服电话：10105757</a>',
            customClass: "complaint-service-box",
            confirmButtonText: "取消",
            confirmButtonColor: "#3190E8",
            html: !0
        })
    }
}]), angular.module("meleme.controllers").controller("tradeCtrl", ["$rootScope", "$scope", "OrderTrades", function (a, b, c) {
    b.orders = [], b.hasRecord = !0, b.isrecordLoading = !1, a.loading = !0, b.hasMoreData = !0;
    var d = 0, e = function (c) {
        a.loading = !1, b.hasLogin = !0, b.orders.push.apply(b.orders, c), b.hasRecord = b.orders.length ? !0 : !1, b.isrecordLoading = !1, c.length < 10 && (b.hasMoreData = !1), d += 10
    };
    b.recordLoadMore = function () {
        !b.isrecordLoading && b.hasMoreData && (b.orders.length > 0 && (b.isrecordLoading = !0), a.profile.$promise.then(function (a) {
            c.getOrder({
                user_id: a.user_id,
                limit: 10,
                offset: d,
                "extras[]": "restaurant",
                type: "last_month"
            }, function (a) {
                e(a)
            })
        }, function (a) {
            c.getOrder({user_id: "anonymous", limit: 10, offset: d, "extras[]": "restaurant"}, function (a) {
                e(a)
            })
        }))
    }
}]), angular.module("meleme.controllers").controller("unbindMobileCtrl", ["$scope", "Page", "Mobile", "$rootScope", "VerifyCode", "UserAgent", "$location", function (a, b, c, d, e, f, g) {
    a.isFromApp && (b.title = "换绑手机"), d.profile.$promise.then(function () {
        return 0 === d.profile.is_mobile_valid ? g.url("/profile/bind") : void(a.user = {
            origin: d.profile.mobile,
            code: "",
            serverError: !1
        })
    }), a.formSubmit = function (b) {
        e.save({way: "mobile", action: "validate"}, {
            validate_token: a.user.validate_token,
            validate_code: b.code
        }, function (b) {
            d.profile.user_mobile_token = b.mobile_token, a.user.mobile_token = b.mobile_token, a.countdown = !1, a.user.serverError = !b.validate, b.validate ? g.url("/profile/bind") : a.user.errorMsg = "验证码错误"
        }, function (b) {
            a.user.serverError = !0, a.user.errorMsg = "验证码错误"
        })
    }, a.sendCode = function (b) {
        e.save({way: "mobile", action: "send"}, {mobile: a.user.origin, type: b}, function (c) {
            a.user.serverError = !1, a.user.validate_token = c.validate_token, "sms" === b ? a.countdown = !0 : a.user.audio = !0
        }, function (b) {
            switch (a.user.serverError = !0, b.data.name) {
                case"VALIDATION_FAILED":
                    a.user.errorMsg = "请填写手机号码";
                    break;
                default:
                    a.user.errorMsg = "服务器好像有问题啦"
            }
        })
    }
}]), angular.module("meleme.directives", []).directive("melemeMap", ["$location", "Place", "MarPosition", function (a, b, c) {
    return function (d, e) {
        if ("undefined" != typeof navigator.geolocation) {
            var f = a.search().force, g = localStorage.getItem("geohash"), h = a.path();
            (f || !g || h.match(/city\/[0-9]+$/)) && navigator.geolocation.getCurrentPosition(function (a) {
                var d = c.transform(a.coords.latitude, a.coords.longitude);
                b.get({type: "geohash", geohash: Geohash.encode(d[0], d[1]).substr(0, 12)}, function (a) {
                    if (!a.error && 0 !== a.data.length) {
                        e.find(".guessed_addr").attr("href", "/place/" + a.data.geohash).text(a.data.address || a.data.name), e.removeClass("ui_invisible");
                        var b = "/home" === h ? "home" : "search";
                        window.ga("send", "event", "msite/geolocation", "show", b), e.on("click", function () {
                            window.ga("send", "event", "msite/geolocation", "click", b)
                        })
                    }
                })
            }, function (a) {
            })
        }
    }
}]).directive("standalone", [function () {
    return function () {
        "standalone"in window.navigator && window.navigator.standalone && document.body.classList.add("standalone")
    }
}]).directive("autoAddress", ["Place", "MarPosition", "$timeout", function (a, b, c) {
    return {
        require: "ngModel", link: function (c, d, e, f) {
            "undefined" != typeof navigator.geolocation && d.on("focus", function () {
                0 === c.loading && (c.$apply(function () {
                    c.loading = 1
                }), setTimeout(function () {
                    2 !== c.loading && (swal("出错啦", "不好意思，找不到地址!", "warning"), c.$apply(function () {
                        c.loading = -1
                    }))
                }, 5e3), navigator.geolocation.getCurrentPosition(function (e) {
                    var g = b.transform(e.coords.latitude, e.coords.longitude);
                    a.get({type: "geohash", geohash: Geohash.encode(g[0], g[1]).substr(0, 12)}, function (a) {
                        if (!a.error && 0 !== a.data.length) {
                            if (!a.data.address && !a.data.name)return c.loading = -1, swal("出错啦", "不好意思，找不到地址!", "warning");
                            var b = d.val() + a.data.address + a.data.name;
                            d.val(b), f.$setViewValue(b), c.loading = 2
                        }
                    })
                }, function (a) {
                }))
            })
        }
    }
}]).directive("autoFillSync", ["$timeout", function (a) {
    return {
        require: "ngModel", link: function (b, c, d, e) {
            var f = c.val();
            a(function () {
                var a = c.val();
                e.$pristine && f !== a && e.$setViewValue(a)
            }, 500)
        }
    }
}]).directive("rating", function () {
    return {
        restrict: "E",
        scope: {point: "="},
        template: '<notwig src="/msite/svg-inline/svg-rating-star.svg" ng-load="onload($result)"></notwig>',
        link: function (a, b) {
            a.onload = function (b) {
                var c = angular.element(b[0]);
                a.$watch("point", function (a) {
                    var b = Number(a) || 0, d = Math.round(2 * b), e = 10 * Math.floor(5 - d / 2), f = d % 2 === 0 ? 0 : 10;
                    c.attr("viewBox", [e, f, 50, 10].join(" "))
                })
            }
        }
    }
}).directive("goback", ["$location", function (a) {
    return function (b, c, d) {
        c.on("click", function () {
            if (/force=1/.test(d.goback))return localStorage.removeItem("goback"), b.$apply(function () {
                a.url(d.goback)
            });
            var c = d.goback;
            return /^https?:/.test(d.goback) ? void(location.href = d.goback) : (c = c || -1, void b.$apply(function () {
                return -1 === c ? history.back(-1) : void a.url(c)
            }))
        })
    }
}]).directive("simpleUpload", ["Avatar", function (a) {
    var b = function (a) {
        for (var b = atob(a.split(",")[1]), c = [], d = 0; d < b.length; d++)c.push(b.charCodeAt(d));
        return new Blob([new Uint8Array(c)], {type: a.slice(5, a.indexOf(";"))})
    };
    return function (c, d, e) {
        d.on("change", function () {
            var f = d[0].files[0], g = e.simpleUpload;
            if (f) {
                if (!/^image\//.test(f.type))return swal("仅支持图片文件！");
                var h = document.createElement("img"), i = 210;
                h.style.position = "absolute", h.style.top = "100%", h.style.left = "100%", h.onload = function () {
                    var d = document.createElement("canvas"), e = d.getContext("2d");
                    d.height = i, d.width = i;
                    var j = Math.min(h.height, h.width);
                    e.drawImage(h, 0, 0, j, j, 0, 0, i, i), f = d.toBlob ? d.toBlob() : b(d.toDataURL()), g = g ? c[g] : angular.noop, a.save({
                        avatar: f,
                        h: i,
                        w: i
                    }, g, function (a) {
                        return swal("上传失败")
                    })
                }, h.src = window.URL.createObjectURL(f)
            }
        })
    }
}]).directive("menuList", ["$rootScope", "$location", function (a, b) {
    return {
        restrict: "E",
        scope: {foods: "=", restaurant: "=", menu: "="},
        templateUrl: "/msite/html/restaurant_menuListItem.html",
        link: function (c, d, e) {
            c.FUSSBASE = a.FUSSBASE, c.selectFood = function (a) {
                b.url(b.url() + "/" + a)
            }
        }
    }
}]).directive("skateShoes", ["$timeout", function (a) {
    return {
        restrict: "A", link: function (b, c, d) {
            var e, f = {click: !0, mouseWheel: !0};
            b.$watch(d.skateShoes, function (b) {
                b && a(function () {
                    e && e.destroy(), e = new IScroll(c[0], f)
                })
            })
        }
    }
}]).directive("restaurantViewport", ["$timeout", "RESTAURANT_SECTIONS_HEIGHT", function (a, b) {
    return {
        restrict: "A", link: function (a, c, d) {
            var e = window.document.documentElement.clientHeight;
            for (var f in b)e -= b[f].height;
            c.css("height", e + "px")
        }
    }
}]).directive("countdown", [function () {
    var a, b = function (b, c, d) {
        return d ? (d = +d, c.text(d), void(a = setInterval(function () {
            return 0 !== d ? c.text(--d) : void b.$apply(function () {
                b.countdown = !1
            })
        }, 1e3))) : a && clearInterval(a)
    };
    return {
        restrict: "E", link: function (a, c, d) {
            a.$watch("countdown", function (e) {
                return "stop" == e ? function () {
                    b(a, c), a.countdown = !1
                }() : e ? b(a, c, d.time) : b(a, c)
            })
        }
    }
}]).directive("drawer", [function () {
    return function (a, b, c) {
        b.on("click", function () {
            angular.$("body").addClass("ui_fix"), angular.$("#eleme_drawer_wrapper").addClass("ui_show")
        }), angular.$("#eleme_drawer_wrapper").on("click", function () {
            angular.$("#eleme_drawer_wrapper").removeClass("ui_show"), setTimeout(function () {
                angular.$("body").removeClass("ui_fix")
            }, 300)
        })
    }
}]).directive("loadmore", [function () {
    var a = document, b = a.documentElement, c = a.querySelector("[ng-view]");
    return {
        restrict: "E", link: function (a, d, e) {
            var f = d[0].scrollHeight, g = a.items().length, h = function () {
                return a.limit >= g ? window.removeEventListener("scroll", h) : void(c.scrollHeight - Math.abs(b.getBoundingClientRect().top) - window.screen.height - f <= 0 && a.$apply(function () {
                    a.limit += 10
                }))
            };
            c.scrollHeight - Math.abs(b.getBoundingClientRect().top) - window.screen.height - f <= 0 && (a.limit += 10), window.addEventListener("scroll", h, !1)
        }
    }
}]).directive("loadmoreHongbao", [function () {
    var a = document, b = a.documentElement, c = a.querySelector("[ng-view]");
    return {
        restrict: "E", scope: {items: "=", limit: "="}, link: function (a, d, e) {
            var f = d[0].scrollHeight;
            a.limit = 10;
            var g = function () {
                a.limit > a.items || c.scrollHeight - Math.abs(b.getBoundingClientRect().top) - window.screen.height - f <= 0 && a.$apply(function () {
                    a.limit += 10
                })
            };
            c.scrollHeight - Math.abs(b.getBoundingClientRect().top) - window.screen.height - f <= 0 && (a.limit += 10), window.addEventListener("scroll", g, !1), a.$on("$destroy", function () {
                window.removeEventListener("scroll", g)
            })
        }
    }
}]).directive("ggSrcset", ["$window", function (a) {
    var b = a.devicePixelRatio >= 1 ? 2 : 1, c = "srcset"in new Image, d = a.innerWidth;
    return {
        compile: function (a, e) {
            return e.width && e.width.match(/(\d+)%/) && e.$set("width", d * Number(e.width.replace("%", "")) / 100 | 0), e.height && e.height.match(/(\d+)%/) && e.$set("height", d * Number(e.height.replace("%", "")) / 100 | 0), function (a, d, e) {
                var f = e.link + "?w=" + e.width + "&h=" + e.height;
                return c ? (2 === b && (f += " 1x, " + e.link + "?w=" + 2 * e.width + "&h=" + 2 * e.height + " 2x"), e.$set("srcset", f)) : void e.$set("src", f)
            }
        }
    }
}]).directive("addNote", [function () {
    return function (a, b) {
        a.note = a.note || "", b.children().on("click", function () {
            var b = angular.$(this), c = b.text(), d = a.note;
            d.indexOf(c) > -1 ? (d = d.replace(c, ""), b.removeClass("ui_selected")) : (d = d + " " + c, b.addClass("ui_selected")), a.$apply(function () {
                a.note = d.trim()
            })
        })
    }
}]).directive("tracker", [function () {
    return function (a, b, c) {
        var d = c.tracker;
        d && (d = d.split(":"), window.ga("send", "event", d[0], d[1], d[2]))
    }
}]).directive("orderStatus", [function () {
    function a(a, b) {
        switch (a.removeClass("red", "gray", "blue", "orange"), b) {
            case-5:
                a.addClass("red"), a.text("等待支付");
                break;
            case-3:
                a.addClass("red"), a.text("正在支付");
                break;
            case-4:
                a.addClass("gray"), a.text("支付失败");
                break;
            case 1:
                a.addClass("blue"), a.text("待饿了么确认");
                break;
            case-2:
            case 0:
                a.addClass("orange"), a.text("待餐厅确认");
                break;
            case-1:
                a.addClass("gray"), a.text("无效订单");
                break;
            case 11:
                a.addClass("gray"), a.text("订单已完成");
                break;
            case 2:
                a.addClass("blue"), a.text("饿单已确认");
                break;
            case 3:
                a.addClass("orange"), a.text("退款中");
                break;
            case-8:
                a.addClass("gray"), a.text("订单已取消")
        }
    }

    return {
        scope: {status: "="}, link: function (b, c) {
            b.$watch("status", function (b) {
                "object" == typeof b && a(c, b.status_code)
            }, !0)
        }
    }
}]).directive("countdown", ["$timeout", function (a) {
    return {
        restrict: "A", scope: {time: "=", env: "@"}, link: function (b, c, d) {
            var e, f = function (a) {
                return (a >= 10 ? "" : "0") + a
            }, g = function (a) {
                var b = Math.floor(a / 3600), c = Math.floor(a % 3600 / 60), d = Math.floor(a % 60), e = "";
                return b > 0 && (e += b + ":"), e += f(c) + ":", e += f(d)
            }, h = function () {
                if ("number" == typeof b.time) {
                    var d = Date.now(), f = Math.round(b.time - d / 1e3);
                    if (0 > f)return a.cancel(e), void b.$emit(b.env);
                    var i = g(f);
                    c.text(i)
                }
                e = a(h, 1e3)
            };
            a(h, 1e3), b.$on("$destroy", function () {
                e && a.cancel(e)
            })
        }
    }
}]).directive("ngClick", ["$parse", "$rootScope", function (a, b) {
    return {
        restrict: "A", compile: function (b, c) {
            var d = a(c.ngClick, null, !0);
            return function (a, b) {
                b.on("click", function (b) {
                    a.$apply(function () {
                        d(a, {$event: b})
                    })
                })
            }
        }
    }
}]).directive("restaurantTab", ["$location", function (a) {
    return {
        restrict: "E",
        scope: {state: "=", restaurant: "="},
        templateUrl: "/msite/html/restaurant_tabs.html",
        link: function (b, c, d) {
            b.tabs = [{name: "菜单", state: "menu"}, {name: "照片", state: "photos"}, {
                name: "详情",
                state: "info"
            }], b.changeState = function (c) {
                a.url(b.restaurant.name_for_url + "/" + ("menu" === c ? "" : c))
            }
        }
    }
}]).directive("searchBtn", function () {
    return {
        restrict: "A", scope: {search: "&"}, link: function (a, b) {
            b.on("keyup", function (b) {
                13 === b.which && a.search()
            })
        }
    }
}).directive("fontSizeAdapter", [function () {
    return {
        scope: {text: "="}, link: function (a, b) {
            var c = angular.element("<div></div>"), d = angular.element("<span></span>");
            c.css({
                width: "100%",
                height: "100%",
                padding: "0px",
                margin: "0px",
                border: "0px"
            }), c.append(d), d.css("display:inline-block"), b.append(c), a.$watch("text", function (a) {
                d.text(a);
                var b = d[0].offsetWidth, e = c[0].offsetWidth, f = parseInt(getComputedStyle(d[0])["font-size"]);
                b > e && (f /= b / e), d.css("font-size", parseInt(f) + "px")
            })
        }
    }
}]).directive("orderActivity", ["$rootScope", "$routeParams", "OrderActivity", "UserAgent", "ProfileUser", function (a, b, c, d, e) {
    return {
        restrict: "E", templateUrl: "/msite/html/orderactivity_base.html", link: function (f, g) {
            f.ua = d, e.get(function (a) {
                f.user_id = a.user_id
            }, function () {
                f.user_id = "anonymous"
            }).$promise.then(function () {
                    return c.get({user_id: f.user_id, order_id: b.id}).$promise
                }).then(function (b) {
                    f.orderactivity = b, f.hideself(), b.activity && (f.activity = b.activity, f.gettype = 1 === f.activity.type ? "领取奖券" : "抽取礼包", f.detailURL = f.changeURL(f.activity.detail_url), f.activity.bgpath = a.FUSSBASE + f.activity.back_ground_path)
                }), f.getGiftcode = function () {
                c.save({user_id: f.user_id, order_id: b.id, activity_id: f.orderactivity.activity.id}, function (a) {
                    f.orderactivity = a, f.hideself()
                })
            }, f.selectGiftcode = function (a) {
                "browser" === d && a.target.select()
            }, f.changeURL = function (a) {
                var b = encodeURIComponent(a);
                return "browser" !== d ? "eleme://web?url=" + b : a
            }, f.hideself = function () {
                (1 === f.orderactivity.status || 5 === f.orderactivity.status || 4 === f.orderactivity.status) && (g[0].style.display = "block")
            }
        }
    }
}]).directive("notwig", ["$http", "$templateCache", "$compile", "$parse", function (a, b, c, d) {
    return {
        restrict: "E", scope: !1, link: function (e, f, g) {
            var h = f[0], i = g.src, j = d(g.ngLoad);
            a.get(i, {cache: b}).then(function (a) {
                if (!e.$$destroyed) {
                    var b = [], d = document.createComment(' <notwig src="' + i + '"></notwig> ');
                    b.push(d), h.parentNode.insertBefore(d, h);
                    var f = c(a.data)(e), g = h.parentNode, k = [];
                    angular.forEach(f, function (a) {
                        k.push(a), b.push(a), g.insertBefore(a, h)
                    }), e.$on("$destroy", function () {
                        angular.forEach(b, function (a) {
                            a.parentNode === g && g.removeChild(a)
                        })
                    }), g.removeChild(h), j(e, {$result: k})
                }
            }, function () {
                setTimeout(function () {
                    throw new Error('notwig: 模板资源加载错误, src="' + i + '"')
                })
            })
        }
    }
}]), angular.module("meleme.services", []).constant("BALANCETEXT", ["饿了么账户充值", "余额消费", "订单收入", "订单退款", "申请提现", "提现失败", "废弃", "用户提现", "支付失败退款", "三方支付消费", "合同付费", "订单取消扣款", "匿名用户提现", "匿名用户退款", "废弃", "合同退款"]).constant("ORDERTEXT", ["成功下单", "有效订单", "无效订单", "点评订单", "点评食物", "兑换礼品", "系统处理", "管理员处理", "上传食物图片", "点评餐厅服务"]).factory("City", ["$resource", function (a) {
    return a("/v1/city/:code/:district", {code: "@code", district: "@district"}, {get: {method: "GET", cache: !0}})
}]).factory("Place", ["$resource", function (a) {
    return a("/v1/place", {}, {get: {method: "GET", cache: !0}})
}]).factory("Coupon", ["$resource", function (a) {
    return a("/v1/coupon", {}, {save: {method: "POST", headers: {"Content-Type": "application/x-www-form-urlencoded"}}})
}]).factory("UserPlace", ["$resource", function (a) {
    return a("/v1/user/place/:id", {id: "@id"}, {get: {method: "GET", cache: !0}})
}]).factory("Poi", ["$resource", "$rootScope", function (a, b) {
    return a(b.RESTBASE + "/pois")
}]).factory("Restaurant", ["$resource", "$rootScope", "$q", function (a, b, c) {
    var d = a(b.RESTBASE + "/restaurants/:nameForUrl/:action", {
        nameForUrl: "@nameForUrl",
        action: "@action"
    }, {
        getMenu: {method: "GET", params: {action: "menu"}, isArray: !0},
        getPhotos: {method: "GET", params: {action: "photowall"}, isArray: !0}
    }), e = d.getMenu;
    return d.getMenu = function () {
        var a = c.defer();
        return e.apply(d, arguments).$promise.then(function (b) {
            b.forEach(function (a) {
                a.foodIdList = [], a.foods.forEach(function (b) {
                    a.foodIdList.push(b.id)
                })
            }), a.resolve(b)
        }), a.$promise = a.promise, a
    }, d
}]).factory("Food", ["$resource", "$rootScope", "$q", function (a, b, c) {
    var d = a(b.RESTBASE + "/foods/:id/:action/:way", {
        id: "@id",
        action: "@action",
        way: "@way"
    }, {
        getPhotos: {
            method: "GET",
            params: {action: "photos", limit: "@limit", offset: "@offset", "extras[]": "rating"},
            isArray: !0
        },
        getRating: {
            method: "GET",
            params: {action: "ratings", has_text: "@has_text", limit: "@limit", offset: "@offset"},
            isArray: !0
        }
    }), e = d.get;
    return d.get = function () {
        var a = c.defer();
        return e.apply(this, arguments).$promise.then(function (b) {
            for (var c in b.ratings)b.ratings.hasOwnProperty(c) && (b.rating_count = b.rating_count || 0, b.rating_count += b.ratings[c]);
            a.resolve(b)
        }), a.$promise = a.promise, a
    }, d
}]).factory("Invoice", ["$resource", function (a) {
    return a("/v1/invoice/:id", {id: "@id"}, {
        update: {method: "PUT"},
        save: {
            method: "POST",
            headers: {"Content-Type": "application/x-www-form-urlencoded", "X-Requested-With": "XMLHttpRequest"}
        }
    })
}]).factory("Mcb", ["$resource", function (a) {
    return a("/v1/mcb_code/:action", {action: "@action"}, {
        save: {
            method: "POST",
            headers: {"Content-Type": "application/x-www-form-urlencoded", "X-Requested-With": "XMLHttpRequest"}
        }
    })
}]).factory("Discount", ["$resource", function (a) {
    return a("/v1/discount/:action", {action: "@action"})
}]).factory("CartVender", ["$resource", "$rootScope", function (a, b) {
    var c = b.MAINBASE + "/cart";
    return {
        list: a(c + "/:action", {
            callback: "JSON_CALLBACK",
            stamp: Date.now() + "" + Math.random(),
            action: "@action"
        }, {
            save: {
                method: "POST",
                withCredentials: !0,
                headers: {"Content-Type": "application/x-www-form-urlencoded", "X-Requested-With": "XMLHttpRequest"}
            }, jsonp: {method: "JSONP"}
        }),
        item: a(c + "/:action/0/0/:id", {
            action: "@action",
            id: "@id",
            callback: "JSON_CALLBACK",
            stamp: Date.now() + "" + Math.random()
        }, {jsonp: {method: "JSONP"}})
    }
}]).factory("Account", ["$resource", "$location", "$rootScope", function (a, b, c) {
    return a(c.RESTBASE + "/:action/:param", {action: "@action", param: "@param"})
}]).factory("User", ["$resource", function (a) {
    return a("/v1/user")
}]).factory("ProfileUser", ["$resource", "$rootScope", "$q", function (a, b, c) {
    var d = a(b.RESTBASE + "/csrf_token").save().$promise, e = a(b.RESTBASE + "/user/:param", {param: "@param"}, {
        update: {method: "PUT"},
        get: {params: {"extras[]": "premium_vip"}}
    }), f = e.get;
    return e.get = function () {
        var a = f.apply(e, arguments);
        return a.$promise = a.$promise.then(function (b) {
            return d.then(function (b) {
                return a.csrf_token = b.csrf_token, a
            })
        }, function (b) {
            return d.then(function (d) {
                return a.csrf_token = d.csrf_token, c.reject(b)
            })
        }), a
    }, e
}]).factory("ProfileAddr", ["$resource", "$rootScope", function (a, b) {
    return a(b.RESTBASE + "/user/address", {}, {update: {method: "PUT", params: {csrf_token: b.profile.csrf_token}}})
}]).factory("ProfileExists", ["$resource", "$rootScope", function (a, b) {
    return a(b.RESTBASE + "/users/exists")
}]).factory("Address", ["$resource", "$rootScope", function (a, b) {
    return a(b.RESTBASE + "/users/:user_id/addresses/:address_id", {}, {
        update: {method: "PUT"},
        get: {method: "GET", isArray: !0, params: {user_id: b.profile.user_id}},
        save: {method: "POST", params: {user_id: b.profile.user_id}},
        remove: {method: "DELETE", params: {user_id: b.profile.user_id, address_id: "@address_id"}}
    })
}]).factory("Mobile", ["$resource", "$rootScope", function (a, b) {
    return a(b.RESTBASE + "/user/mobile/:way", {way: "@way"}, {bindMobile: {withCredentials: !0, method: "PUT"}})
}]).factory("Captcha", ["$resource", "$rootScope", function (a, b) {
    return a(b.RESTBASE + "/captchas/:param", {param: "@param"})
}]).factory("Balance", ["$resource", "$rootScope", function (a, b) {
    return a(b.RESTBASE + "/user/balance/:way/:operation", {
        action: "@action",
        way: "@way",
        operation: "@operation"
    }, {
        charge: {withCredentials: !0, method: "POST", params: {way: "charge"}},
        checkWithdraw: {withCredentials: !0, method: "GET", params: {way: "withdraw", operation: "check"}},
        widthdraw: {withCredentials: !0, method: "POST", params: {way: "withdraw"}}
    })
}]).factory("VerifyCode", ["$resource", "$rootScope", function (a, b) {
    return a(b.RESTBASE + "/:way/verify_code/:action", {way: "@way", action: "@action"})
}]).factory("Order", ["$resource", function (a) {
    return a("/v1/order/:id/:action/:param", {id: "@id", action: "@action"}, {
        save: {
            method: "POST",
            headers: {"Content-Type": "application/x-www-form-urlencoded"}
        },
        cancel: {
            method: "POST",
            params: {action: "cancel"},
            headers: {"Content-Type": "application/x-www-form-urlencoded"}
        },
        cancelReason: {method: "POST", params: {action: "cancel", param: "reason"}}
    })
}]).factory("OrderTrades", ["$resource", "$rootScope", function (a, b) {
    return a(b.RESTBASE + "/users/:user_id/orders/:order_id", {
        user_id: "@user_id",
        order_id: "@order_id"
    }, {getOrder: {method: "GET", isArray: !0}, getOrderDetail: {method: "GET"}})
}]).factory("Complaint", ["$resource", "$rootScope", function (a, b) {
    return a(b.RESTBASE + "/users/:user_id/orders/:order_id/complaint", {user_id: "@user_id", order_id: "@order_id"})
}]).factory("OrderActivity", ["$resource", "$rootScope", function (a, b) {
    return a(b.RESTBASE + "/users/:user_id/orders/:order_id/activity_code", {
        user_id: "@user_id",
        order_id: "@order_id"
    })
}]).factory("Page", ["UserAgent", function (a) {
    return {title: "browser" === a ? "叫外卖上饿了么 - 饿了么" : "", city: {}}
}]).factory("Spell", ["$resource", "$location", "SpellStatus", "$rootScope", function (a, b, c, d) {
    var e = d.MAINBASE + "/groupcart/:cartId/:sig/:action";
    return a(e, {cartId: "@cartId", sig: "@sig", action: "@action"}, {
        save: {
            method: "POST",
            headers: {"Content-Type": "application/x-www-form-urlencoded", "X-Requested-With": "XMLHttpRequest"}
        }
    })
}]).factory("SpellStatus", ["$location", function (a) {
    return function (b) {
        if (!b)return 0;
        if (!b.pindan)return 5;
        var c = b.pindanLock ? 6 : 0;
        if (b.pindanOrder && (c = b.pindanOrder.status_code, c = -5 === c || -3 === c ? 7 : -2 === c || 0 === c ? 2 : -4 === c ? 8 : 2 === c ? 3 : 3 === c ? 9 : 0), c)return c;
        var d, e, f = a.search().cartId;
        try {
            d = JSON.parse(localStorage.getItem("spellCartId"))
        } catch (g) {
            d = localStorage.getItem("spellCartId")
        }
        try {
            e = JSON.parse(localStorage.getItem("spellCartName"))
        } catch (g) {
            e = localStorage.getItem("spellCartName")
        }
        return d === f && e ? 1 : (localStorage.setItem("spellCartId", JSON.stringify(f)), localStorage.removeItem("spellCartName"), 0)
    }
}]).factory("MarPosition", [function () {
    var a = function () {
    };
    return a.prototype.a = 6378245, a.prototype.ee = .006693421622965943, a.prototype.transform = function (a, b) {
        if (this.outOfChina(a, b))return [a, b];
        var c = this.transformLat(b - 105, a - 35), d = this.transformLon(b - 105, a - 35), e = a / 180 * Math.PI, f = 1 - this.ee * Math.pow(Math.sin(e), 2), g = Math.sqrt(f);
        return c = 180 * c / (this.a * (1 - this.ee) / (f * g) * Math.PI), d = 180 * d / (this.a / g * Math.cos(e) * Math.PI), [a + c, b + d]
    }, a.prototype.outOfChina = function (a, b) {
        return 72.004 > b || b > 137.8347 ? !0 : .8293 > a || a > 55.8271 ? !0 : !1
    }, a.prototype.transformLat = function (a, b) {
        var c = -100 + 2 * a + 3 * b + .2 * b * b + .1 * a * b + .2 * Math.sqrt(Math.abs(a));
        return c += 2 * (20 * Math.sin(6 * a * Math.PI) + 20 * Math.sin(2 * a * Math.PI)) / 3, c += 2 * (20 * Math.sin(b * Math.PI) + 40 * Math.sin(b / 3 * Math.PI)) / 3, c += 2 * (160 * Math.sin(b / 12 * Math.PI) + 320 * Math.sin(b * Math.PI / 30)) / 3
    }, a.prototype.transformLon = function (a, b) {
        var c = 300 + a + 2 * b + .1 * a * a + .1 * a * b + .1 * Math.sqrt(Math.abs(a));
        return c += 2 * (20 * Math.sin(6 * a * Math.PI) + 20 * Math.sin(2 * a * Math.PI)) / 3, c += 2 * (20 * Math.sin(a * Math.PI) + 40 * Math.sin(a / 3 * Math.PI)) / 3, c += 2 * (150 * Math.sin(a / 12 * Math.PI) + 300 * Math.sin(a / 30 * Math.PI)) / 3
    }, new a
}]).factory("Weixin", ["$resource", function (a) {
    return a("/v1/weixin/userinfo", {}, {get: {method: "GET", cache: !0}})
}]).factory("PayOnline", ["$resource", function (a) {
    return a("/v1/order/:orderId/pay/:method", {orderId: "@orderId", method: "@method"}, {
        save: {
            method: "POST",
            headers: {"Content-Type": "application/x-www-form-urlencoded"}
        }
    })
}]).factory("Findpw", ["$resource", "$rootScope", function (a, b) {
    return a(b.RESTBASE + "/users/password/reset")
}]).factory("WeixinHongbao", ["$resource", "$rootScope", function (a, b) {
    return a(b.RESTBASE + "/weixin/:weixin_id/:action", {action: "@action", weixin_id: "@weixin_id"})
}]).factory("ProfileHongbao", ["$resource", "$rootScope", function (a, b) {
    return a(b.RESTBASE + "/users/:userid/hongbao/:way", {
        userid: "@userid",
        way: "@way"
    }, {
        exchange: {withCredentials: !0, params: {way: "exchange"}, method: "POST"},
        get: {withCredentials: !0, isArray: !0, method: "GET"},
        getcount: {withCredentials: !0, method: "GET"}
    })
}]).service("ProfileHongbaoFormatter", function () {
    var a = new Date;
    return {
        preTemplate: function (b) {
            return b.forEach(function (b) {
                b.begin_date = new Date(Date.parse(b.begin_date)), b.end_date = new Date(Date.parse(b.end_date)), b.used_at = b.used_at.length ? new Date(Date.parse(b.used_at)) : "", b.timeout = a > b.end_date, b.future = a < b.begin_date, b.history = 0 !== b.status || b.timeout, b.available = !(b.history || b.future), b.will_timeout = b.available && b.end_date - a < 6048e5
            }), b
        }
    }
}).factory("UsersRecord", ["$resource", "$rootScope", function (a, b) {
    return a(b.RESTBASE + "/users/:user_id/:way", {user_id: "@user_id", way: "@way"}, {
        getBalance: {
            method: "GET",
            isArray: !0,
            params: {way: "balance_records"}
        }, getPoint: {method: "GET", isArray: !0, params: {way: "point_change_records"}}
    })
}]).factory("Gift", ["$resource", "$rootScope", function (a, b) {
    return a(b.RESTBASE + "/gifts/:gift_id", {gift_id: "@gift_id"})
}]).factory("UsersGift", ["$resource", "$rootScope", function (a, b) {
    return a(b.RESTBASE + "/users/:user_id/gifts/:gift_id/:way", {
        user_id: "@user_id",
        gift_id: "@gift_id",
        way: "@way"
    })
}]).factory("HongbaoBaida", ["$resource", function (a) {
    return a("/v1/qr/hongbao/:way/:sn", {way: "@way", sn: "@sn"}, {
        save: {
            method: "POST",
            headers: {"Content-Type": "application/x-www-form-urlencoded"}
        }
    })
}]).factory("VIP", ["$resource", "$rootScope", function (a, b) {
    return a(b.RESTBASE + "/premium_vips/:mobile/:action", {way: "@way", sn: "@sn"}, {
        charge: {
            method: "POST",
            params: {action: "charge"}
        }
    })
}]).factory("formDataObject", function () {
    return function (a) {
        var b = new FormData;
        return angular.forEach(a, function (a, c) {
            b.append(c, a)
        }), b
    }
}).factory("Avatar", ["$resource", "$rootScope", "formDataObject", function (a, b, c) {
    return a(b.RESTBASE + "/user/avatar", {x: 0, y: 0, h: "@h", w: "@w"}, {
        save: {
            method: "POST",
            withCredentials: !0,
            headers: {"Content-Type": void 0, "X-Requested-With": "XMLHttpRequest"},
            transformRequest: c
        }
    })
}]).factory("SweetAlert", ["$timeout", "$window", function (a, b) {
    var c = b.swal, d = {
        swal: function (b, d, e) {
            a(function () {
                "function" == typeof d ? c(b, function (b) {
                    a(function () {
                        d(b)
                    })
                }, e) : c(b, d, e)
            }, 200)
        }, adv: function (b) {
            a(function () {
                c(b)
            }, 200)
        }, timed: function (b, d, e, f) {
            a(function () {
                c({title: b, text: d, type: e, timer: f})
            }, 200)
        }, success: function (b, d) {
            a(function () {
                c(b, d, "success")
            }, 200)
        }, error: function (b, d) {
            a(function () {
                c(b, d, "error")
            }, 200)
        }, warning: function (b, d) {
            a(function () {
                c(b, d, "warning")
            }, 200)
        }, info: function (b, d) {
            a(function () {
                c(b, d, "info")
            }, 200)
        }
    };
    return d
}]).factory("UserAgent", function () {
    var a = window.navigator.userAgent, b = /rajax/i, c = /iphone/i, d = /android/i;
    return b.test(a) ? c.test(a) ? "ios" : d.test(a) ? "android" : void 0 : "browser"
}).factory("ParamRoute", ["$location", "$rootScope", function (a, b) {
    var c = null, d = function (b, d) {
        c = d || null, a.path(b)
    }, e = function () {
        return c
    };
    return {path: d, getParams: e}
}]).factory("WechatInfo", ["$location", "$q", "Weixin", function (a, b, c) {
    var d = function (a) {
        try {
            var b = Object(JSON.parse(a));
            return f.prototype.isValid.call(b) ? b : null
        } catch (c) {
            return null
        }
    }, e = function (a) {
        return a.replace(/(\?)(code=[^&]*&)+|&code=[^&]*(?=&|$)/g, "$1")
    }, f = function () {
        this.init.apply(this, arguments)
    };
    return f.prototype = {
        init: function (a, b, c, d) {
            -1 === ["abandoned"].indexOf(c) && (this.name = a, this.avatar = b, this.openid = c, this.key = d)
        }, save: function () {
            var a = JSON.stringify(this), b = "; Domain=ele.me; Path=/; Expires=Wed, 31 Dec 2098 16:00:00 GMT";
            document.cookie = "wechatInfo=" + encodeURIComponent(a) + b, localStorage.setItem("wechatInfo", a)
        }, load: function () {
            var a = this;
            return this.loadFromLocal()["catch"](function () {
                return a.loadFromServer()
            })["catch"](function () {
                return a.authorize()
            })
        }, loadFromLocal: function () {
            var a = b.defer(), c = localStorage.getItem("wechatInfo"), e = decodeURIComponent(document.cookie.match(/(?:^|; )wechatInfo=([^;]*)|$/)[1]), f = d(c) || d(e);
            return f ? (this.update(f), a.resolve()) : a.reject(), a.promise
        }, loadFromServer: function () {
            var d = this, f = b.defer(), g = a.search().code || "";
            return 32 !== g.length ? f.reject() : c.get({code: g}, function (b) {
                return d.update(b.data), d.isValid() ? (d.save(), a.url(e(a.url())), void f.resolve()) : f.reject()
            }, function () {
                f.reject()
            }), f.promise
        }, authorize: function () {
            localStorage.removeItem("wechatInfo"), document.cookie = "wechatInfo=; Domain=ele.me; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT";
            var c = encodeURIComponent(e(a.absUrl()));
            return location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx2a416286e96100ed&redirect_uri=" + c + "&response_type=code&scope=snsapi_userinfo", b.defer().promise
        }, update: function (a) {
            a = Object(a), this.init(a.name || a.nickname, a.avatar || a.headimgurl, a.openid, a.key || a.eleme_key)
        }, isValid: function () {
            return !!this.name && !!this.openid && !!this.key
        }
    }, f
}]).service("I18N", function () {
    this.hongbao = {
        statusTextMap: {1: "已抢完", 2: "已抢过", 3: "{amount}元", 4: "{amount}元", 5: "没抢到", 6: "已取消", 7: "歇歇吧"},
        statusCaptionMap: {
            1: "红包已抢完了",
            2: "这个红包已经抢过了~",
            3: "恭喜你获得饿了么红包~",
            4: "恭喜你获得饿了么红包~",
            5: "这个红包你不能抢哟~",
            6: "这个红包已经取消了",
            7: "当天已领取红包数量超过一定数量啦~"
        },
        amountMessageMap: {
            1: "人品攒的好，考试没烦恼",
            2: "拆红包的姿势还不错哦",
            3: "拆红包的姿势还不错哦",
            4: "拆红包的姿势还不错哦",
            5: "抢红包，还得靠颜值爆表",
            6: "抢红包，还得靠颜值爆表",
            7: "抢红包，还得靠颜值爆表",
            8: "抢红包，还得靠颜值爆表",
            9: "抢红包，还得靠颜值爆表",
            10: "抢红包，还得靠颜值爆表"
        }
    }
}), angular.module("UBT").config(["$httpProvider", function (a) {
    a.interceptors.push(["tracking", "$q", function (a, b) {
        var c = /^\/restapi\/v1\/user$|^\/v1\/restaurant$/, d = [], e = function (a) {
            return d.push({beginstamp: Date.now(), config: a}), a
        }, f = function (e) {
            for (var f = function (b) {
                return function () {
                    a.send("API", {status: e.status, url: e.config.url, duration: Date.now() - b.beginstamp})
                }
            }, g = 0; g < d.length; g++)if (d[g].config === e.config) {
                c.test(e.config.url) && setTimeout(f(d[g])), d.splice(g, 1);
                break
            }
            var h = b.defer();
            return 2 === (e.status / 100 | 0) ? h.resolve(e) : h.reject(e), h.promise
        };
        return {request: e, response: f, responseError: f}
    }])
}]).factory("tracking", ["$rootScope", "UBT", function (a, b) {
    var c = b.bindData({
        geohash: function () {
            var a = localStorage.getItem("geohash") + "" || "";
            return a
        }, user_id: function () {
            return a.profile && a.profile.user_id
        }
    }), d = document.referrer, e = (document.documentElement, !0);
    return a.$on("$routeChangeStart", function () {
        e ? e = !1 : c.send("PV", {location: location.href, referrer: d}), d = location.href
    }), c
}]), angular.module("batchrequest", ["httphook"]).run(["httphook", "batchrequest.BatchHandler", "$rootScope", function (a, b, c) {
    var d = "restapi." + c.ROOTHOST;
    a.get(/^\/restapi\/v1\/(?!user|captchas|premium_vips|hongbao_groups|carts)/, function (a, b) {
        a.url = a.url.replace(/^\/restapi/, "//" + d)
    });
    var e = new b("//" + d + "/batch", function (a) {
        a.url = a.url.replace(new RegExp("^//" + d), "")
    });
    a.get(new RegExp("^//" + d + "/v1/"), e);
    var f = new b("/restapi/batch", function (a) {
        a.url = a.url.replace(/^\/restapi/, "")
    });
    a.post(/^\/restapi\/v1\/csrf_token/, f), a.get(/^\/restapi\/v1\//, f)
}]).factory("batchrequest.BatchHandler", ["$http", "$q", function (a, b) {
    return function (c, d) {
        var e, f = [], g = function () {
            var b = f.splice(0);
            if (e = null, 1 === b.length)return b[0].promise.resolve();
            var g = {timeout: 1e4, requests: []};
            angular.forEach(b, function (a) {
                var b = {method: a.req.method, url: a.req.url};
                "function" == typeof d && d(b), g.requests.push(b)
            }), a.post(c, g).then(function (a) {
                angular.forEach(a.data, function (a, c) {
                    var d = b[c];
                    d.res.status = a.code, d.res.data = a.body, d.promise.resolve(!1)
                })
            }, function () {
                angular.forEach(b, function (a, c) {
                    b[c].promise.resolve()
                });
                var a = location.host.replace(/^.*?(?=[^.\d]+\.[^.\d]+$)/, "");
                document.cookie = "BATCH=false; Domain=" + a + "; Path=/; Expires=" + new Date(Date.now() + 864e5).toGMTString()
            })
        }, h = function (a) {
            f.push(a), e || (e = setTimeout(g))
        };
        return function (a, c) {
            if ("false" !== document.cookie.match(/(?:; |^)BATCH=([^;]*)|$/)[1]) {
                var d = b.defer();
                return h({req: a, res: c, promise: d}), d.promise
            }
        }
    }
}]), angular.module("hosts", []).run(["$rootScope", function (a) {
    var b = document.domain.replace(/^(.+?\.)??(?=(test\.)?[^.]+\.\w+$)/, "");
    a.ROOTHOST = b, a.MOBILEHOST = "m." + b, a.RESTBASE = "/restapi/v1", a.PAYMENTBASE = "http://p." + b, a.ACCOUNTBASE = (/^ele(net)?\.me$/.test(b) ? "https" : "http") + "://account." + b, a.STATICBASE = "http://static11.elemecdn.com", ~b.indexOf("test") && (a.STATICBASE = ""), a.MAINBASE = location.protocol + "//v5." + b, void function () {
        var c = ["http://fuss10.elemecdn.com", location.protocol + "//fuss2." + b], d = 0;
        void function e() {
            var b = c[d++];
            if (b) {
                var f = new Image;
                f.onerror = function (b) {
                    a.$apply(e)
                }, f.src = a.FUSSBASE = b
            }
        }()
    }()
}]);