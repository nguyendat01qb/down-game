exports.ids = [6];
exports.modules = {

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/product/edit.vue?vue&type=template&id=df1b2080&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"size-bg"},[_vm._ssrNode("<form>","</form>",[_vm._ssrNode("<div class=\"scoll\">","</div>",[_vm._ssrNode("<div class=\"size-form\">","</div>",[_vm._ssrNode("<div class=\"form-group\"><label for> Tên sản phẩm </label> <input type=\"text\""+(_vm._ssrAttr("value",(_vm.listProducts.Name)))+" class=\"form-control\"></div> "),_vm._ssrNode("<div class=\"form-group\">","</div>",[_vm._ssrNode("<label for> Thể loại </label> <input type=\"text\""+(_vm._ssrAttr("value",(_vm.listProducts.Game_genre)))+" class=\"form-control\"> "),_vm._ssrNode("<div class=\"form-group\" style=\"width: 200px\">","</div>",[_vm._ssrNode("<label for> Danh Mục </label> "),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.listProducts.ID_Category),expression:"listProducts.ID_Category"}],staticClass:"form-control",attrs:{"name":""},on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.listProducts, "ID_Category", $event.target.multiple ? $$selectedVal : $$selectedVal[0])}}},_vm._l((_vm.listCategory),function(category,index){return _c('option',{key:index,domProps:{"value":category.ID_Category}},[_vm._v("\n            "+_vm._s(category.Name)+"\n          ")])}),0)],2)],2),_vm._ssrNode(" <div class=\"form-group\"><label for> URL Video </label> <input type=\"text\""+(_vm._ssrAttr("value",(_vm.listProducts.Video_Game)))+" class=\"form-control\"></div> <div class=\"form-group input-number\"><label for> Dung lượng </label> <input type=\"text\""+(_vm._ssrAttr("value",(_vm.listProducts.Free_Space)))+" class=\"form-control\"></div> <div class=\"form-group\"><label for> URL Avatar </label> <input type=\"text\""+(_vm._ssrAttr("value",(_vm.listProducts.Image_1)))+" class=\"form-control\"></div> <div class=\"form-group\"><label for> URL Ảnh mô tả 1 </label> <input type=\"text\""+(_vm._ssrAttr("value",(_vm.listProducts.Image_2)))+" class=\"form-control\"></div> <div class=\"form-group\"><label for> URL Ảnh mô tả 2 </label> <input type=\"text\""+(_vm._ssrAttr("value",(_vm.listProducts.Image_3)))+" class=\"form-control\"></div> <div class=\"form-group input-number\"><label for> Yêu cầu Ram tối thiểu </label> <input type=\"number\""+(_vm._ssrAttr("value",(_vm.listProducts.Ram)))+" class=\"form-control\"></div> <div class=\"form-group\"><label for> Hệ điều hành </label> <input type=\"text\""+(_vm._ssrAttr("value",(_vm.listProducts.OS)))+" class=\"form-control\"></div> <div class=\"form-group\"><label for> Ngôn ngữ </label> <input type=\"text\""+(_vm._ssrAttr("value",(_vm.listProducts.Languages)))+" class=\"form-control\"></div> <div class=\"form-group input-number\"><label for> Số người chơi </label> <input type=\"number\""+(_vm._ssrAttr("value",(_vm.listProducts.Player)))+" class=\"form-control\"></div> <div class=\"form-group\"><label for> Đường dẫn tải game bằng Fshare </label> <input type=\"text\""+(_vm._ssrAttr("value",(_vm.listProducts.Link_Fshare)))+" class=\"form-control\"></div> <div class=\"form-group\"><label for> Đường dẫn tải game trực tiếp </label> <input type=\"text\""+(_vm._ssrAttr("value",(_vm.listProducts.Link_Vip)))+" class=\"form-control\"></div> <div class=\"form-group\"><label for> Mô tả </label> <textarea type=\"text\" rows=\"10\" class=\"form-control\">"+_vm._ssrEscape(_vm._s(_vm.listProducts.Decription))+"</textarea></div>")],2)]),_vm._ssrNode(" <p>   </p> <button class=\"btn btn-primary\">Lưu</button>")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/admin/product/edit.vue?vue&type=template&id=df1b2080&

// EXTERNAL MODULE: external "sweetalert2"
var external_sweetalert2_ = __webpack_require__(51);
var external_sweetalert2_default = /*#__PURE__*/__webpack_require__.n(external_sweetalert2_);

// EXTERNAL MODULE: ./api/catalogApi.js
var catalogApi = __webpack_require__(53);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/product/edit.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var editvue_type_script_lang_js_ = ({
  layout: 'admin',

  data() {
    return {
      listProducts: [],
      listCategory: []
    };
  },

  async created() {
    await this.getAllProducts();
    await this.getCategory();
  },

  methods: {
    async getAllProducts() {
      try {
        const {
          data
        } = await catalogApi["a" /* default */].getByIdProducts(this.$axios, this.$route.params.id);
        this.listProducts = data.productDetail;
        console.log(this.listProducts);
      } catch (err) {
        console.log(err);
      }
    },

    async getCategory() {
      try {
        const {
          data
        } = await catalogApi["a" /* default */].getCategories(this.$axios);
        this.listCategory = data;
      } catch (err) {
        console.log(err);
      }
    },

    OnEdit() {
      external_sweetalert2_default.a.fire({
        title: 'Bạn có muốn lưu lại tất cả dữ liệu vừa nhập?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Lưu đi',
        denyButtonText: `Đổi ý rồi! Không lưu nữa`
      }).then(result => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          this.$axios.$put('/product/update/', this.listProducts);
          external_sweetalert2_default.a.fire('Lưu xong rồi nè!', '', 'success');
          this.$router.push('/admin/product/manager');
        } else if (result.isDenied) {
          external_sweetalert2_default.a.fire('Hờn rồi! Không lưu nữa', '', 'info');
          this.$router.push('/admin/product/manager');
        }
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/admin/product/edit.vue?vue&type=script&lang=js&
 /* harmony default export */ var product_editvue_type_script_lang_js_ = (editvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/admin/product/edit.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(83)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  product_editvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "10a1f1b5"
  
)

/* harmony default export */ var edit = __webpack_exports__["default"] = (component.exports);

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

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(84);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("28a91028", content, true, context)
};

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_edit_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".input-number{width:180px}.scoll{width:1000px;height:400px;overflow-x:hidden;overflow-y:auto;overflow-block:auto}.size-form{margin-right:10%}.form-group{color:#fff}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=edit.js.map