夕食餐饮Backend接口文档
---------------
服务器地址：http://123.57.249.80:80/beehive/

本文档记录Backend各接口的使用方法。包括输入参数，输出参数。

文档分三大部分：Microsite, android，web。对应使用Backend的三个客户端。

接口的请求方式全部为POST，返回值为json格式的字串。

输出的默认格式包括ret，msg和data（data段可选）:

    成功：{"ret":0, "msg":"xxxxxx"[, "data":...]}
    失败：{"ret":1, "msg":"xxxxxx"}
    
##Microsite(/microsite)##
微网站接口
###order(/order)###
- - -

userorderlist 获取用户订单
> URL：/microsite/order/userorderlist
> 
> 输入：
>
>     userId - 用户Id
> 输出：
>
>     Array - 订单列表
> 例：
> 
>     成功：{"ret":0,"msg":"获取用户订单成功","data":[{"createTime":"2015-05-03 12:15:15.0","dishes":"1111","distributionId":1,"hasPaid":true,"orderId":1,"orderType":0,"remarks":"32223","restaurantId":1,"status":0,"takeNo":111,"totalPrice":213,"updateTime":"2015-05-03 12:15:15.0","userId":1,"voucherId":4444},{"createTime":"2015-05-03 12:15:15.0","dishes":"{1:1,2:2}","distributionId":1,"hasPaid":false,"orderId":2,"orderType":1,"remarks":"测试","restaurantId":0,"status":1,"takeNo":1,"totalPrice":1,"updateTime":"2015-05-03 12:15:15.0","userId":1,"voucherId":1111}]}
>     失败：暂无实例

orderstatus 获取订单状态分类列表
> URL：/microsite/order/orderstatus
> 
> 输入：无
> 
> 输出：
> 
>     Map - 订单状态值与对应的状态名称
> 例：
> 
>     成功：{"ret":0,"msg":"获取订单状态分类成功","data":{"0":"新订单","1":"已配送","2":"已完成","3":"已取消"}}
>     失败：暂无实例

paytype 获取支付方式分类列表
> URL：/microsite/order/paytype
> 
> 输入：无
> 
> 输出：
> 
>     Map - 支付方式值与对应的状态名称
> 例：
> 
>     成功：{"ret":0,"msg":"获取支付方式分类成功","data":{"0":"货到付款","1":"微信支付"}}
>     失败：暂无实例

commitorder 提交订单
> URL：/microsite/order/commitorder
> 
> 输入：
> 
>     userId - 用户Id
>     totalPrice - 总价
>     voucherId - 优惠券Id，没有使用就为0
>     remark - 备注
>     orderType - 订单类型。0表示到付，1表示微信支付
>     buyCar - 购物车
> 输出：
> 
>     Int - 取餐号
> 例：
> 
>     成功：{"ret":0,"msg":"提交订单成功","data":1}
>     失败：{"ret":1,"msg":"提交订单失败，用户不存在"}

cancelorder 取消订单
> URL：/microsite/order/cancelorder
> 
> 输入：
> 
>     orderId - 订单号
> 输出：无
> 
> 例：
>     
>     成功：{"ret":0,"msg":"取消订单成功"}
>     失败：{"ret":1,"msg":"取消订单失败，订单不存在"}

reorder 重新下单
> URL：/microsite/order/reorder
> 
> 输入：
> 
>     orderId - 订单号
> 输出：无
> 
> 例：
>     
>     成功：{"ret":0,"msg":"重新下单成功"}
>     失败：{"ret":2,"msg":"重新下单失败，不是已取消的订单"}

pay 支付
> **暂未完成**

###dishes(/dishes)###
- - - 

alldishestype 获取菜品分类
> URL：/microsite/dishes/alldishestype
> 
> 输入：无
> 
> 输出：
> 
>     Map - 菜品类别与名称的映射
> 例：
> 
>     成功：{"ret":0,"msg":"获取菜品分类成功","data":{"0":"炒菜","1":"盖烧饭","2":"商务套餐","3":"配菜饮料"}}
>     失败：暂无实例

allrecommandtype 获取推荐分类
> URL：/microsite/dishes/allrecommandtype
>  
> 输入：
> 
>     restaurantId - 店铺Id
> 输出：
> 
>     Map - 推荐类别与名称的映射
> 例：
> 
>     成功：{"ret":0,"msg":"获取推荐分类成功","data":{"0":"不推荐","1":"新品菜","2":"精品菜"}}
>     失败：暂无实例

