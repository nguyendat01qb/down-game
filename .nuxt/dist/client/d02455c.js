(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{330:function(t,n,e){"use strict";n.a={getAllEmail:function(t){return t.get("/username")},getAllEmailAd:function(t){return t.get("/all/username")},getAccount:function(t){return t.get("/accounts")},getByIdAccount:function(t,n){return t.get("/account/".concat(n))},editAccount:function(t,data){return t.put("/account/update",data)},deleteAccount:function(t,n){return t.delete("/account/".concat(n))},postAccount:function(t){return t.post("/account/signup")},postAccountAdmin:function(t){return t.post("/admin/signup")},getCategories:function(t){return t.get("/categories")},getByIdCategory:function(t,n){return t.get("/category/".concat(n))},getFixLink:function(t){return t.get("/fixLinks")},getByIdFixLink:function(t,n){return t.get("/fixLink/{id}")},getInfoAccount:function(t){return t.get("/infoAccounts")},getByIdInfoAccount:function(t,n){return t.get("/infoAccount/{id}")},getLinkProducts:function(t){return t.get("/linkProducts")},getByIdLinkProducts:function(t,n){return t.get("/linkProduct/{id}")},getProducts:function(t){return t.get("/products")},getByIdProducts:function(t,n){return t.get("/product/".concat(n))},getTop4Product:function(t){return t.get("/products/new")},getProductByIdCategory:function(t,n){return t.get("/products/".concat(n))},getProductBySearch:function(t,n){return t.get("/productsearch/".concat(n))},postAddProduct:function(t,data){return t.$post("/product",data)},putProduct:function(t){return t.put("/product/update")},deleteProduct:function(t,n){return t.delete("/product/".concat(n))},getPurcharsed:function(t){return t.get("/purcharsed")},getByIdPurcharsed:function(t,n){return t.get("/purcharsed/{id}")},getRecharges:function(t){return t.get("/recharges")},getByIdRecharges:function(t,n){return t.get("/recharge/{id}")},getRequest:function(t){return t.get("/requests")},getByIdRequest:function(t,n){return t.get("/request/{id}")},getData:function(t){return t.get("/api/Catalog/customes")}}},369:function(t,n,e){var content=e(398);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(53).default)("1b7833da",content,!0,{sourceMap:!1})},397:function(t,n,e){"use strict";e(369)},398:function(t,n,e){var o=e(52)(!1);o.push([t.i,'.color-bl{background-color:#3e3c41}router-link{text-decoration:none}.container-general{width:90%!important;margin:1% auto auto}.imgpr{height:380px;width:240px}.slider{position:relative}.slider .mota{color:#000;width:30%;background-size:cover;margin-left:70%;margin-top:10%;background-color:rgba(0,0,0,.466);font-size:17px!important}.rslides{position:relative;list-style:none;overflow:hidden;padding:0;margin:0}.rslides div.slid{-webkit-backface-visibility:hidden;width:100%;left:0;top:0}.rslides img{display:block;height:auto;float:left;width:100%;border:0}.caption{width:100%;margin-top:16em}.banner-info{position:absolute;z-index:99;top:100px;left:0;right:0}.caption{text-align:center;top:90px;position:absolute}.caption h3{color:#fff;font-size:2.8em;font-family:"Play-Bold"}.caption p{line-height:1.8em;font-size:1em;font-weight:400;color:#fff;width:60%;margin:1em auto 0}.banner1{background:url(https://i.ytimg.com/vi/tEX3tGBKerk/maxresdefault.jpg) no-repeat 0 0;background-size:cover;min-height:550px;position:relative}.callbacks_tabs a:after{content:"\\f111";font-size:0;font-family:FontAwesome;visibility:visible;display:block;height:15px;width:15px;display:inline-block;border-radius:50%;-webkit-border-radius:50%;-moz-border-radius:50%;-o-border-radius:50%;-ms-border-radius:50%;background:#69d2e8;border:2px solid #fff}.callbacks_here a:after{background:#d52f47}.callbacks_tabs a{visibility:hidden}.callbacks_tabs li{display:inline-block}ul.callbacks_tabs.callbacks1_tabs{position:absolute;bottom:50px;z-index:999;left:46%}.background{background-color:#1b1d1e!important}.nk-decorated-h,.nk-decorated-h-2{display:flex}.nk-decorated-h-2:after,.nk-decorated-h-2:before,.nk-decorated-h:after,.nk-decorated-h:before{content:"";display:block;flex:10;border-bottom:4px solid;transform:translateY(-10px)}.nk-gap-2{height:50px}.nk-news-box{height:425px;overflow:hidden;background-color:#575a68;border:1px solid #293139;border-radius:4px}.nk-news-box .nk-news-box-each-info,.nk-news-box .nk-news-box-list{float:left;width:50%;height:100%}.nk-news-box .nk-news-box-item{padding:10px;cursor:pointer;transition:color .15s,background-color .15s}.nk-news-box .nk-news-box-item:after{content:"";display:block;clear:both}.nk-news-box .nk-news-box-item+.nk-news-box-item{border-top:1px solid #a6b8ca}.nk-news-box .nk-news-box-item.hover,.nk-news-box .nk-news-box-item:hover{background-color:#408bd6}.nk-news-box .nk-news-box-item.nk-news-box-item-active{color:#fff;background-color:#dd163b}.nk-news-box .nk-news-box-item .nk-news-box-item-img{float:left;width:100px;margin-right:20px;overflow:hidden}.nk-news-box .nk-news-box-item .nk-news-box-item-img img{width:100%;height:auto;transition:transform .15s ease-in-out;transform:scale(1);will-change:transform}.nk-news-box .nk-news-box-item:hover .nk-news-box-item-img img{transform:scale(1.05)}.nk-news-box .nk-news-box-item .nk-news-box-item-categories,.nk-news-box .nk-news-box-item .nk-news-box-item-full-img,.nk-news-box .nk-news-box-item .nk-news-box-item-url{display:none}.nk-news-box .nk-news-box-item .nk-news-box-item-title{margin-top:5px;margin-bottom:2px;font-size:1.1rem}.nk-news-box .nk-news-box-item .nk-news-box-item-text,.nk-news-box .nk-news-box-item .nk-news-box-item-text p,.nk-news-box .nk-news-box-item .nk-news-box-item-title{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.nk-news-box .nk-news-box-item .nk-news-box-item-text{max-height:25px;margin-bottom:13px}.nk-news-box .nk-news-box-item .nk-news-box-item-text p{margin:0}.nk-news-box .nk-news-box-item .nk-news-box-item-date{margin-top:5px;font-size:.9em}.nk-news-box .nk-news-box-item .nk-news-box-item-date span{margin-right:6px;font-size:1rem}.nk-news-box .nk-news-box-each-info{border-left:1px solid #293139}.nk-news-box .nk-news-box-each-info .nano-content{padding:20px}.nk-news-box .nk-news-box-each-info .nk-news-box-item-categories{position:absolute;top:10px;right:0;margin-top:6px;font-size:1rem}.nk-news-box .nk-news-box-each-info .nk-news-box-item-categories span{padding:2px 19px;color:#fff;background-color:#38a220;border-top-left-radius:4px;border-bottom-left-radius:4px}.nk-news-box .nk-news-box-each-info .nk-news-box-item-image{margin:-20px -20px 20px;background-position:50%;background-size:cover}.nk-news-box .nk-news-box-each-info .nk-news-box-item-image img{width:100%;height:auto}.nk-news-box .nk-news-box-each-info .nk-news-box-item-image[style*=background]{padding-top:41.2%}.nk-news-box .nk-news-box-each-info .nk-news-box-item-title{margin-bottom:15px;font-size:1.2rem}.nk-news-box .nk-news-box-each-info .nk-news-box-item-more{font-weight:600;text-transform:uppercase}.nk-news-box .nk-news-box-each-info .nk-news-box-item-date{float:right;margin-top:5px;font-size:.9em}.nk-news-box .nk-news-box-each-info .nk-news-box-item-date span{margin-right:6px;font-size:1rem}@media (max-width:767px){.nk-news-box{height:720px}.nk-news-box .nk-news-box-each-info,.nk-news-box .nk-news-box-list{float:none;width:100%}.nk-news-box .nk-news-box-each-info{height:400px;border-left:0}.nk-news-box .nk-news-box-list{height:320px}.nk-news-box .nk-news-box-list .nk-news-box-item-img{width:60px}.nk-news-box .nk-news-box-list .nk-news-box-item-date{display:none}}.text-name{color:#fff;font-weight:650}.text-name1{color:red!important;font-size:17px}img.profile-photo-lg{height:80px;width:80px;border-radius:70%}.img_style{height:150px}.min-size-img{min-width:250px;min-height:200px}.min-size-Gamegenre{min-width:100px;min-height:50px}.min-size-Name{min-width:100px;min-height:60px}.rate-inner{background-color:#293139;border-color:#101215;padding:7px 15px;font-size:12px;line-height:1.5;height:40px;border-radius:4px;font-weight:600;text-transform:uppercase;transition:all .15s;cursor:pointer}.text-white{margin-top:5px;color:#fff!important}.progress-bar.bg-danger{background-color:#dd163b!important}.progress{margin-top:9px;height:8px;background-color:#484e54}.rate-inner,.view-btn{background-color:#141313;border-color:#568374;padding:7px 15px;font-size:12px;line-height:1.5;height:60px;border-radius:4px;font-weight:800;text-transform:uppercase;transition:all .15s;cursor:pointer}.view-btn{display:inline-flex;justify-content:center;align-items:center;width:140px}.view-btn a{text-decoration:unset}.view-btn:hover{background-color:#dd163b}.game-info{display:flex;justify-content:space-between;align-items:center;margin-top:4px}',""]),t.exports=o},415:function(t,n,e){"use strict";e.r(n);var o=e(19),r=(e(54),e(330)),c={layout:"default",data:function(){return{listProducts:[]}},mounted:function(){this.idCate=this.$route.params.idProd},created:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.getAllProducts();case 2:case"end":return n.stop()}}),n)})))()},methods:{getAllProducts:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var e,data;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,r.a.getProducts(t.$axios);case 3:e=n.sent,data=e.data,t.listProducts=data.products,n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))()}}},l=(e(397),e(38)),component=Object(l.a)(c,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("main",[e("div",{staticClass:"cotainer-general"},[e("div",{staticClass:"container"},[t._m(0),t._v(" "),t._m(1),t._v(" "),e("div",{staticClass:"nk-gap-2"}),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),e("div",{staticClass:"nk-gap-2"}),t._v(" "),e("div",{staticClass:"row"},t._l(t.listProducts,(function(n,o){return e("div",{key:o,staticClass:"col-12 col-md-4 mb-3 text-center"},[e("div",{staticClass:"card mb-4 shadow-sm"},[e("router-link",{staticClass:"text-decoration",attrs:{to:{path:"./show/"+n.ID_Product,params:{idProd:n.ID_Product}}}},[e("div",{staticClass:"color-bl card-body img-style"},[e("p",[e("img",{staticClass:"img-fluid min-size-img",attrs:{src:n.Image_1,alt:""}})]),t._v(" "),e("h4",{staticClass:"text-name my-0 font-weight-normal min-size-Name"},[t._v("\n                "+t._s(n.Name)+"\n              ")]),t._v(" "),e("p",{staticStyle:{}},[t._v(" Thể Loại:\n              ")]),e("h1",{staticClass:"text-name1 min-size-Gamegenre"},[t._v("\n                "+t._s(n.Game_genre)+"\n              ")]),t._v(" "),e("p"),t._v(" "),e("div",[e("div",{staticClass:"game-info"},[e("router-link",{attrs:{to:{path:"./show/"+n.ID_Product,params:{idProd:n.ID_Product}}}},[e("div",{staticClass:"view-btn"},[e("router-link",{staticClass:"text-white",attrs:{to:{path:"./show/"+n.ID_Product,params:{idProd:n.ID_Product}}}},[t._v("Tải Game\n                    ")])],1)]),t._v(" "),e("div",{staticClass:"rate-inner"},[e("div",{staticClass:"text-white"},[t._v("ĐÁNH GIÁ "+t._s(n.Point_Rare)+" ĐIỂM\n                    ")]),t._v(" "),e("div",{staticClass:"progress"},[e("div",{staticClass:"progress-bar bg-danger",style:"width:"+n.Point_Rare+"%",attrs:{"aria-valuenow":""+n.Point_Rare,"aria-valuemax":"100","aria-valuemin":"0",role:"progressbar"}})])])],1)])])])],1)])})),0)])])])}),[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"slider"},[e("div",{staticClass:"callbacks_container"},[e("ul",{staticClass:"rslides",attrs:{id:"slider"}},[e("div",{staticClass:"slid banner1"},[e("p",[t._v("vogame.pro")]),t._v(" "),e("div",{staticClass:"caption"},[e("div",{staticClass:"hnc-caption"},[e("div",{staticClass:"nano-content"},[e("h3",{staticClass:"h4"},[t._v("The Death")]),t._v(" "),e("p",{staticClass:"text-white"},[t._v("Nội Dung Game: Thần Trùng | The Death là trò chơi phiêu lưu kinh dị tâm lý\n                      do 3 người Việt phát triển. Game lấy bối cảnh thành phố Hà Nội năm thập niên 90")]),t._v(" "),e("a",{staticClass:"nk-btn nk-btn-rounded nk-btn-color-white nk-btn-hover-color-main-1",attrs:{href:"https://store.steampowered.com/app/1726400/The_Death__Thn_Trng/"}},[t._v("Xem thêm")])])])])])])]),t._v(" "),e("div",{staticClass:"nk-gap-2"})])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("h3",{staticClass:"nk-decorated-h-2",attrs:{h3:""}},[e("span",{staticStyle:{color:"white"}},[e("span",{staticClass:"text-main-1",staticStyle:{color:"red"}},[t._v("GAMES")]),t._v(" MỚI")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"container"},[e("div",{staticClass:"nk-news-box"},[e("div",{staticClass:"nk-news-box-list"},[e("div",{staticClass:"nano has-scrollbar"},[e("div",{staticClass:"nano-content",staticStyle:{right:"-16px"},attrs:{tabindex:"0"}},[e("div",{staticClass:"nk-news-box-item nk-news-box-item-active"},[e("div",{staticClass:"nk-news-box-item-img"},[e("img",{staticClass:"nk-news-box-item-img",attrs:{alt:"Forza Horizon 5 Online",src:"https://daominhha.com/wp-content/uploads/2021/11/download-forza-horizon-5-full-crack-daominhha2-380x214.jpg"}})]),t._v(" "),e("img",{staticClass:"nk-news-box-item-full-img no-lazyload",attrs:{alt:"Forza Horizon 5 Online",src:"https://daominhha.com/wp-content/uploads/2021/11/download-forza-horizon-5-full-crack-daominhha2.jpg"}}),t._v(" "),e("h3",{staticClass:"nk-news-box-item-title"},[e("a",{staticClass:"text-white",attrs:{href:""}},[t._v("Forza Horizon 5 Online")])]),t._v(" "),e("span",{staticClass:"nk-news-box-item-categories"},[e("span",{staticClass:"bg-main-5",staticStyle:{"background-color":"#dd3333 !important"}},[t._v("Chào mừng bạn đến với trang web\n                    ")])]),t._v(" "),e("div",{staticClass:"nk-news-box-item-text"},[e("p",[t._v("Giới thiệu game Forza Horizon 5 Tải game Forza Horizon 5 miễn phí link Google Drive tốc độ cao\n                      | Free download Forza Horizon 5 full crack PC Cuộc phiêu lưu đường chân trời cuối cùng của bạn\n                      đang chờ ...")])]),t._v(" "),e("a",{staticClass:"nk-news-box-item-url",attrs:{href:""}},[t._v("Xem bài này")]),t._v(" "),e("div",{staticClass:"nk-news-box-item-date"},[e("i",{staticClass:"fas fa-calendar-alt mr-3"}),t._v("06/11/2021")])]),t._v(" "),e("div",{staticClass:"nk-news-box-item"},[e("div",{staticClass:"nk-news-box-item-img"},[e("img",{staticClass:"nk-news-box-item-img",attrs:{alt:"Age of Empires IV Online",src:"https://daominhha.com/wp-content/uploads/2021/10/download-age-of-empires-4-full-crack-daominhha-380x214.jpg"}})]),t._v(" "),e("img",{staticClass:"nk-news-box-item-full-img no-lazyload",attrs:{alt:"Age of Empires IV Online",src:"https://daominhha.com/wp-content/uploads/2021/10/download-age-of-empires-4-full-crack-daominhha.jpg"}}),t._v(" "),e("h3",{staticClass:"nk-news-box-item-title"},[e("a",{staticClass:"text-white",attrs:{href:""}},[t._v("Age of Empires IV Online")])]),t._v(" "),e("span",{staticClass:"nk-news-box-item-categories"},[e("span",{staticClass:"bg-main-5",staticStyle:{"background-color":"#81d742 !important"}},[t._v("GAME HOT")])]),t._v(" "),e("div",{staticClass:"nk-news-box-item-text"},[e("p",[t._v("Giới thiệu game Age of Empires IV Online Tải game Age of Empires IV Online miễn phí link Google\n                      Drive tốc độ cao | Free download Age of Empires IV Online full crack PC Một trong những trò chơi\n                      chiến ...")])]),t._v(" "),e("a",{staticClass:"nk-news-box-item-url",attrs:{href:""}},[t._v("Xem bài này")]),t._v(" "),e("div",{staticClass:"nk-news-box-item-date"},[e("i",{staticClass:"fas fa-calendar-alt mr-3"}),t._v("29/10/2021")])]),t._v(" "),e("div",{staticClass:"nk-news-box-item"},[e("div",{staticClass:"nk-news-box-item-img"},[e("img",{staticClass:"nk-news-box-item-img",attrs:{alt:"Sword and Fairy 7 – Tiên Kiếm Kỳ Hiệp Truyện 7",src:"https://daominhha.com/wp-content/uploads/2021/10/download-Sword-and-Fairy-7-full-crack-daominhha-380x214.jpg"}})]),t._v(" "),e("img",{staticClass:"nk-news-box-item-full-img no-lazyload",attrs:{alt:"Sword and Fairy 7 – Tiên Kiếm Kỳ Hiệp Truyện 7",src:"https://daominhha.com/wp-content/uploads/2021/10/download-Sword-and-Fairy-7-full-crack-daominhha.jpg"}}),t._v(" "),e("h3",{staticClass:"nk-news-box-item-title"},[e("a",{staticClass:"text-white",attrs:{href:""}},[t._v("Sword and Fairy 7 – Tiên Kiếm Kỳ Hiệp\n                    Truyện 7")])]),t._v(" "),e("span",{staticClass:"nk-news-box-item-categories"},[e("span",{staticClass:"bg-main-5",staticStyle:{"background-color":"#dd3333 !important"}},[t._v("Update v1.0.8")])]),t._v(" "),e("div",{staticClass:"nk-news-box-item-text"},[e("p",[t._v("Giới thiệu game Sword and Fairy 7 - Tiên Kiếm Kỳ Hiệp Truyện 7 Tải game Sword and Fairy 7 miễn\n                      phí link Google Drive tốc độ cao | Free download Sword and Fairy 7 full crack PC “Swords and\n                      ...")])]),t._v(" "),e("a",{staticClass:"nk-news-box-item-url",attrs:{href:""}},[t._v("Xem bài này")]),t._v(" "),e("div",{staticClass:"nk-news-box-item-date"},[e("i",{staticClass:"fas fa-calendar-alt mr-3"}),t._v("20/10/2021")])]),t._v(" "),e("div",{staticClass:"nk-news-box-item"},[e("div",{staticClass:"nk-news-box-item-img"},[e("img",{staticClass:"nk-news-box-item-img",attrs:{alt:"Humankind",src:"https://daominhha.com/wp-content/uploads/2021/03/Tai-mien-phi-Humankind-full-crack-Daominhha-380x200.jpg"}})]),t._v(" "),e("img",{staticClass:"nk-news-box-item-full-img no-lazyload",attrs:{alt:"Humankind",src:"https://daominhha.com/wp-content/uploads/2021/03/Tai-mien-phi-Humankind-full-crack-Daominhha.jpg"}}),t._v(" "),e("h3",{staticClass:"nk-news-box-item-title"},[e("a",{staticClass:"text-white",attrs:{href:""}},[t._v("Humankind")])]),t._v(" "),e("span",{staticClass:"nk-news-box-item-categories"},[e("span",{staticClass:"bg-main-5",staticStyle:{"background-color":"#dd3333 !important"}},[t._v("UPDATE DLC")])]),t._v(" "),e("div",{staticClass:"nk-news-box-item-text"},[e("p",[t._v("GIỚI THIỆU GAME HUMANKIND Tải game Humankind miễn phí link Google Drive tốc độ cao | Free\n                      download game Humankind full crack PC Amplitude, studio đứng sau Endless Space và Endless\n                      Legend, đang tạo ra một trò chơi 4X lịch ...")])]),t._v(" "),e("a",{staticClass:"nk-news-box-item-url",attrs:{href:""}},[t._v("Xem bài này")]),t._v(" "),e("div",{staticClass:"nk-news-box-item-date"},[e("i",{staticClass:"fas fa-calendar-alt mr-3"}),t._v("12/03/2021")])]),t._v(" "),e("div",{staticClass:"nk-news-box-item"},[e("div",{staticClass:"nk-news-box-item-img"},[e("img",{staticClass:"nk-news-box-item-img",attrs:{alt:"Alan Wake Collectors Edition Việt Hóa",src:"https://daominhha.com/wp-content/uploads/2020/12/668c29a416dba4a030547179927b8d8abf3bc473fa642c743f05020480598180_product_card_v2_mobile_slider_639-2-380x215.jpg"}})]),t._v(" "),e("img",{staticClass:"nk-news-box-item-full-img no-lazyload",attrs:{alt:"Alan Wake Collectors Edition Việt Hóa",src:"https://daominhha.com/wp-content/uploads/2020/12/668c29a416dba4a030547179927b8d8abf3bc473fa642c743f05020480598180_product_card_v2_mobile_slider_639-2.jpg"}}),t._v(" "),e("h3",{staticClass:"nk-news-box-item-title"},[e("a",{staticClass:"text-white",attrs:{href:"https://daominhha.com/alan-wake-collectors-edition-viet-hoa/"}},[t._v("Alan Wake\n                    Collectors Edition Việt Hóa")])]),t._v(" "),e("span",{staticClass:"nk-news-box-item-categories"},[e("span",{staticClass:"bg-main-5",staticStyle:{"background-color":"#dd163b !important"}},[t._v("UPDATE LINK")])]),t._v(" "),e("div",{staticClass:"nk-news-box-item-text"},[e("p",[t._v("Giới thiệu game Alan Wake Collectors Edition Việt Hóa Tải game Alan Wake Collectors Edition\n                      Việt Hóa miễn phí link Google Drive | Free download Alan Wake Collectors Edition Việt Hóa full\n                      crack PC Alan Wake là tựa game kinh ...")])]),t._v(" "),e("a",{staticClass:"nk-news-box-item-url",attrs:{href:""}},[t._v("Xem\n                    bài này")]),t._v(" "),e("div",{staticClass:"nk-news-box-item-date"},[e("i",{staticClass:"fas fa-calendar-alt mr-3"}),t._v("06/04/2019")])])]),t._v(" "),e("div",{staticClass:"nano-pane"},[e("div",{staticClass:"nano-slider",staticStyle:{height:"324px",transform:"translate(0px, 98.8248px)"}})])])]),t._v(" "),e("div",{staticClass:"nk-news-box-each-info"},[e("div",{staticClass:"nano has-scrollbar"},[e("div",{staticClass:"nano-content",staticStyle:{right:"-16px"},attrs:{tabindex:"0"}},[e("div",{staticClass:"nk-news-box-item-image",staticStyle:{"background-image":'url("https://daominhha.com/wp-content/uploads/2021/11/download-forza-horizon-5-full-crack-daominhha2.jpg")'}},[e("span",{staticClass:"nk-news-box-item-categories"},[e("span",{staticClass:"bg-main-5",staticStyle:{"background-color":"#dd3333 !important"}},[t._v("Chào mừng bạn đến với trang web")])])]),t._v(" "),e("h3",{staticClass:"nk-news-box-item-title"},[e("a",{staticClass:"text-white",attrs:{href:""}},[t._v("Forza Horizon 5 Online")])]),t._v(" "),e("div",{staticClass:"nk-news-box-item-text"},[e("p",[t._v("Giới thiệu game Forza Horizon 5 Tải game Forza Horizon 5 miễn phí link Google Drive tốc độ cao |\n                    Free download Forza Horizon 5 full crack PC Cuộc phiêu lưu đường chân trời cuối cùng của bạn đang\n                    chờ ...")])]),t._v(" "),e("a",{staticClass:"nk-news-box-item-more",attrs:{href:" "}},[t._v("Xem bài này")]),t._v(" "),e("div",{staticClass:"nk-news-box-item-date"},[e("i",{staticClass:"fas fa-calendar-alt mr-3"}),t._v("06/11/2021")])]),t._v(" "),e("div",{staticClass:"nano-pane",staticStyle:{display:"none"}},[e("div",{staticClass:"nano-slider",staticStyle:{height:"408px",transform:"translate(0px, 0px)"}})])])])]),t._v(" "),e("div",{staticClass:"nk-gap-2"})])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("h3",{staticClass:"nk-decorated-h-2",attrs:{h3:""}},[e("span",{staticStyle:{color:"white"}},[e("span",{staticClass:"text-main-1",staticStyle:{color:"red"}},[t._v("GAMES")]),t._v(" DOWNLOAD")])])}],!1,null,null,null);n.default=component.exports}}]);