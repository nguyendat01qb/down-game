exports.ids = [7];
exports.modules = {

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/product/manager.vue?vue&type=template&id=450a73f2&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_vm._ssrNode("<div class=\"table-wrapper\">","</div>",[_vm._ssrNode("<link href=\"https://cdn.jsdelivr.net/npm/@mdi/font@6.x/css/materialdesignicons.min.css\" rel=\"stylesheet\"> <div class=\"table-title\"><div class=\"row\"><div class=\"col-sm-6\" style=\"color: red\"><h2>Manage <b>Product</b></h2></div> <div class=\"col-sm-6\"><a href=\"http://localhost:3000/admin/product/add\" data-toggle=\"modal\" class=\"btn btn-success\"><i class=\"material-icons\"></i> <span>Add New Product</span></a></div></div></div> "),_vm._ssrNode("<form>","</form>",[_vm._ssrNode("<div class=\"scoll\">","</div>",[_vm._ssrNode("<div class=\"size-form\">","</div>",[_vm._ssrNode("<table class=\"table table-striped table-hover\">","</table>",[_vm._ssrNode("<thead class=\"fixer\"><tr><th class=\"color-text-1\">ID</th> <th class=\"color-text-1\">Tên game</th> <th class=\"color-text-1\">Thể loại</th> <th class=\"color-text-1\">Điểm đánh giá</th> <th class=\"color-text-1\">Actions</th></tr></thead> "),_vm._ssrNode("<tbody>","</tbody>",_vm._l((_vm.listManager),function(manager,index){return _vm._ssrNode("<tr>","</tr>",[_vm._ssrNode("<td class=\"color-text-2\">"+_vm._ssrEscape(_vm._s(manager.ID_Product))+"</td> <td class=\"color-text-2\">"+_vm._ssrEscape(_vm._s(manager.Name))+"</td> <td class=\"color-text-2\">"+_vm._ssrEscape("\n                  "+_vm._s(manager.Game_genre)+"\n                ")+"</td> <td class=\"color-text-2\" style=\"text-align: center\">"+_vm._ssrEscape("\n                  "+_vm._s(manager.Point_Rare)+"\n                ")+"</td> "),_vm._ssrNode("<td>","</td>",[_vm._ssrNode("<a href data-toggle=\"modal\" class=\"edit\">","</a>",[_c('router-link',{attrs:{"to":{
                        path: './edit/' + manager.ID_Product,
                        params: { idProd: manager.ID_Product },
                      }}},[_c('i',{staticClass:"material-icons",attrs:{"data-toggle":"tooltip","title":"Edit"}},[_vm._v("\n                        ✍\n                      ")])])],1),_vm._ssrNode(" <a href class=\"delete\"><i style=\"color: red\"> ✘ </i></a>")],2)],2)}),0)],2)])])]),_vm._ssrNode(" <a href=\"http://localhost:3000/admin\"><button type=\"button\" class=\"btn btn-primary\">Back to home</button></a>")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/admin/product/manager.vue?vue&type=template&id=450a73f2&

// EXTERNAL MODULE: external "sweetalert2"
var external_sweetalert2_ = __webpack_require__(51);
var external_sweetalert2_default = /*#__PURE__*/__webpack_require__.n(external_sweetalert2_);

// EXTERNAL MODULE: ./api/catalogApi.js
var catalogApi = __webpack_require__(53);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/product/manager.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var managervue_type_script_lang_js_ = ({
  layout: 'admin',
  middleware: 'authAdmin',

  data() {
    return {
      listManager: []
    };
  },

  async created() {
    await this.Managerlist();
  },

  methods: {
    async Managerlist() {
      try {
        const {
          data
        } = await catalogApi["a" /* default */].getProducts(this.$axios);
        this.listManager = data.products;
      } catch (err) {
        console.log(err);
      }
    },

    OnDelete(id) {
      const swalWithBootstrapButtons = external_sweetalert2_default.a.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      });
      swalWithBootstrapButtons.fire({
        title: 'Bạn chắn chắn muốn xóa',
        text: 'Dữ liệu không thể khôi phục!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Xóa luôn!',
        cancelButtonText: 'Thôi em rút lui!',
        reverseButtons: true
      }).then(result => {
        if (result.isConfirmed) {
          catalogApi["a" /* default */].deleteProduct(this.$axios, id);
          swalWithBootstrapButtons.fire('Đã xóa thành công!', 'Sản phẩm đã được tiễn về ông bà!', 'success');
          this.$router.push('admin/product/manager');
          this.$router.go();
        } else if (
        /* Read more about handling dismissals below */
        result.dismiss === external_sweetalert2_default.a.DismissReason.cancel) {
          swalWithBootstrapButtons.fire('Thôi không xóa nữa', 'Sản phẩm của bạn còn ở đấy', 'error');
        }
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/admin/product/manager.vue?vue&type=script&lang=js&
 /* harmony default export */ var product_managervue_type_script_lang_js_ = (managervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/admin/product/manager.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(85)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  product_managervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "318720d2"
  
)

/* harmony default export */ var manager = __webpack_exports__["default"] = (component.exports);

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

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(86);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("220a100c", content, true, context)
};

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_manager_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_manager_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_manager_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_manager_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_manager_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".scoll{width:905px;height:400px;overflow-x:hidden;overflow-y:auto;overflow-block:auto}.size-form{margin-right:10%}.color-text-1{color:#26ff09}.color-text-2{color:#fff}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=manager.js.map