alldishes 获取当前所在店铺的全量菜品列表
> URL：/microsite/dishes/alldishes
> 
> 输入：
> 
>     restaurantId - 店铺Id
> 输出：
> 
>     Array - 全量菜品列表
> 例：
> 
>     成功：{"ret":0,"msg":"获取全部菜品成功","data":[{"desc":" ","discount":1,"id":3,"name":"乱炖","picture":"/","price":4,"recommand":0,"sales":7,"typeId":3},{"desc":" ","discount":1,"id":2,"name":"炒鸡蛋","picture":"/","price":3,"recommand":2,"sales":5,"typeId":2},{"desc":" ","discount":1,"id":1,"name":"好菜","picture":"/","price":3,"recommand":1,"sales":3,"typeId":1}]}
>     失败：{"ret":1,"msg":"获取全部菜品失败，店铺不存在"}

###buycar(/buycar)###
- - -

clearbuycar 清空购物车
> URL：/microsite/buycar/clearbuycar
> 
> 输入：
> 
>     userId - 用户Id
> 输出：无
> 
> 例：
> 
>     成功：{"ret":0,"msg":"清空购物车成功"}
>     失败：{"ret":1,"msg":"清空购物车失败，当前用户不存在"}

buycardata 获取购物车数据
> URL：/microsite/buycar/buycardata/{userId}
> 
> 方法：GET
> 
> 输入：
> 
>     userId - 用户Id
> 
> 输出：
> 
>     Map - 购物车数据：包括名称(dishes)，各菜品的数量(count)，各菜品单价(price)，总数量(totalCount)，总价(totalPrice)
> 例：
> 
>     成功：{"ret":0,"msg":"获取购物车数据成功","data":{"total":2,"car":{"1":2},"totalPrice":6,"price":{"1":3},"dishes":{"1":"好菜"}}}
>     失败：{"ret":1,"msg":"获取购物车数据失败，当前用户不存在"}

adddishes 购物车+1
> URL：/microsite/buycar/adddishes
> 
> 输入：
> 
>     userId - 用户Id
>     dishesId - 菜品Id
> 输出：
>     
>     Map - 购物车数据：包括名称(dishes)，各菜品的数量(count)，各菜品单价(price)，总数量(totalCount)，总价(totalPrice)
> 例：
> 
>     成功：{"ret":0,"msg":"购物车+1成功","data":{"total":1,"car":{"1":1},"totalPrice":3,"price":{"1":3},"dishes":{"1":"好菜"}}}
>     失败：{"ret":1,"msg":"购物车+1失败，当前用户不存在"}

minusdishes 购物车-1
> URL：/microsite/buycar/minusdishes
> 
> 输入：
> 
>     userId - 用户Id
>     dishesId - 菜品Id
> 输出：
>     
>     Map - 包括名称(dishes)，各菜品的数量(count)，各菜品单价(price)，总数量(totalCount)，总价(totalPrice)
> 例：
> 
>     成功：{"ret":0,"msg":"购物车-1成功","data":{"total":2,"car":{"1":2},"totalPrice":6,"price":{"1":3},"dishes":{"1":"好菜"}}}
>     失败：{"ret":3,"msg":"购物车-1失败，购物车中没有当前菜品"}

validatedishes 购物车菜品验证
> URL：/microsite/buycar/validatedishes
> 
> 输入：
> 
>     userId - 用户Id
> 输出：
> 
>     Array - 当前店铺不存在的菜品Id列表
> 例：
> 
>     成功：{"ret":0,"msg":"购物车验证成功","data":[1]}
>     失败：{"ret":1,"msg":"购物车验证失败，当前用户不存在"}

###User(/user)###
- - -

userinfo 根据openId获取用户信息
> URL：/microsite/user/userinfo
> 
> 输入：
> 
>     openId - 用户openId
> 输出：
> 
>     Map - 用户信息的映射表
> 
> 例：
> 
>     成功：{"ret":0,"msg":"获取用户信息成功","data":{"black":false,"buyCar":"{\"1\":2}","distributionId":3,"expireTime":1430499200,"id":1,"openId":123,"restaurantId":2,"tel":"13133333333","validateCode":"111111"}}
>     失败：{"ret":1,"msg":"获取用户信息失败，用户不存在"}

changedistribution 获取所有取餐点
> URL：/microsite/user/alldistribution
> 
> 输入：
> 
>     userId - 用户Id
>     dishtributionId - 取餐点Id
> 
> 输出：无
> 
> 例：
> 
>     成功：{"ret":0,"msg":"修改取餐点成功"}
>     失败：{"ret":2,"msg":"修改取餐点失败，取餐点不存在"}

