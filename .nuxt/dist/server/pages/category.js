exports.ids = [12];
exports.modules = {

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/category.vue?vue&type=template&id=29c5ef3a&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('main',[_vm._ssrNode("<div class=\"cotainer-general\" data-v-29c5ef3a>","</div>",[_vm._ssrNode("<div class=\"container\" data-v-29c5ef3a>","</div>",[_vm._ssrNode("<div class=\"slider\" data-v-29c5ef3a><div class=\"nk-gap-2\" data-v-29c5ef3a></div></div> <div typeof=\"BreadcrumbList\" vocab=\"https://schema.org/\" class=\"breadcrumbs\" data-v-29c5ef3a><span property=\"itemListElement\" typeof=\"ListItem\" data-v-29c5ef3a><a property=\"item\" typeof=\"WebPage\" title href=\"http://localhost:3000/\" class=\"home\" data-v-29c5ef3a><span property=\"name\" data-v-29c5ef3a>Trang chủ</span></a><meta property=\"position\" content=\"1\" data-v-29c5ef3a></span> <span property=\"itemListElement\" typeof=\"ListItem\" data-v-29c5ef3a><span property=\"name\" class=\"archive taxonomy category current-item\" data-v-29c5ef3a>&gt;</span> <a property=\"item\" typeof=\"WebPage\" title class=\"home\" data-v-29c5ef3a><span property=\"name\" data-v-29c5ef3a>Category</span></a></span></div> <h3 h3 class=\"nk-decorated-h-2\" data-v-29c5ef3a><span data-v-29c5ef3a><span class=\"text-main-1\" style=\"color:#ec4464\" data-v-29c5ef3a>DANH MỤC THEO</span> CATEGORY</span></h3> <div class=\"nk-gap-2\" data-v-29c5ef3a></div> "),_vm._ssrNode("<div class=\"row\" data-v-29c5ef3a>","</div>",_vm._l((_vm.listProduct),function(products,index){return _vm._ssrNode("<div class=\"col-12 col-md-4 mb-3 text-center\" data-v-29c5ef3a>","</div>",[_vm._ssrNode("<div class=\"card mb-4 shadow-sm\" data-v-29c5ef3a>","</div>",[_vm._ssrNode("<div class=\"color-bl card-body img-style\" data-v-29c5ef3a>","</div>",[_vm._ssrNode("<p data-v-29c5ef3a><img"+(_vm._ssrAttr("src",products.Image_1))+" alt class=\"img-fluid min-size-img\" data-v-29c5ef3a></p> <h4 class=\"text-name my-0 font-weight-normal min-size-Name\" data-v-29c5ef3a>"+_vm._ssrEscape("\n                "+_vm._s(products.Name)+"\n              ")+"</h4> <p style=\"overflow-y \" data-v-29c5ef3a> Thể Loại:\n              </p><h1 class=\"text-name1 min-size-Gamegenre\" data-v-29c5ef3a>"+_vm._ssrEscape("\n                "+_vm._s(products.Game_genre)+"\n              ")+"</h1> <p data-v-29c5ef3a></p> "),_vm._ssrNode("<div data-v-29c5ef3a>","</div>",[_vm._ssrNode("<div class=\"game-info\" data-v-29c5ef3a>","</div>",[_vm._ssrNode("<div class=\"view-btn\" data-v-29c5ef3a>","</div>",[_c('nuxt-link',{staticClass:"text-white",attrs:{"to":{name: 'detail' , params: {id: products.ID_Product}}}},[_vm._v("Tải Game\n                    ")])],1),_vm._ssrNode(" <div class=\"rate-inner\" data-v-29c5ef3a><div class=\"text-white\" data-v-29c5ef3a>"+_vm._ssrEscape("ĐÁNH GIÁ "+_vm._s(products.Point_Rare)+" ĐIỂM\n                    ")+"</div> <div class=\"progress\" data-v-29c5ef3a><div"+(_vm._ssrAttr("aria-valuenow",'' +  products.Point_Rare + ''))+" aria-valuemax=\"100\" aria-valuemin=\"0\" role=\"progressbar\" class=\"progress-bar bg-danger\""+(_vm._ssrStyle(null,'width:' + products.Point_Rare + '%', null))+" data-v-29c5ef3a></div></div></div>")],2)])],2)])])}),0)],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/category.vue?vue&type=template&id=29c5ef3a&scoped=true&

// EXTERNAL MODULE: ./api/catalogApi.js
var catalogApi = __webpack_require__(53);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/category.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var categoryvue_type_script_lang_js_ = ({data(){return{listProduct:[]};},async created(){await this.ProductById();},methods:{async ProductById(){try{const{data}=await catalogApi["a" /* default */].getProductByIdCategory(this.$axios,this.$route.params.id);this.listProduct=data.product;console.log(data);// data lay json tu server gom success message productdetail T .productDetail laf lay rieng detail thoi
// success message ko ke
}catch(err){console.log(err);}}}});
// CONCATENATED MODULE: ./pages/category.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_categoryvue_type_script_lang_js_ = (categoryvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/category.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(71)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_categoryvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "29c5ef3a",
  "08ca10af"
  
)

/* harmony default export */ var category = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({// get all email
getAllEmail(axios){return axios.get('/username');},getAllEmailAd(axios){return axios.get('/all/username');},// quan ly accout
getAccount(axios){return axios.get('/accounts');},// get acc theo id
getByIdAccount(axios,id){return axios.get(`/account/${id}`);},// sua tai khoan
editAccount(axios,data){return axios.put('/account/update',data);},// xoa tai khoan
deleteAccount(axios,id){return axios.delete(`/account/${id}`);},// tao tai khoan user
postAccount(axios){return axios.post('/account/signup');},// tao tai khoan admin
postAccountAdmin(axios){return axios.post('/admin/signup');},// get all category
getCategories(axios){return axios.get('/categories');},// get category theo id
getByIdCategory(axios,id){return axios.get(`/category/${id}`);},// 
getFixLink(axios){return axios.get('/fixLinks');},//
getByIdFixLink(axios,id){return axios.get(`/fixLink/{id}`);},// get thong tin account
getInfoAccount(axios){return axios.get('/infoAccounts');},getByIdInfoAccount(axios,id){return axios.get(`/infoAccount/{id}`);},getLinkProducts(axios){return axios.get('/linkProducts');},getByIdLinkProducts(axios,id){return axios.get(`/linkProduct/{id}`);},getProducts(axios){return axios.get('/products');},getByIdProducts(axios,id){return axios.get(`/product/${id}`);},getTop4Product(axios){return axios.get('/products/new');},getProductByIdCategory(axios,id){return axios.get(`/products/${id}`);},getProductBySearch(axios,searchkey){return axios.get(`/productsearch/${searchkey}`);},postAddProduct(axios,data){const url='/product';return axios.$post(url,data);},putProduct(axios){return axios.put('/product/update');},deleteProduct(axios,id){return axios.delete(`/product/${id}`);},getPurcharsed(axios){return axios.get('/purcharsed');},getByIdPurcharsed(axios,id){return axios.get(`/purcharsed/{id}`);},getRecharges(axios){return axios.get('/recharges');},getByIdRecharges(axios,id){return axios.get(`/recharge/{id}`);},getRequest(axios){return axios.get('/requests');},getByIdRequest(axios,id){return axios.get(`/request/{id}`);},getData:axios=>axios.get('/api/Catalog/customes')});

/***/ }),

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(72);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("7cf5f8d7", content, true, context)
};

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_category_vue_vue_type_style_index_0_id_29c5ef3a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_category_vue_vue_type_style_index_0_id_29c5ef3a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_category_vue_vue_type_style_index_0_id_29c5ef3a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_category_vue_vue_type_style_index_0_id_29c5ef3a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_category_vue_vue_type_style_index_0_id_29c5ef3a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 72:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".container-general[data-v-29c5ef3a]{width:70%!important;margin:2% auto}.slider[data-v-29c5ef3a]{position:relative}.slider .mota[data-v-29c5ef3a]{color:#000;width:30%;background-size:cover;margin-left:70%;margin-top:10%;background-color:rgba(0,0,0,.466);font-size:17px!important}.rslides[data-v-29c5ef3a]{position:relative;list-style:none;overflow:hidden;padding:0;margin:0}.rslides div.slid[data-v-29c5ef3a]{-webkit-backface-visibility:hidden;width:100%;left:0;top:0}.rslides img[data-v-29c5ef3a]{display:block;height:auto;float:left;width:100%;border:0}.caption[data-v-29c5ef3a]{width:100%;margin-top:16em}.banner-info[data-v-29c5ef3a]{position:absolute;z-index:99;top:100px;left:0;right:0}.caption[data-v-29c5ef3a]{text-align:center;top:90px;position:absolute}.caption h3[data-v-29c5ef3a]{color:#fff;font-size:2.8em;font-family:\"Play-Bold\"}.caption p[data-v-29c5ef3a]{line-height:1.8em;font-size:1em;font-weight:400;color:#fff;width:60%;margin:1em auto 0}.banner1[data-v-29c5ef3a]{background:url(https://i.ytimg.com/vi/tEX3tGBKerk/maxresdefault.jpg) no-repeat 0 0;background-size:cover;min-height:550px;position:relative}.callbacks_tabs a[data-v-29c5ef3a]:after{content:\"\\f111\";font-size:0;font-family:FontAwesome;visibility:visible;display:block;height:15px;width:15px;display:inline-block;border-radius:50%;-webkit-border-radius:50%;-moz-border-radius:50%;-o-border-radius:50%;-ms-border-radius:50%;background:#69d2e8;border:2px solid #fff}.callbacks_here a[data-v-29c5ef3a]:after{background:#d52f47}.callbacks_tabs a[data-v-29c5ef3a]{visibility:hidden}.callbacks_tabs li[data-v-29c5ef3a]{display:inline-block}ul.callbacks_tabs.callbacks1_tabs[data-v-29c5ef3a]{position:absolute;bottom:50px;z-index:999;left:46%}.background[data-v-29c5ef3a]{background-color:#1b1d1e!important}.nk-decorated-h[data-v-29c5ef3a],.nk-decorated-h-2[data-v-29c5ef3a]{display:flex}.nk-decorated-h-2[data-v-29c5ef3a]:after,.nk-decorated-h-2[data-v-29c5ef3a]:before,.nk-decorated-h[data-v-29c5ef3a]:after,.nk-decorated-h[data-v-29c5ef3a]:before{content:\"\";display:block;flex:10;border-bottom:4px solid;transform:translateY(-10px)}.nk-gap-2[data-v-29c5ef3a]{height:50px}.nk-news-box[data-v-29c5ef3a]{height:425px;overflow:hidden;background-color:#232930;border:1px solid #293139;border-radius:4px}.nk-news-box .nk-news-box-each-info[data-v-29c5ef3a],.nk-news-box .nk-news-box-list[data-v-29c5ef3a]{float:left;width:50%;height:100%}.nk-news-box .nk-news-box-item[data-v-29c5ef3a]{padding:10px;cursor:pointer;transition:color .15s,background-color .15s}.nk-news-box .nk-news-box-item[data-v-29c5ef3a]:after{content:\"\";display:block;clear:both}.nk-news-box .nk-news-box-item+.nk-news-box-item[data-v-29c5ef3a]{border-top:1px solid #293139}.nk-news-box .nk-news-box-item.hover[data-v-29c5ef3a],.nk-news-box .nk-news-box-item[data-v-29c5ef3a]:hover{background-color:#293139}.nk-news-box .nk-news-box-item.nk-news-box-item-active[data-v-29c5ef3a]{color:#fff;background-color:#dd163b}.nk-news-box .nk-news-box-item .nk-news-box-item-img[data-v-29c5ef3a]{float:left;width:100px;margin-right:20px;overflow:hidden}.nk-news-box .nk-news-box-item .nk-news-box-item-img img[data-v-29c5ef3a]{width:100%;height:auto;transition:transform .15s ease-in-out;transform:scale(1);will-change:transform}.nk-news-box .nk-news-box-item:hover .nk-news-box-item-img img[data-v-29c5ef3a]{transform:scale(1.05)}.nk-news-box .nk-news-box-item .nk-news-box-item-categories[data-v-29c5ef3a],.nk-news-box .nk-news-box-item .nk-news-box-item-full-img[data-v-29c5ef3a],.nk-news-box .nk-news-box-item .nk-news-box-item-url[data-v-29c5ef3a]{display:none}.nk-news-box .nk-news-box-item .nk-news-box-item-title[data-v-29c5ef3a]{margin-top:5px;margin-bottom:2px;font-size:1.1rem}.nk-news-box .nk-news-box-item .nk-news-box-item-text[data-v-29c5ef3a],.nk-news-box .nk-news-box-item .nk-news-box-item-text p[data-v-29c5ef3a],.nk-news-box .nk-news-box-item .nk-news-box-item-title[data-v-29c5ef3a]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.nk-news-box .nk-news-box-item .nk-news-box-item-text[data-v-29c5ef3a]{max-height:25px;margin-bottom:13px}.nk-news-box .nk-news-box-item .nk-news-box-item-text p[data-v-29c5ef3a]{margin:0}.nk-news-box .nk-news-box-item .nk-news-box-item-date[data-v-29c5ef3a]{margin-top:5px;font-size:.9em}.nk-news-box .nk-news-box-item .nk-news-box-item-date span[data-v-29c5ef3a]{margin-right:6px;font-size:1rem}.nk-news-box .nk-news-box-each-info[data-v-29c5ef3a]{border-left:1px solid #293139}.nk-news-box .nk-news-box-each-info .nano-content[data-v-29c5ef3a]{padding:20px}.nk-news-box .nk-news-box-each-info .nk-news-box-item-categories[data-v-29c5ef3a]{position:absolute;top:10px;right:0;margin-top:6px;font-size:1rem}.nk-news-box .nk-news-box-each-info .nk-news-box-item-categories span[data-v-29c5ef3a]{padding:2px 19px;color:#fff;background-color:#38a220;border-top-left-radius:4px;border-bottom-left-radius:4px}.nk-news-box .nk-news-box-each-info .nk-news-box-item-image[data-v-29c5ef3a]{margin:-20px -20px 20px;background-position:50%;background-size:cover}.nk-news-box .nk-news-box-each-info .nk-news-box-item-image img[data-v-29c5ef3a]{width:100%;height:auto}.nk-news-box .nk-news-box-each-info .nk-news-box-item-image[style*=background][data-v-29c5ef3a]{padding-top:41.2%}.nk-news-box .nk-news-box-each-info .nk-news-box-item-title[data-v-29c5ef3a]{margin-bottom:15px;font-size:1.2rem}.nk-news-box .nk-news-box-each-info .nk-news-box-item-more[data-v-29c5ef3a]{font-weight:600;text-transform:uppercase}.nk-news-box .nk-news-box-each-info .nk-news-box-item-date[data-v-29c5ef3a]{float:right;margin-top:5px;font-size:.9em}.nk-news-box .nk-news-box-each-info .nk-news-box-item-date span[data-v-29c5ef3a]{margin-right:6px;font-size:1rem}@media (max-width:767px){.nk-news-box[data-v-29c5ef3a]{height:720px}.nk-news-box .nk-news-box-each-info[data-v-29c5ef3a],.nk-news-box .nk-news-box-list[data-v-29c5ef3a]{float:none;width:100%}.nk-news-box .nk-news-box-each-info[data-v-29c5ef3a]{height:400px;border-left:0}.nk-news-box .nk-news-box-list[data-v-29c5ef3a]{height:320px}.nk-news-box .nk-news-box-list .nk-news-box-item-img[data-v-29c5ef3a]{width:60px}.nk-news-box .nk-news-box-list .nk-news-box-item-date[data-v-29c5ef3a]{display:none}}.text-name[data-v-29c5ef3a]{color:#fff;font-weight:650}.text-name1[data-v-29c5ef3a]{color:red!important;font-size:17px}img.profile-photo-lg[data-v-29c5ef3a]{height:80px;width:80px;border-radius:70%}.img_style[data-v-29c5ef3a]{height:150px}.min-size-img[data-v-29c5ef3a]{min-width:250px;min-height:200px}.min-size-Gamegenre[data-v-29c5ef3a]{min-width:100px;min-height:50px}.min-size-Name[data-v-29c5ef3a]{min-width:100px;min-height:60px}.rate-inner[data-v-29c5ef3a]{background-color:#293139;border-color:#101215;padding:7px 15px;font-size:12px;line-height:1.5;height:40px;border-radius:4px;font-weight:600;text-transform:uppercase;transition:all .15s;cursor:pointer}.text-white[data-v-29c5ef3a]{margin-top:5px;color:#fff!important}.progress-bar.bg-danger[data-v-29c5ef3a]{background-color:#dd163b!important}.progress[data-v-29c5ef3a]{margin-top:9px;height:8px;background-color:#484e54}.rate-inner[data-v-29c5ef3a],.view-btn[data-v-29c5ef3a]{background-color:#293139;border-color:#101215;padding:7px 15px;font-size:12px;line-height:1.5;height:60px;border-radius:4px;font-weight:800;text-transform:uppercase;transition:all .15s;cursor:pointer}.view-btn[data-v-29c5ef3a]{display:inline-flex;justify-content:center;align-items:center;width:140px}.view-btn a[data-v-29c5ef3a]{text-decoration:unset}.view-btn[data-v-29c5ef3a]:hover{background-color:#dd163b}.game-info[data-v-29c5ef3a]{display:flex;justify-content:space-between;align-items:center;margin-top:4px}.nk-breadcrumbs[data-v-29c5ef3a]{padding:0;margin:0;font-weight:600;color:#fff;text-transform:uppercase;list-style-type:none}.nk-breadcrumbs>li[data-v-29c5ef3a]{display:inline-block;font-size:1.07rem}.nk-breadcrumbs>li+li[data-v-29c5ef3a]{margin-left:6px}.nk-breadcrumbs>li a[data-v-29c5ef3a]{color:inherit;text-decoration:none}.nk-breadcrumbs>li a.hover[data-v-29c5ef3a],.nk-breadcrumbs>li a[data-v-29c5ef3a]:hover{color:#dd163b}.nk-breadcrumbs>li[data-v-29c5ef3a]:last-of-type{display:flex;margin-top:9px;margin-left:0;font-size:2.025rem}.nk-breadcrumbs>li:last-of-type>a[data-v-29c5ef3a],.nk-breadcrumbs>li:last-of-type>span[data-v-29c5ef3a]{display:block;flex:auto;padding-right:20px}.nk-breadcrumbs>li[data-v-29c5ef3a]:last-of-type:after{content:\"\";display:block;flex:100;border-bottom:4px solid #dd163b;transform:translateY(-12px)}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=category.js.map