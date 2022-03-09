exports.ids = [4];
exports.modules = {

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/product/add.vue?vue&type=template&id=22bb0e4d&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"size-bg"},[_vm._ssrNode("<form>","</form>",[_vm._ssrNode("<div class=\"scoll\">","</div>",[_vm._ssrNode("<div class=\"size-form\">","</div>",[_vm._ssrNode("<div class=\"form-group\"><label for> Tên sản phẩm </label> <input type=\"text\" placeholder=\"Nhập tên sản phẩm...\""+(_vm._ssrAttr("value",(_vm.dataSubmit.Name)))+" class=\"form-control\"></div> "),_vm._ssrNode("<div class=\"form-group\">","</div>",[_vm._ssrNode("<label for> Thể loại </label> <input type=\"text\" placeholder=\"Nhập thể loại sản phẩm...\""+(_vm._ssrAttr("value",(_vm.dataSubmit.Game_genre)))+" class=\"form-control\"> "),_vm._ssrNode("<div class=\"form-group\" style=\"width: 200px\">","</div>",[_vm._ssrNode("<label for> Danh Mục </label> "),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.dataSubmit.ID_Category),expression:"dataSubmit.ID_Category"}],staticClass:"form-control",attrs:{"name":""},on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.dataSubmit, "ID_Category", $event.target.multiple ? $$selectedVal : $$selectedVal[0])}}},_vm._l((_vm.categories),function(category,index){return _c('option',{key:index,domProps:{"value":category.ID_Category}},[_vm._v("\n                "+_vm._s(category.Name)+"\n              ")])}),0)],2)],2),_vm._ssrNode(" <div class=\"form-group\"><label for> URL Video </label> <input type=\"text\" placeholder=\"Nhập vào URL Video...\""+(_vm._ssrAttr("value",(_vm.dataSubmit.Video_Game)))+" class=\"form-control\"></div> <div class=\"form-group input-number\"><label for> Dung lượng </label> <input type=\"number\" placeholder=\"Dung lượng game tối thiểu?\""+(_vm._ssrAttr("value",(_vm.dataSubmit.Free_Space)))+" class=\"form-control\"></div> <div class=\"form-group\"><label for> URL Avatar </label> <input type=\"text\" placeholder=\"Nhập vào URL Avatar game\""+(_vm._ssrAttr("value",(_vm.dataSubmit.Image_1)))+" class=\"form-control\"></div> <div class=\"form-group\"><label for> URL Ảnh mô tả 1 </label> <input type=\"text\" placeholder=\"Nhập vào URL hình ảnh giới thiệu game\""+(_vm._ssrAttr("value",(_vm.dataSubmit.Image_2)))+" class=\"form-control\"></div> <div class=\"form-group\"><label for> URL Ảnh mô tả 2 </label> <input type=\"text\" placeholder=\"Nhập vào URL hình ảnh giới thiệu game\""+(_vm._ssrAttr("value",(_vm.dataSubmit.Image_3)))+" class=\"form-control\"></div> <div class=\"form-group input-number\"><label for> Yêu cầu Ram tối thiểu </label> <input type=\"number\" placeholder=\"Yêu cầu Ram tối thiểu?\""+(_vm._ssrAttr("value",(_vm.dataSubmit.Ram)))+" class=\"form-control\"></div> <div class=\"form-group\"><label for> Hệ điều hành </label> <input type=\"text\" placeholder=\"Hệ điều hành chạy được game?\""+(_vm._ssrAttr("value",(_vm.dataSubmit.OS)))+" class=\"form-control\"></div> <div class=\"form-group\"><label for> Ngôn ngữ </label> <input type=\"text\" placeholder=\"Ngôn ngữ của game...\""+(_vm._ssrAttr("value",(_vm.dataSubmit.Languages)))+" class=\"form-control\"></div> <div class=\"form-group input-number\"><label for> Số người chơi </label> <input type=\"number\" placeholder=\"Số người có thể tương tác được\""+(_vm._ssrAttr("value",(_vm.dataSubmit.Player)))+" class=\"form-control\"></div> <div class=\"form-group\"><label for> Đường dẫn tải game bằng Fshare </label> <input type=\"text\" placeholder=\"Nhập vào URL đường dẫn tải game Fshare\""+(_vm._ssrAttr("value",(_vm.dataSubmit.Link_Fshare)))+" class=\"form-control\"></div> <div class=\"form-group\"><label for> Đường dẫn tải game trực tiếp </label> <input type=\"text\" placeholder=\"Nhập vào URL tải game trực tiếp\""+(_vm._ssrAttr("value",(_vm.dataSubmit.Link_Vip)))+" class=\"form-control\"></div> <div class=\"form-group\"><label for> Mô tả </label> <textarea type=\"text\" placeholder=\"abcd...\" rows=\"8\" class=\"form-control\">"+_vm._ssrEscape(_vm._s(_vm.dataSubmit.Decription))+"</textarea></div>")],2)]),_vm._ssrNode(" <p> </p> <button class=\"btn btn-primary\">Lưu</button>")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/admin/product/add.vue?vue&type=template&id=22bb0e4d&

