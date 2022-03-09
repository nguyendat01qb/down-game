exports.ids = [3];
exports.modules = {

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/index.vue?vue&type=template&id=48bfc12f&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"size-bg"},[_vm._ssrNode("<div class=\"bl\"><div class=\"wlcome\"> WELCOME, <span style=\"color:red\">"+_vm._ssrEscape(" "+_vm._s(_vm.$auth.$state.user.user.Email)+" ")+"</span> <p></p></div> <div class=\"row vertical-gap\"><div class=\"col-lg-4\"><div class=\"nk-feature-1\"><div class=\"nk-feature-icon\"><img src=\"https://i.ibb.co/zZ0z6PJ/1-removebg-preview-3.png\" alt=\"Categories Icon\" class=\"size-img\"></div> <div class=\"nk-feature-cont\"><h3 class=\"nk-feature-title\"><a href=\"http://localhost:3000/admin/user/view\">CÁC THÀNH VIÊN</a></h3> <h4 class=\"nk-feature-title text-main-1\"><a href=\"http://localhost:3000/admin/user/view\">Xem thêm</a></h4></div></div></div> <div class=\"col-lg-4\"><div class=\"nk-feature-1\"><div class=\"nk-feature-icon\"><img src=\"https://i.ibb.co/g38mS8L/1-removebg-preview-4.png\" alt=\"Categories Icon\" class=\"size-img\"></div> <div class=\"nk-feature-cont\"><h3 class=\"nk-feature-title\"><a href=\"http://localhost:3000/admin/user/role\">PHÂN QUYỀN</a></h3> <h4 class=\"nk-feature-title text-main-1\"><a href=\"http://localhost:3000/admin/user/role\">Xem thêm</a></h4></div></div></div> <div class=\"col-lg-4\"><div class=\"nk-feature-1\"><div class=\"nk-feature-icon\"><img src=\"https://i.ibb.co/xmjr77v/1-removebg-preview-5.png\" alt=\"Categories Icon\" class=\"size-img\"></div> <div class=\"nk-feature-cont\"><h3 class=\"nk-feature-title\"><a href=\"http://localhost:3000/admin/user/add\">THÊM THÀNH VIÊN ADMIN</a></h3> <h4 class=\"nk-feature-title text-main-1\"><a href=\"http://localhost:3000/admin/user/add\">Xem thêm</a></h4></div></div></div></div> <p></p> <div class=\"prod\"><p> PRODUCTS </p></div> <div class=\"row vertical-gap\"><div class=\"col-lg-4\"><div class=\"nk-feature-1\"><div class=\"nk-feature-icon\"><img src=\"https://i.ibb.co/LRtWkzf/1-removebg-preview-10.png\" alt=\"Categories Icon\" class=\"size-img\"></div> <div class=\"nk-feature-cont\"><h3 class=\"nk-feature-title\"><a href=\"http://localhost:3000/admin/product/add\">THÊM SẢN PHẨM</a></h3> <h4 class=\"nk-feature-title text-main-1\"><a href=\"http://localhost:3000/admin/product/add\">Xem thêm</a></h4></div></div></div> <div class=\"col-lg-4\"><div class=\"nk-feature-1\"><div class=\"nk-feature-icon\"><img src=\"https://i.ibb.co/WPWh5Db/1-removebg-preview-9.png\" alt=\"Categories Icon\" class=\"size-img\"></div> <div class=\"nk-feature-cont\"><h3 class=\"nk-feature-title\"><a href=\"http://localhost:3000/admin/product/manager\">QUẢN LÝ SẢN PHẨM</a></h3> <h4 class=\"nk-feature-title text-main-1\"><a href=\"http://localhost:3000/admin/product/manager\">Xem thêm</a></h4></div></div></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/admin/index.vue?vue&type=template&id=48bfc12f&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/index.vue?vue&type=script&lang=js&
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
/* harmony default export */ var adminvue_type_script_lang_js_ = ({
  layout: 'admin',
  middleware: 'authAdmin'
});
// CONCATENATED MODULE: ./pages/admin/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_adminvue_type_script_lang_js_ = (adminvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/admin/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(69)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_adminvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "a60d7938"
  
)

/* harmony default export */ var admin = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(70);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("10e8a579", content, true, context)
};

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(54);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".size-bg{width:900px;height:500px}.size-img{width:80px}.wlcome{font-size:40px;color:#fff}.prod{font-size:30px;color:#00ff15}.nk-feature-1{background-color:#fff}.nk-feature-1,.nk-feature-2{position:relative;display:flex;align-items:center;width:100%;min-height:120px;padding:10px;border:1px solid #293139;border-radius:4px}.nk-feature-1 .nk-feature-icon,.nk-feature-2 .nk-feature-icon{display:flex;align-items:center;justify-content:center;width:116px;height:50px;padding-right:10px;font-size:3rem;line-height:50px;color:#fff;text-align:center;border-right:1px solid #293139;border-radius:3px}.nk-feature-1 .nk-feature-icon img,.nk-feature-2 .nk-feature-icon img{max-width:100%;height:auto}.nk-feature-1 .nk-feature-cont,.nk-feature-2 .nk-feature-cont{padding-top:8px;padding-left:38px}.nk-feature-2{flex-direction:column}.nk-feature-2 .nk-feature-icon{width:100%;height:auto;padding:20px 0;border:0}.nk-feature-2 .nk-feature-cont{padding-right:20px;padding-bottom:20px;padding-left:20px}.nk-feature-title{margin-bottom:.5rem;font-size:1.25rem}.nk-feature-title a{color:inherit;text-decoration:none}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=index.js.map