changedistribution 修改取餐点
> URL：/microsite/user/changedistribution
> 
> 输入：
> 
>     userId - 用户Id
>     dishtributionId - 取餐点Id
> 
> 输出：无
> 
> 例：
> 
>     成功：{"ret":0,"msg":"修改取餐点成功"}
>     失败：{"ret":2,"msg":"修改取餐点失败，取餐点不存在"}

sendvalidatecode 发送验证码
> **暂未完成**
> 
> URL：/microsite/user/sendvalidatecode 
> 
> 输入：
> 
>     userId - 用户Id
>     tel - 手机号
> 
> 输出：无
> 
> 例：
> 
>     成功：{"ret":0,"msg":"发送验证码成功"}
>     失败：{"ret":1,"msg":"发送验证码失败，用户不存在"}

updatetel 修改手机号
> URL：/microsite/user/updatetel
> 
> 输入：
> 
>     userId - 用户Id
>     tel - 手机号
>     validateCode - 验证码
> 
> 输出：无
> 
> 例：
> 
>     成功：{"ret":0,"msg":"修改手机号成功"}
>     失败：{"ret":2,"msg":"修改手机号失败，验证码错误或过期"}

voucherstatus 获取优惠券状态列表
> URL：/microsite/user/voucherstatus
> 
> 输入：无
> 
> 输出：
> 
>     Map - 优惠券状态Id与名称的映射
> 例：
> 
>     成功：{"ret":0,"msg":"获取优惠券状态列表成功","data":{"0":"未使用","1":"已使用","2":"已到期"}}
>     失败：暂无实例

allvoucher 获取优惠券
> URL：/microsite/user/allvoucher
> 
> 输入：
> 
>     userId - 用户Id
> 
> 输出：
> 
>     Array - 优惠券列表
> 例：
> 
>     成功：{"ret":0,"msg":"获取优惠券成功","data":[{"createTime":"2012-01-01 12:00:00.0","desc":" ","endTime":"2012-01-01 12:00:00.0","id":111111,"status":0,"useTime":"2012-01-01 12:00:00.0","userId":1}]}
>     失败：{"ret":1,"msg":"获取优惠券失败，用户不存在"}

###Restaurant(/restaurant)###
- - -

status 获取店铺状态
> URL：/microsite/restaurant/status
> 
> 输入：
> 
>     restaurantId - 店铺Id 
> 输出：
> 
>     Boolean - 店铺是否处于开张状态
> 例：
> 
>     成功：{"ret":0,"msg":"获取店铺状态成功","data":false}
>     失败：{"ret":1,"msg":"获取店铺状态失败：店铺不存在"}

##Android(/android)##
android控制端接口
###Admin(/admin)###
- - -

tokenlogin 使用token登录
> URL：/android/admin/tokenlogin
> 
> 输入：
> 
> 		adminId - 管理员Id
> 		token - 令牌
> 输出：
> 
> 		Map - 用户的基本信息，包括id，登录名，店铺Id，和新的token
> 例：
> 
> 		成功：{"ret":0,"msg":"令牌登录成功","data":{"loginName":"admin","adminId":1,"restaurantId":1,"token":"22520759790285157171296062465462493209328405948431"}}
> 		失败：{"ret":2,"msg":"令牌登录失败，令牌无效或者已过期"}

login 使用用户名和密码登录
> URL：/android/admin/login
> 
> 输入：
> 
> 		loginName - 用户名
> 		password - 密码
> 
> 输出：
> 
> 		Map - 用户的基本信息，包括id，登录名，店铺Id，和新的token
> 例：
> 
> 		成功：{"ret":0,"msg":"登录成功","data":{"loginName":"admin","adminId":1,"restaurantId":1,"token":"22520759790285157171296062465462493209328405948431"}}
> 		失败：{"ret":2,"msg":"登录失败，密码不正确"}

logout 用户注销
> URL：/android/admin/logout
> 
> 输入：
> 
> 		adminId - 管理员Id
> 输出：
> 
> 		无
> 例：
> 
> 		成功：{"ret":0,"msg":"注销成功"}
> 		失败：{"ret":1,"msg":"注销失败，管理员不存在"}

###Order(/order)###
- - -

