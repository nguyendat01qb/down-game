exports.ids = [15];
exports.modules = {

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/signin.vue?vue&type=template&id=fca3d0ec&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_vm._ssrNode("<div class=\"d-flex justify-content-center h-100\"><div class=\"card\"><div class=\"card-header\"><h3>Đăng nhập</h3> <div class=\"d-flex justify-content-end social_icon\"><span><i class=\"fab fa-facebook-square\"></i></span> <span><i class=\"fab fa-google-plus-square\"></i></span> <span><i class=\"fab fa-twitter-square\"></i></span></div></div> <div class=\"card-body\"><form><div class=\"input-group form-group\"><div class=\"input-group-prepend\"><span class=\"input-group-text\"><i class=\"fas fa-user\"></i></span></div> <input type=\"text\" placeholder=\"email\""+(_vm._ssrAttr("value",(_vm.form.Email)))+" class=\"form-control color-ip\"></div> <div class=\"input-group form-group\"><div class=\"input-group-prepend\"><span class=\"input-group-text\"><i class=\"fas fa-key\"></i></span></div> <input type=\"password\" placeholder=\"password\""+(_vm._ssrAttr("value",(_vm.form.Password)))+" class=\"form-control color-ip\"></div> <div class=\"row align-items-center remember\"><input type=\"checkbox\">Nhớ tài khoản\n          </div> <button type=\"submit\" class=\"btn float-right login_btn\">\n            Đăng nhập\n          </button></form></div> <div class=\"card-footer\"><div class=\"d-flex justify-content-center links\">\n          Chưa có tài khoản?<a href=\"http://localhost:3000/signup\">Đăng ký</a></div> <div class=\"d-flex justify-content-center\"><a href=\"#\">Quên mật khẩu</a></div></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/signin.vue?vue&type=template&id=fca3d0ec&

// EXTERNAL MODULE: external "sweetalert2"
var external_sweetalert2_ = __webpack_require__(51);
var external_sweetalert2_default = /*#__PURE__*/__webpack_require__.n(external_sweetalert2_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/signin.vue?vue&type=script&lang=js&
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
/* harmony default export */ var signinvue_type_script_lang_js_ = ({layout:'none',middleware:"auth",auth:"guest",data(){return{form:{Email:null,Password:null}};},methods:{async login(){const data={Email:this.form.Email,Password:this.form.Password};try{const res=await this.$axios.$post('/account/signin',data).then(()=>{this.$auth.loginWith('local',{data:{Email:this.form.Email,Password:this.form.Password}});});console.log(res);this.form.Email=null;this.form.Password=null;// console.log('Login successfully!')
const Toast=external_sweetalert2_default.a.mixin({toast:true,position:'top-end',showConfirmButton:false,timer:3000,timerProgressBar:true,didOpen:toast=>{toast.addEventListener('mouseenter',external_sweetalert2_default.a.stopTimer);toast.addEventListener('mouseleave',external_sweetalert2_default.a.resumeTimer);}});Toast.fire({icon:'success',title:'Signed in successfully'});this.$router.push('/signup');}catch(error){alert("Tài khoản hoặc mật khẩu không đúng!");}}// test() {
//   const Toast = Swal.mixin({
//     toast: true,
//     position: 'top-end',
//     showConfirmButton: false,
//     timer: 3000,
//     timerProgressBar: true,
//     didOpen: (toast) => {
//       toast.addEventListener('mouseenter', Swal.stopTimer)
//       toast.addEventListener('mouseleave', Swal.resumeTimer)
//     },
//   })
//   Toast.fire({
//     icon: 'success',
//     title: 'Signed in successfully',
//   })
// },
}});
// CONCATENATED MODULE: ./pages/signin.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_signinvue_type_script_lang_js_ = (signinvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/signin.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(77)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_signinvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "d61bf8da"
  
)

/* harmony default export */ var signin = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(78);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("0c5f9ed0", content, true, context)
};

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_signin_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_signin_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_signin_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_signin_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_signin_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 78:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".container{height:100%;align-content:center}.color-ip{background-color:#b1c8d3}.card{height:370px;margin-top:auto;margin-bottom:auto;width:400px;background-color:rgba(0,0,0,.5)!important}.social_icon span{font-size:60px;margin-left:10px;color:#ffc312}.social_icon span:hover{color:#fff;cursor:pointer}.card-header h3{color:#fff}.social_icon{position:absolute;right:20px;top:-45px}.input-group-prepend span{width:50px;background-color:#ffc312;color:#000;border:0!important}input:focus{outline:0 0 0 0!important;box-shadow:0 0 0 0!important}.remember{color:#fff}.remember input{width:20px;height:20px;margin-left:15px;margin-right:5px}.login_btn{color:#000;background-color:#ffc312;width:100px}.login_btn:hover{color:#000;background-color:#fff}.links{color:#fff}.links a{margin-left:4px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=signin.js.map