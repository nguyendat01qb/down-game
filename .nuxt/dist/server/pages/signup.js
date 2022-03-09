exports.ids = [16];
exports.modules = {

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/signup.vue?vue&type=template&id=d6d34156&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_vm._ssrNode("<div class=\"d-flex justify-content-center h-100\"><div class=\"card\"><div class=\"card-header\"><h3>Sign Up</h3> <div class=\"d-flex justify-content-end social_icon\"><span><i class=\"fab fa-facebook-square\"></i></span> <span><i class=\"fab fa-google-plus-square\"></i></span> <span><i class=\"fab fa-twitter-square\"></i></span></div></div> <div class=\"card-body\"><form><div class=\"input-group form-group\"><div class=\"input-group-prepend\"><span class=\"input-group-text\"><i class=\"fas fa-user\"></i></span></div> <input id=\"email\" type=\"text\" placeholder=\"email\""+(_vm._ssrAttr("value",(_vm.form.email)))+" class=\"form-control color-ip\"> "+((_vm.$v.form.email.$error)?("<div class=\"form-error\">"+((!_vm.$v.form.email.required)?("<span class=\"help is-danger\" style=\"color:red\"> \n              vui lòng nhập email </span>"):"<!---->")+" "+((!_vm.$v.form.email.emailValidator)?("<span class=\"help is-danger\" style=\"color:red\">\n              email không hợp lệ!\n            </span>"):"<!---->")+"</div>"):"<!---->")+"</div> <div class=\"input-group form-group\"><div class=\"input-group-prepend\"><span class=\"input-group-text\"><i class=\"fas fa-key\"></i></span></div> <input id=\"phone\" type=\"text\" placeholder=\"phone number\""+(_vm._ssrAttr("value",(_vm.form.phone)))+" class=\"form-control color-ip\"> "+((_vm.$v.form.phone.$error)?("<div class=\"form-error\">"+((!_vm.$v.form.phone.required)?("<span class=\"help is-danger\" style=\"color:red\"> \n              vui lòng nhập SDT </span>"):"<!---->")+" "+((!_vm.$v.form.phone.maxLength)?("<span class=\"help is-danger\" style=\"color:red\">\n              SDT dưới 10\n            </span>"):"<!---->")+"</div>"):"<!---->")+"</div> <div class=\"input-group form-group\"><div class=\"input-group-prepend\"><span class=\"input-group-text\"><i class=\"fas fa-key\"></i></span></div> <input id=\"password\" type=\"password\" placeholder=\"password\""+(_vm._ssrAttr("value",(_vm.form.password)))+" class=\"form-control color-ip\"> "+((_vm.$v.form.password.$error)?("<div class=\"form-error\">"+((!_vm.$v.form.password.required)?("<span class=\"help is-danger\" style=\"color:red\"> \n              vui lòng nhập Mật khẩu </span>"):"<!---->")+" "+((!_vm.$v.form.password.minLength)?("<span class=\"help is-danger\" style=\"color:red\">\n              Mật khẩu phải &gt;6!\n            </span>"):"<!---->")+"</div>"):"<!---->")+"</div> <div class=\"input-group form-group\"><div class=\"input-group-prepend\"><span class=\"input-group-text\"><i class=\"fas fa-key\"></i></span></div> <input id=\"re_password\" type=\"password\" placeholder=\"re-password\""+(_vm._ssrAttr("value",(_vm.form.re_password)))+" class=\"form-control color-ip\"> "+((_vm.$v.form.re_password.$error)?("<div class=\"form-error\">"+((!_vm.$v.form.re_password.sameAs)?("<span class=\"help is-danger\" style=\"color:red\">\n              Mật khẩu không trùng khớp\n            </span>"):"<!---->")+"</div>"):"<!---->")+"</div> <button"+(_vm._ssrAttr("disabled",_vm.$v.form.$invalid))+" type=\"submit\" class=\"btn float-right login_btn\">\n            Đăng ký\n          </button></form></div> <div class=\"card-footer\"><div class=\"d-flex justify-content-center links\">\n          Quay lại \n          <a href=\"http://localhost:3000/signin\">Đăng nhập</a></div></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/signup.vue?vue&type=template&id=d6d34156&

// EXTERNAL MODULE: external "vuelidate/lib/validators"
var validators_ = __webpack_require__(52);

// EXTERNAL MODULE: external "sweetalert2"
var external_sweetalert2_ = __webpack_require__(51);
var external_sweetalert2_default = /*#__PURE__*/__webpack_require__.n(external_sweetalert2_);

// EXTERNAL MODULE: ./api/catalogApi.js
var catalogApi = __webpack_require__(53);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/signup.vue?vue&type=script&lang=js&
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



/* harmony default export */ var signupvue_type_script_lang_js_ = ({
  middleware: "auth",
  auth: "guest",

  data() {
    return {
      form: {
        email: null,
        phone: null,
        password: null,
        re_password: null,
        Date: new Date().toISOString().substr(0, 10)
      },
      listEmail: []
    };
  },

  validations: {
    form: {
      email: {
        required: validators_["required"],
        emailValidator: validators_["email"]
      },
      password: {
        required: validators_["required"],
        minLength: Object(validators_["minLength"])(6)
      },
      phone: {
        required: validators_["required"],
        maxLength: Object(validators_["maxLength"])(10)
      },
      re_password: {
        sameAs: Object(validators_["sameAs"])('password')
      }
    }
  },

  async created() {
    await this.AllListEmail();
  },

  computed: {
    isFormValid() {
      return !this.$v.form.$invalid;
    }

  },
  methods: {
    async AllListEmail() {
      try {
        const {
          data
        } = await catalogApi["a" /* default */].getAllEmail(this.$axios);
        this.listEmail = data.accs;
        console.log(this.listEmail);
      } catch (err) {
        console.log(err);
      }
    },

    // eslint-disable-next-line require-await
    async onClickEmail() {
      if (this.listEmail.length === this.form.email) {
        console.log("Email da ton tai");
      }
    },

    async register() {
      const data = {
        Email: this.form.email,
        Phone: this.form.phone,
        Password: this.form.password,
        CreateAt: this.form.Date
      };

      try {
        const res = await this.$axios.$post('/account/signup', data);
        console.log(res); // console.log('Signup successfully!')

        const Toast = external_sweetalert2_default.a.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: toast => {
            toast.addEventListener('mouseenter', external_sweetalert2_default.a.stopTimer);
            toast.addEventListener('mouseleave', external_sweetalert2_default.a.resumeTimer);
          }
        });
        Toast.fire({
          icon: 'success',
          title: 'Signed up successfully'
        });
        console.log(this.$router);
        this.$router.push('/signin');
      } catch (error) {
        console.log(error);
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/signup.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_signupvue_type_script_lang_js_ = (signupvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/signup.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(79)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_signupvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "acef4bee"
  
)

/* harmony default export */ var signup = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  // get all email
  getAllEmail(axios) {
    return axios.get('/username');
  },

  getAllEmailAd(axios) {
    return axios.get('/all/username');
  },

  // quan ly accout
  getAccount(axios) {
    return axios.get('/accounts');
  },

  // get acc theo id
  getByIdAccount(axios, id) {
    return axios.get(`/account/${id}`);
  },

  // sua tai khoan
  editAccount(axios, data) {
    return axios.put('/account/update', data);
  },

  // xoa tai khoan
  deleteAccount(axios, id) {
    return axios.delete(`/account/${id}`);
  },

  // tao tai khoan user
  postAccount(axios) {
    return axios.post('/account/signup');
  },

  // tao tai khoan admin
  postAccountAdmin(axios) {
    return axios.post('/admin/signup');
  },

  // get all category
  getCategories(axios) {
    return axios.get('/categories');
  },

  // get category theo id
  getByIdCategory(axios, id) {
    return axios.get(`/category/${id}`);
  },

  // 
  getFixLink(axios) {
    return axios.get('/fixLinks');
  },

  //
  getByIdFixLink(axios, id) {
    return axios.get(`/fixLink/{id}`);
  },

  // get thong tin account
  getInfoAccount(axios) {
    return axios.get('/infoAccounts');
  },

  getByIdInfoAccount(axios, id) {
    return axios.get(`/infoAccount/{id}`);
  },

  getLinkProducts(axios) {
    return axios.get('/linkProducts');
  },

  getByIdLinkProducts(axios, id) {
    return axios.get(`/linkProduct/{id}`);
  },

  getProducts(axios) {
    return axios.get('/products');
  },

  getByIdProducts(axios, id) {
    return axios.get(`/product/${id}`);
  },

  getTop4Product(axios) {
    return axios.get('/products/new');
  },

  getProductByIdCategory(axios, id) {
    return axios.get(`/products/${id}`);
  },

  getProductBySearch(axios, searchkey) {
    return axios.get(`/productsearch/${searchkey}`);
  },

  postAddProduct(axios, data) {
    const url = '/product';
    return axios.$post(url, data);
  },

  putProduct(axios) {
    return axios.put('/product/update');
  },

  deleteProduct(axios, id) {
    return axios.delete(`/product/${id}`);
  },

  getPurcharsed(axios) {
    return axios.get('/purcharsed');
  },

  getByIdPurcharsed(axios, id) {
    return axios.get(`/purcharsed/{id}`);
  },

  getRecharges(axios) {
    return axios.get('/recharges');
  },

  getByIdRecharges(axios, id) {
    return axios.get(`/recharge/{id}`);
  },

  getRequest(axios) {
    return axios.get('/requests');
  },

  getByIdRequest(axios, id) {
    return axios.get(`/request/{id}`);
  },

  getData: axios => axios.get('/api/Catalog/customes')
});

/***/ }),

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(80);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("763f0384", content, true, context)
};

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_signup_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_signup_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_signup_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_signup_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_signup_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 80:
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
//# sourceMappingURL=signup.js.map