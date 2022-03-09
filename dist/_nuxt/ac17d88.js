(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{319:function(t,e,n){"use strict";e.a={getAllEmail:function(t){return t.get("/username")},getAllEmailAd:function(t){return t.get("/all/username")},getAccount:function(t){return t.get("/accounts")},getByIdAccount:function(t,e){return t.get("/account/".concat(e))},editAccount:function(t,data){return t.put("/account/update",data)},deleteAccount:function(t,e){return t.delete("/account/".concat(e))},postAccount:function(t){return t.post("/account/signup")},postAccountAdmin:function(t){return t.post("/admin/signup")},getCategories:function(t){return t.get("/categories")},getByIdCategory:function(t,e){return t.get("/category/".concat(e))},getFixLink:function(t){return t.get("/fixLinks")},getByIdFixLink:function(t,e){return t.get("/fixLink/{id}")},getInfoAccount:function(t){return t.get("/infoAccounts")},getByIdInfoAccount:function(t,e){return t.get("/infoAccount/{id}")},getLinkProducts:function(t){return t.get("/linkProducts")},getByIdLinkProducts:function(t,e){return t.get("/linkProduct/{id}")},getProducts:function(t){return t.get("/products")},getByIdProducts:function(t,e){return t.get("/product/".concat(e))},getTop4Product:function(t){return t.get("/products/new")},getProductByIdCategory:function(t,e){return t.get("/products/".concat(e))},getProductBySearch:function(t,e){return t.get("/productsearch/".concat(e))},postAddProduct:function(t,data){return t.$post("/product",data)},putProduct:function(t){return t.put("/product/update")},deleteProduct:function(t,e){return t.delete("/product/".concat(e))},getPurcharsed:function(t){return t.get("/purcharsed")},getByIdPurcharsed:function(t,e){return t.get("/purcharsed/{id}")},getRecharges:function(t){return t.get("/recharges")},getByIdRecharges:function(t,e){return t.get("/recharge/{id}")},getRequest:function(t){return t.get("/requests")},getByIdRequest:function(t,e){return t.get("/request/{id}")},getData:function(t){return t.get("/api/Catalog/customes")}}},353:function(t,e,n){var content=n(377);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(50).default)("220a100c",content,!0,{sourceMap:!1})},376:function(t,e,n){"use strict";n(353)},377:function(t,e,n){var r=n(49)(!1);r.push([t.i,".scoll{width:905px;height:400px;overflow-x:hidden;overflow-y:auto;overflow-block:auto}.size-form{margin-right:10%}.color-text-1{color:#26ff09}.color-text-2{color:#fff}",""]),t.exports=r},399:function(t,e,n){"use strict";n.r(e);var r=n(17),c=(n(51),n(320)),o=n.n(c),l=n(319),d={layout:"admin",middleware:"authAdmin",data:function(){return{listManager:[]}},created:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.Managerlist();case 2:case"end":return e.stop()}}),e)})))()},methods:{Managerlist:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.a.getProducts(t.$axios);case 3:n=e.sent,data=n.data,t.listManager=data.products,e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()},OnDelete:function(t){var e=this,n=o.a.mixin({customClass:{confirmButton:"btn btn-success",cancelButton:"btn btn-danger"},buttonsStyling:!1});n.fire({title:"Bạn chắn chắn muốn xóa",text:"Dữ liệu không thể khôi phục!",icon:"warning",showCancelButton:!0,confirmButtonText:"Xóa luôn!",cancelButtonText:"Thôi em rút lui!",reverseButtons:!0}).then((function(r){r.isConfirmed?(l.a.deleteProduct(e.$axios,t),n.fire("Đã xóa thành công!","Sản phẩm đã được tiễn về ông bà!","success"),e.$router.push("admin/product/manager"),e.$router.go()):r.dismiss===o.a.DismissReason.cancel&&n.fire("Thôi không xóa nữa","Sản phẩm của bạn còn ở đấy","error")}))}}},f=(n(376),n(36)),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"table-wrapper"},[n("link",{attrs:{href:"https://cdn.jsdelivr.net/npm/@mdi/font@6.x/css/materialdesignicons.min.css",rel:"stylesheet"}}),t._v(" "),t._m(0),t._v(" "),n("form",[n("div",{staticClass:"scoll"},[n("div",{staticClass:"size-form"},[n("table",{staticClass:"table table-striped table-hover"},[t._m(1),t._v(" "),n("tbody",t._l(t.listManager,(function(e,r){return n("tr",{key:r},[n("td",{staticClass:"color-text-2"},[t._v(t._s(e.ID_Product))]),t._v(" "),n("td",{staticClass:"color-text-2"},[t._v(t._s(e.Name))]),t._v(" "),n("td",{staticClass:"color-text-2"},[t._v("\n                  "+t._s(e.Game_genre)+"\n                ")]),t._v(" "),n("td",{staticClass:"color-text-2",staticStyle:{"text-align":"center"}},[t._v("\n                  "+t._s(e.Point_Rare)+"\n                ")]),t._v(" "),n("td",[n("a",{staticClass:"edit",attrs:{href:"","data-toggle":"modal"}},[n("router-link",{attrs:{to:{path:"./edit/"+e.ID_Product,params:{idProd:e.ID_Product}}}},[n("i",{staticClass:"material-icons",attrs:{"data-toggle":"tooltip",title:"Edit"}},[t._v("\n                        ✍\n                      ")])])],1),t._v(" "),n("a",{staticClass:"delete",attrs:{href:""},on:{click:function(n){return n.preventDefault(),t.OnDelete(e.ID_Product)}}},[n("i",{staticStyle:{color:"red"}},[t._v(" ✘ ")])])])])})),0)])])])]),t._v(" "),t._m(2)])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"table-title"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm-6",staticStyle:{color:"red"}},[n("h2",[t._v("Manage "),n("b",[t._v("Product")])])]),t._v(" "),n("div",{staticClass:"col-sm-6"},[n("a",{staticClass:"btn btn-success",attrs:{href:"http://localhost:3000/admin/product/add","data-toggle":"modal"}},[n("i",{staticClass:"material-icons"},[t._v("")]),t._v(" "),n("span",[t._v("Add New Product")])])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",{staticClass:"fixer"},[n("tr",[n("th",{staticClass:"color-text-1"},[t._v("ID")]),t._v(" "),n("th",{staticClass:"color-text-1"},[t._v("Tên game")]),t._v(" "),n("th",{staticClass:"color-text-1"},[t._v("Thể loại")]),t._v(" "),n("th",{staticClass:"color-text-1"},[t._v("Điểm đánh giá")]),t._v(" "),n("th",{staticClass:"color-text-1"},[t._v("Actions")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{attrs:{href:"http://localhost:3000/admin"}},[n("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[t._v("Back to home")])])}],!1,null,null,null);e.default=component.exports}}]);