// EXTERNAL MODULE: external "sweetalert2"
var external_sweetalert2_ = __webpack_require__(51);
var external_sweetalert2_default = /*#__PURE__*/__webpack_require__.n(external_sweetalert2_);

// EXTERNAL MODULE: ./api/catalogApi.js
var catalogApi = __webpack_require__(53);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/product/add.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var addvue_type_script_lang_js_ = ({
  layout: 'admin',

  data() {
    return {
      dataSubmit: {
        Name: '',
        Game_genre: '',
        Decription: '',
        Video_Game: '',
        Free_Space: null,
        Time_Update: new Date().toISOString().substr(0, 10),
        Image_1: '',
        Image_2: '',
        Image_3: '',
        Point_Rare: '',
        Ram: null,
        OS: '',
        Languages: '',
        Player: '',
        Link_Fshare: '',
        Link_Vip: '',
        ID_Category: 1
      },
      categories: []
    };
  },

  async created() {
    await this.getCategories();
  },

  methods: {
    async getCategories() {
      try {
        const {
          data
        } = await catalogApi["a" /* default */].getCategories(this.$axios);
        this.categories = data;
      } catch (err) {
        console.log(err);
      }
    },

    async onCreatePost() {
      const data = {
        Name: this.dataSubmit.Name,
        Game_genre: this.dataSubmit.Game_genre,
        Decription: this.dataSubmit.Decription,
        Video_Game: this.dataSubmit.Video_Game,
        Free_Space: this.dataSubmit.Free_Space,
        Time_Update: this.dataSubmit.Time_Update,
        Image_1: this.dataSubmit.Image_1,
        Image_2: this.dataSubmit.Image_2,
        Image_3: this.dataSubmit.Image_3,
        Point_Rare: this.dataSubmit.Point_Rare,
        Ram: this.dataSubmit.Ram,
        OS: this.dataSubmit.OS,
        Languages: this.dataSubmit.Languages,
        Player: this.dataSubmit.Player,
        Link_Fshare: this.dataSubmit.Link_Fshare,
        Link_Vip: this.dataSubmit.Link_Vip,
        ID_Category: this.dataSubmit.ID_Category
      };

      try {
        await this.$axios.$post('/product', data); // console.log('Signup successfully!')

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
          title: 'Added product successfully'
        });
        console.log(this.$router);
        this.$router.push('/admin');
      } catch (error) {
        console.log(error);
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/admin/product/add.vue?vue&type=script&lang=js&
 /* harmony default export */ var product_addvue_type_script_lang_js_ = (addvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/admin/product/add.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(81)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  product_addvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "5c970374"
  
)

/* harmony default export */ var add = __webpack_exports__["default"] = (component.exports);

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

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(82);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("3122550c", content, true, context)
};

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(60);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".scoll{width:920px;height:400px;overflow-x:hidden;overflow-y:auto;overflow-block:auto}.size-form{margin-right:10%}.form-group{color:#fff}.input-number{width:180px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=add.js.map