neworderlist 新订单列表
> URL：/android/order/neworderlist
> 
> 输入：
> 
> 		restaurantId - 店铺Id
> 输出：
> 
> 		List - 新订单列表
> 
> 例：
> 
> 		成功：{"ret":0,"msg":"获取新订单列表成功","data":[{"createTime":"2015-05-03 12:15:15.0","dishes":"1111","distributionId":1,"hasPaid":true,"orderId":1,"orderType":0,"remarks":"32223","restaurantId":1,"status":0,"takeNo":111,"totalPrice":213,"updateTime":"2015-05-03 12:15:15.0","userId":1,"voucherId":4444}]}
> 		失败：{"ret":1,"msg":"获取新订单列表失败，店铺不存在"}

deliveryorderlist 配送订单列表
> URL：/android/order/neworderlist
> 
> 输入：
> 
> 		restaurantId - 店铺Id
> 输出：
> 
> 		List - 配送订单列表
> 
> 例：
> 
> 		成功：{"ret":0,"msg":"获取配送订单列表成功","data":[{"createTime":"2015-05-06 23:01:12.0","dishes":"{1:1,2:2}","distributionId":1,"hasPaid":false,"orderId":2,"orderType":1,"remarks":"测试","restaurantId":1,"status":1,"takeNo":1,"totalPrice":1,"updateTime":"2015-05-06 23:01:12.0","userId":1,"voucherId":1111}]}
> 		失败：{"ret":1,"msg":"获取配送订单列表失败，店铺不存在"}

completeorderlist 完成订单列表
> URL：/android/order/neworderlist
> 
> 输入：
> 
> 		restaurantId - 店铺Id
> 输出：
> 
> 		List - 完成订单列表
> 
> 例：
> 
> 		成功：{"ret":0,"msg":"获取完成订单列表成功","data":[{"createTime":"2015-05-03 12:15:15.0","dishes":"1111","distributionId":1,"hasPaid":true,"orderId":1,"orderType":0,"remarks":"32223","restaurantId":1,"status":2,"takeNo":111,"totalPrice":213,"updateTime":"2015-05-07 23:23:01.0","userId":1,"voucherId":4444}]}
> 		失败：{"ret":1,"msg":"获取完成订单列表失败，店铺不存在"}

cancelorderlist 取消订单列表
> URL：/android/order/neworderlist
> 
> 输入：
> 
> 		restaurantId - 店铺Id
> 输出：
> 
> 		List - 取消订单列表
> 例：
> 
> 		成功：{"ret":0,"msg":"获取取消订单列表成功","data":[]}
> 		失败：{"ret":1,"msg":"获取取消订单列表失败，店铺不存在"}

order2new	订单状态置为新
> URL：/android/order/order2new
> 
> 输入：
> 
> 		orderId - 订单Id
> 输出：
> 
> 		Map - 订单详情
> 例：
> 
> 		成功：{"ret":0,"msg":"订单置为新订单成功","data":{"createTime":"2015-05-03 12:15:15.0","dishes":"1111","distributionId":1,"hasPaid":true,"orderId":1,"orderType":0,"remarks":"32223","restaurantId":1,"status":0,"takeNo":111,"totalPrice":213,"updateTime":"2015-05-07 23:28:19","userId":1,"voucherId":4444}}
> 		失败：{"ret":1,"msg":"订单置为新订单失败，订单不存在"}

order2delivery 订单状态置为已配送
> URL：/android/order/order2delivery
> 
> 输入：
> 
> 		orderId - 订单Id
> 输出：
> 
> 		Map - 订单详情
> 
> 例：
> 
> 		成功：{"ret":0,"msg":"订单置为配送订单成功","data":{"createTime":"2015-05-03 12:15:15.0","dishes":"1111","distributionId":1,"hasPaid":true,"orderId":1,"orderType":0,"remarks":"32223","restaurantId":1,"status":1,"takeNo":111,"totalPrice":213,"updateTime":"2015-05-07 23:29:15","userId":1,"voucherId":4444}}
> 		失败：{"ret":1,"msg":"订单置为配送订单失败，订单不存在"}

order2complete 订单状态置为已完成
> URL：/android/order/order2complete
> 
> 输入：
> 
> 		orderId - 订单Id
> 输出：
> 
> 		Map - 订单详情
> 例：
> 
> 		成功：{"ret":0,"msg":"订单置为完成订单成功","data":{"createTime":"2015-05-03 12:15:15.0","dishes":"1111","distributionId":1,"hasPaid":true,"orderId":1,"orderType":0,"remarks":"32223","restaurantId":1,"status":2,"takeNo":111,"totalPrice":213,"updateTime":"2015-05-07 23:23:01","userId":1,"voucherId":4444}}
> 		失败：{"ret":1,"msg":"订单置为完成订单失败，订单不存在"}

##Web(/web)##
后台系统接口