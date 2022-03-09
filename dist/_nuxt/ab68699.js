(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{319:function(t,e,r){"use strict";e.a={getAllEmail:function(t){return t.get("/username")},getAllEmailAd:function(t){return t.get("/all/username")},getAccount:function(t){return t.get("/accounts")},getByIdAccount:function(t,e){return t.get("/account/".concat(e))},editAccount:function(t,data){return t.put("/account/update",data)},deleteAccount:function(t,e){return t.delete("/account/".concat(e))},postAccount:function(t){return t.post("/account/signup")},postAccountAdmin:function(t){return t.post("/admin/signup")},getCategories:function(t){return t.get("/categories")},getByIdCategory:function(t,e){return t.get("/category/".concat(e))},getFixLink:function(t){return t.get("/fixLinks")},getByIdFixLink:function(t,e){return t.get("/fixLink/{id}")},getInfoAccount:function(t){return t.get("/infoAccounts")},getByIdInfoAccount:function(t,e){return t.get("/infoAccount/{id}")},getLinkProducts:function(t){return t.get("/linkProducts")},getByIdLinkProducts:function(t,e){return t.get("/linkProduct/{id}")},getProducts:function(t){return t.get("/products")},getByIdProducts:function(t,e){return t.get("/product/".concat(e))},getTop4Product:function(t){return t.get("/products/new")},getProductByIdCategory:function(t,e){return t.get("/products/".concat(e))},getProductBySearch:function(t,e){return t.get("/productsearch/".concat(e))},postAddProduct:function(t,data){return t.$post("/product",data)},putProduct:function(t){return t.put("/product/update")},deleteProduct:function(t,e){return t.delete("/product/".concat(e))},getPurcharsed:function(t){return t.get("/purcharsed")},getByIdPurcharsed:function(t,e){return t.get("/purcharsed/{id}")},getRecharges:function(t){return t.get("/recharges")},getByIdRecharges:function(t,e){return t.get("/recharge/{id}")},getRequest:function(t){return t.get("/requests")},getByIdRequest:function(t,e){return t.get("/request/{id}")},getData:function(t){return t.get("/api/Catalog/customes")}}},351:function(t,e,r){var content=r(373);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(50).default)("3122550c",content,!0,{sourceMap:!1})},372:function(t,e,r){"use strict";r(351)},373:function(t,e,r){var n=r(49)(!1);n.push([t.i,".scoll{width:920px;height:400px;overflow-x:hidden;overflow-y:auto;overflow-block:auto}.size-form{margin-right:10%}.form-group{color:#fff}.input-number{width:180px}",""]),t.exports=n},397:function(t,e,r){"use strict";r.r(e);var n=r(17),o=(r(51),r(320)),c=r.n(o),m=r(319),d={layout:"admin",data:function(){return{dataSubmit:{Name:"",Game_genre:"",Decription:"",Video_Game:"",Free_Space:null,Time_Update:(new Date).toISOString().substr(0,10),Image_1:"",Image_2:"",Image_3:"",Point_Rare:"",Ram:null,OS:"",Languages:"",Player:"",Link_Fshare:"",Link_Vip:"",ID_Category:1},categories:[]}},created:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getCategories();case 2:case"end":return e.stop()}}),e)})))()},methods:{getCategories:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.a.getCategories(t.$axios);case 3:r=e.sent,data=r.data,t.categories=data,e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()},onCreatePost:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return data={Name:t.dataSubmit.Name,Game_genre:t.dataSubmit.Game_genre,Decription:t.dataSubmit.Decription,Video_Game:t.dataSubmit.Video_Game,Free_Space:t.dataSubmit.Free_Space,Time_Update:t.dataSubmit.Time_Update,Image_1:t.dataSubmit.Image_1,Image_2:t.dataSubmit.Image_2,Image_3:t.dataSubmit.Image_3,Point_Rare:t.dataSubmit.Point_Rare,Ram:t.dataSubmit.Ram,OS:t.dataSubmit.OS,Languages:t.dataSubmit.Languages,Player:t.dataSubmit.Player,Link_Fshare:t.dataSubmit.Link_Fshare,Link_Vip:t.dataSubmit.Link_Vip,ID_Category:t.dataSubmit.ID_Category},e.prev=1,e.next=4,t.$axios.$post("/product",data);case 4:c.a.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0,didOpen:function(t){t.addEventListener("mouseenter",c.a.stopTimer),t.addEventListener("mouseleave",c.a.resumeTimer)}}).fire({icon:"success",title:"Added product successfully"}),console.log(t.$router),t.$router.push("/admin"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})))()}}},l=(r(372),r(36)),component=Object(l.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"size-bg"},[r("form",[r("div",{staticClass:"scoll"},[r("div",{staticClass:"size-form"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:""}},[t._v(" Tên sản phẩm ")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.dataSubmit.Name,expression:"dataSubmit.Name"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Nhập tên sản phẩm..."},domProps:{value:t.dataSubmit.Name},on:{input:function(e){e.target.composing||t.$set(t.dataSubmit,"Name",e.target.value)}}})]),t._v(" "),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:""}},[t._v(" Thể loại ")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.dataSubmit.Game_genre,expression:"dataSubmit.Game_genre"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Nhập thể loại sản phẩm..."},domProps:{value:t.dataSubmit.Game_genre},on:{input:function(e){e.target.composing||t.$set(t.dataSubmit,"Game_genre",e.target.value)}}}),t._v(" "),r("div",{staticClass:"form-group",staticStyle:{width:"200px"}},[r("label",{attrs:{for:""}},[t._v(" Danh Mục ")]),t._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:t.dataSubmit.ID_Category,expression:"dataSubmit.ID_Category"}],staticClass:"form-control",attrs:{name:""},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.dataSubmit,"ID_Category",e.target.multiple?r:r[0])}}},t._l(t.categories,(function(e,n){return r("option",{key:n,domProps:{value:e.ID_Category}},[t._v("\n                "+t._s(e.Name)+"\n              ")])})),0)])]),t._v(" "),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:""}},[t._v(" URL Video ")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.dataSubmit.Video_Game,expression:"dataSubmit.Video_Game"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Nhập vào URL Video..."},domProps:{value:t.dataSubmit.Video_Game},on:{input:function(e){e.target.composing||t.$set(t.dataSubmit,"Video_Game",e.target.value)}}})]),t._v(" "),r("div",{staticClass:"form-group input-number"},[r("label",{attrs:{for:""}},[t._v(" Dung lượng ")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.dataSubmit.Free_Space,expression:"dataSubmit.Free_Space"}],staticClass:"form-control",attrs:{type:"number",placeholder:"Dung lượng game tối thiểu?"},domProps:{value:t.dataSubmit.Free_Space},on:{input:function(e){e.target.composing||t.$set(t.dataSubmit,"Free_Space",e.target.value)}}})]),t._v(" "),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:""}},[t._v(" URL Avatar ")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.dataSubmit.Image_1,expression:"dataSubmit.Image_1"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Nhập vào URL Avatar game"},domProps:{value:t.dataSubmit.Image_1},on:{input:function(e){e.target.composing||t.$set(t.dataSubmit,"Image_1",e.target.value)}}})]),t._v(" "),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:""}},[t._v(" URL Ảnh mô tả 1 ")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.dataSubmit.Image_2,expression:"dataSubmit.Image_2"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Nhập vào URL hình ảnh giới thiệu game"},domProps:{value:t.dataSubmit.Image_2},on:{input:function(e){e.target.composing||t.$set(t.dataSubmit,"Image_2",e.target.value)}}})]),t._v(" "),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:""}},[t._v(" URL Ảnh mô tả 2 ")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.dataSubmit.Image_3,expression:"dataSubmit.Image_3"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Nhập vào URL hình ảnh giới thiệu game"},domProps:{value:t.dataSubmit.Image_3},on:{input:function(e){e.target.composing||t.$set(t.dataSubmit,"Image_3",e.target.value)}}})]),t._v(" "),r("div",{staticClass:"form-group input-number"},[r("label",{attrs:{for:""}},[t._v(" Yêu cầu Ram tối thiểu ")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.dataSubmit.Ram,expression:"dataSubmit.Ram"}],staticClass:"form-control",attrs:{type:"number",placeholder:"Yêu cầu Ram tối thiểu?"},domProps:{value:t.dataSubmit.Ram},on:{input:function(e){e.target.composing||t.$set(t.dataSubmit,"Ram",e.target.value)}}})]),t._v(" "),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:""}},[t._v(" Hệ điều hành ")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.dataSubmit.OS,expression:"dataSubmit.OS"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Hệ điều hành chạy được game?"},domProps:{value:t.dataSubmit.OS},on:{input:function(e){e.target.composing||t.$set(t.dataSubmit,"OS",e.target.value)}}})]),t._v(" "),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:""}},[t._v(" Ngôn ngữ ")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.dataSubmit.Languages,expression:"dataSubmit.Languages"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Ngôn ngữ của game..."},domProps:{value:t.dataSubmit.Languages},on:{input:function(e){e.target.composing||t.$set(t.dataSubmit,"Languages",e.target.value)}}})]),t._v(" "),r("div",{staticClass:"form-group input-number"},[r("label",{attrs:{for:""}},[t._v(" Số người chơi ")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.dataSubmit.Player,expression:"dataSubmit.Player"}],staticClass:"form-control",attrs:{type:"number",placeholder:"Số người có thể tương tác được"},domProps:{value:t.dataSubmit.Player},on:{input:function(e){e.target.composing||t.$set(t.dataSubmit,"Player",e.target.value)}}})]),t._v(" "),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:""}},[t._v(" Đường dẫn tải game bằng Fshare ")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.dataSubmit.Link_Fshare,expression:"dataSubmit.Link_Fshare"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Nhập vào URL đường dẫn tải game Fshare"},domProps:{value:t.dataSubmit.Link_Fshare},on:{input:function(e){e.target.composing||t.$set(t.dataSubmit,"Link_Fshare",e.target.value)}}})]),t._v(" "),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:""}},[t._v(" Đường dẫn tải game trực tiếp ")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.dataSubmit.Link_Vip,expression:"dataSubmit.Link_Vip"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Nhập vào URL tải game trực tiếp"},domProps:{value:t.dataSubmit.Link_Vip},on:{input:function(e){e.target.composing||t.$set(t.dataSubmit,"Link_Vip",e.target.value)}}})]),t._v(" "),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:""}},[t._v(" Mô tả ")]),t._v(" "),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.dataSubmit.Decription,expression:"dataSubmit.Decription"}],staticClass:"form-control",attrs:{type:"text",placeholder:"abcd...",rows:"8"},domProps:{value:t.dataSubmit.Decription},on:{input:function(e){e.target.composing||t.$set(t.dataSubmit,"Decription",e.target.value)}}})])])]),t._v(" "),r("p",[t._v(" ")]),t._v(" "),r("button",{staticClass:"btn btn-primary",on:{click:function(e){return e.preventDefault(),t.onCreatePost.apply(null,arguments)}}},[t._v("Lưu")])])])}),[],!1,null,null,null);e.default=component.exports}}]);