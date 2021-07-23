(self["webpackChunkojt2"] = self["webpackChunkojt2"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _component_login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component/login/login.component */ 28);
/* harmony import */ var _component_main_main_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component/main/main.component */ 738);
/* harmony import */ var _service_auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service/auth/auth.guard */ 5611);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);






const routes = [
    { path: 'login', component: _component_login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent },
    { path: 'main', component: _component_main_main_component__WEBPACK_IMPORTED_MODULE_1__.MainComponent, canActivate: [_service_auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__.AuthGuard] },
    { path: '', redirectTo: '/main', pathMatch: 'full' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service/auth/auth.service */ 7878);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);



class AppComponent {
    constructor(authService) {
        this.authService = authService;
        this.title = 'ojt2';
        this.authService.userSubject.subscribe(x => this.user = x);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _component_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/login/login.component */ 28);
/* harmony import */ var _component_main_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/main/main.component */ 738);
/* harmony import */ var _component_main_display_display_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/main/display/display.component */ 2762);
/* harmony import */ var _component_main_map_map_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/main/map/map.component */ 3158);
/* harmony import */ var _component_main_detect_detect_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component/main/detect/detect.component */ 9082);
/* harmony import */ var _component_main_display_ecg_ecg_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./component/main/display/ecg/ecg.component */ 7611);
/* harmony import */ var _component_main_display_resp_resp_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./component/main/display/resp/resp.component */ 2751);
/* harmony import */ var _component_main_display_state_state_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./component/main/display/state/state.component */ 2168);
/* harmony import */ var _component_main_display_trend_trend_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./component/main/display/trend/trend.component */ 6796);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./service/auth/auth.service */ 7878);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 7716);
















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ providers: [_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_11__.AuthService], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClientModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _component_login_login_component__WEBPACK_IMPORTED_MODULE_2__.LoginComponent,
        _component_main_main_component__WEBPACK_IMPORTED_MODULE_3__.MainComponent,
        _component_main_display_display_component__WEBPACK_IMPORTED_MODULE_4__.DisplayComponent,
        _component_main_map_map_component__WEBPACK_IMPORTED_MODULE_5__.MapComponent,
        _component_main_detect_detect_component__WEBPACK_IMPORTED_MODULE_6__.DetectComponent,
        _component_main_display_ecg_ecg_component__WEBPACK_IMPORTED_MODULE_7__.EcgComponent,
        _component_main_display_resp_resp_component__WEBPACK_IMPORTED_MODULE_8__.RespComponent,
        _component_main_display_state_state_component__WEBPACK_IMPORTED_MODULE_9__.StateComponent,
        _component_main_display_trend_trend_component__WEBPACK_IMPORTED_MODULE_10__.TrendComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClientModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule] }); })();


/***/ }),

/***/ 28:
/*!****************************************************!*\
  !*** ./src/app/component/login/login.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _Users_rj9101_Developer_mezoo_ojt2_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 6304);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _service_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/auth/auth.service */ 7878);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);





class LoginComponent {
  constructor(auth, router) {
    this.auth = auth;
    this.router = router;
    this.id = "";
    this.pwd = "";
    this.convertedPwd = "";
  }

  ngOnInit() {}

  login() {
    var _this = this;

    const digestMessage = /*#__PURE__*/function () {
      var _ref = (0,_Users_rj9101_Developer_mezoo_ojt2_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
        const msgUint8 = new TextEncoder().encode(_this.pwd);
        const hashBuffer = yield crypto.subtle.digest('SHA-1', msgUint8);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const result = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
        _this.convertedPwd = result;

        _this.auth.postLogin(_this.id, _this.convertedPwd).subscribe(data => {
          _this.router.navigate(['/main']);
        });
      });

      return function digestMessage() {
        return _ref.apply(this, arguments);
      };
    }();

    digestMessage();
  }

}

LoginComponent.ɵfac = function LoginComponent_Factory(t) {
  return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
};

LoginComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: LoginComponent,
  selectors: [["app-login"]],
  decls: 21,
  vars: 2,
  consts: [["lang", "en"], ["charset", "UTF-8"], ["http-equiv", "X-UA-Compatible", "content", "IE=edge"], ["name", "viewport", "content", "width=device-width, initial-scale=1.0"], [1, "header"], [1, "content"], [1, "content-inner"], [1, "content-header"], [1, "content-form"], ["type", "text", "placeholder", "Account", 1, "id", 3, "ngModel", "ngModelChange"], ["type", "password", "placeholder", "Password", 1, "pwd", 3, "ngModel", "ngModelChange"], [1, "signin", 3, "click"], [1, "footer"]],
  template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "html", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "head");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "meta", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "meta", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "meta", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "title");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Document");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "body");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " HiCardi - Central Monitoring System ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Hicardi");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "input", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_15_listener($event) {
        return ctx.id = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "input", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_16_listener($event) {
        return ctx.pwd = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_17_listener() {
        return ctx.login();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "SIGN IN");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Logo");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.id);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.pwd);
    }
  },
  directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel],
  styles: ["body[_ngcontent-%COMP%] {\n    background-color: #023e8a;\n}\n\n.header[_ngcontent-%COMP%] {\n    background: #03045e;\n    display: flex;\n    height: 4%;\n    width: 100%;\n    align-items: center;\n}\n\n.content[_ngcontent-%COMP%] {\n    height: 90%;\n    display: flex;\n    margin: auto;\n    width: 70%;\n    flex-direction: column;\n}\n\n.content-inner[_ngcontent-%COMP%] {\n    height: 50%;\n    margin: auto 0;\n    background: white;\n    border-radius: 10px 10px / 10px 10px;\n}\n\n.content-header[_ngcontent-%COMP%] {\n    background: #03045e;\n    font-size: 2rem;\n    color: white;\n    border-radius: 30px 30px / 30px 30px;\n    height: 15%;\n    width: 30%;\n    margin: 0 auto;\n    margin-top: 30px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.content-form[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    width: 60%;\n    margin: 0 auto;\n    margin-top: 80px;\n}\n\n.content-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    border: none;\n    border-bottom: 1px solid gray;\n    margin-bottom: 30px;\n    height: 40px;\n    font-size: 1rem;\n}\n\n.content-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    color: white;\n    background: #03045e;\n    height: 60px;\n    font-size: 1.5rem;\n    border-radius: 10px 10px / 10px 10px;\n    cursor: pointer;\n    border: none;\n    margin-top: 10px;\n}\n\n.footer[_ngcontent-%COMP%] {\n    height: 6%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLFVBQVU7SUFDVixXQUFXO0lBQ1gsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixZQUFZO0lBQ1osVUFBVTtJQUNWLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsWUFBWTtJQUNaLG9DQUFvQztJQUNwQyxXQUFXO0lBQ1gsVUFBVTtJQUNWLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFVBQVU7SUFDVixjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsb0NBQW9DO0lBQ3BDLGVBQWU7SUFDZixZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6ImxvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDIzZThhO1xufVxuXG4uaGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjMDMwNDVlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiA0JTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY29udGVudCB7XG4gICAgaGVpZ2h0OiA5MCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgd2lkdGg6IDcwJTtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uY29udGVudC1pbm5lciB7XG4gICAgaGVpZ2h0OiA1MCU7XG4gICAgbWFyZ2luOiBhdXRvIDA7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IC8gMTBweCAxMHB4O1xufVxuXG4uY29udGVudC1oZWFkZXIge1xuICAgIGJhY2tncm91bmQ6ICMwMzA0NWU7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4IDMwcHggLyAzMHB4IDMwcHg7XG4gICAgaGVpZ2h0OiAxNSU7XG4gICAgd2lkdGg6IDMwJTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmNvbnRlbnQtZm9ybSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiA2MCU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgbWFyZ2luLXRvcDogODBweDtcbn1cblxuLmNvbnRlbnQtZm9ybSBpbnB1dCB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmF5O1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuLmNvbnRlbnQtZm9ybSBidXR0b24ge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kOiAjMDMwNDVlO1xuICAgIGhlaWdodDogNjBweDtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggLyAxMHB4IDEwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uZm9vdGVyIHtcbiAgICBoZWlnaHQ6IDYlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn0iXX0= */"]
});

/***/ }),

/***/ 9082:
/*!***********************************************************!*\
  !*** ./src/app/component/main/detect/detect.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetectComponent": () => (/* binding */ DetectComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

class DetectComponent {
    constructor() { }
    ngOnInit() {
    }
}
DetectComponent.ɵfac = function DetectComponent_Factory(t) { return new (t || DetectComponent)(); };
DetectComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DetectComponent, selectors: [["app-detect"]], decls: 2, vars: 0, template: function DetectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "detect works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXRlY3QuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 2762:
/*!*************************************************************!*\
  !*** ./src/app/component/main/display/display.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DisplayComponent": () => (/* binding */ DisplayComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _service_websocket_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../service/websocket.service */ 9825);


class DisplayComponent {
    constructor(websocket) {
        this.websocket = websocket;
        this.ecgData = [];
        this.resData = [];
        this.hrData = [];
        this.index = 0;
        this.deviceInfos = {};
    }
    ngOnInit() {
        this.websocket.subject.subscribe(observer => {
            if (this.deviceInfos.deviceAddress === observer.dv) {
                const timestamp = new Date().getTime();
                for (let i = 0; i < 5; i++) {
                    this.ecgData.push({ ts: timestamp + 8 * i, val: observer.dp.ecg[i] });
                }
                this.resData.push({ val: observer.dp.F1, ts: timestamp });
                this.hrData.push({ val: observer.dp.hr, ts: timestamp });
            }
        });
    }
}
DisplayComponent.ɵfac = function DisplayComponent_Factory(t) { return new (t || DisplayComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_websocket_service__WEBPACK_IMPORTED_MODULE_0__.WebsocketService)); };
DisplayComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DisplayComponent, selectors: [["app-display"]], inputs: { index: "index", deviceInfos: "deviceInfos" }, decls: 67, vars: 2, consts: [[1, "display"], [1, "header"], [1, "group"], [1, "hicardi"], [1, "patient"], [1, "content"], [1, "line_chart"], [1, "line_chart-ecg"], [1, "title"], [1, "line_chart-resp"], [1, "dot_chart"], [1, "dot_chart-up", "dot_chart-heart"], [1, "dot_chart-down"], [1, "dot_chart-resp"], [1, "dot_chart-temp"], [1, "footer"], [1, "data"], [1, "data-temp"], [1, "data-resp"], [1, "data-heart"], [1, "motion_status"], [1, "status"], [1, "fas", "fa-bed"], [1, "status", "cur_status"], [1, "fas", "fa-male"], [1, "fas", "fa-walking"], [1, "fas", "fa-running"]], template: function DisplayComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\uC774*\uC740 (27) F");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "ECG");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "81");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Respiration");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Heart Rate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "88bpm");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Respiration Rate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "25bpm");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Temperature");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "37.7\u2103");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Temp: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "36.8\u2103");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Resp: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "27bpm");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "HR Min/Max: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "71/90 bpm");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](60, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](62, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](64, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](66, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("AA-", ctx.index, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.deviceInfos == null ? null : ctx.deviceInfos.hicardiName);
    } }, styles: [".display[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n}\n\n.display[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n    display: flex;\n    grid-gap: 20px;\n    gap: 20px;\n    height: 12%;\n    border-bottom: solid .1px rgba(211, 211, 211, 0.493);\n    align-items: center;\n    padding-left: 10px;\n}\n\n.display[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    display: flex;\n    height: 76%;\n    border-bottom: solid .1px rgba(211, 211, 211, 0.493);\n}\n\n.content[_ngcontent-%COMP%]   .line_chart[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    width: 60%;\n}\n\n.line_chart[_ngcontent-%COMP%]   .line_chart-ecg[_ngcontent-%COMP%] {\n    border-bottom: solid .1px rgba(211, 211, 211, 0.493);\n    height: 60%;\n}\n\n.line_chart[_ngcontent-%COMP%]   .line_chart-resp[_ngcontent-%COMP%] {\n    height: 40%;\n}\n\n.content[_ngcontent-%COMP%]   .dot_chart[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    width: 40%;\n    \n}\n\n.dot_chart[_ngcontent-%COMP%]   .dot_chart-heart[_ngcontent-%COMP%], .dot_chart[_ngcontent-%COMP%]   .dot_chart-resp[_ngcontent-%COMP%] {\n    border-left: solid .1px rgba(211, 211, 211, 0.493);\n}\n\n.dot_chart[_ngcontent-%COMP%]   .dot_chart-up[_ngcontent-%COMP%] {\n    border-bottom: solid .1px rgba(211, 211, 211, 0.493);\n    width: 100%;\n    height: 50%;\n}\n\n.dot_chart[_ngcontent-%COMP%]   .dot_chart-down[_ngcontent-%COMP%] {\n    display: flex;\n    width: 100%;\n    height: 50%;\n}\n\n.dot_chart-down[_ngcontent-%COMP%]   .dot_chart-resp[_ngcontent-%COMP%], .dot_chart-down[_ngcontent-%COMP%]   .dot_chart-temp[_ngcontent-%COMP%] {\n    width: 50%;\n}\n\n.dot_chart-down[_ngcontent-%COMP%]   .dot_chart-temp[_ngcontent-%COMP%] {\n    border-left: solid .1px rgba(211, 211, 211, 0.493);\n}\n\n.display[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%] {\n    height: 12%;\n    display: flex;\n}\n\n.footer[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%] {\n    display:  flex;\n    width: 60%;\n    grid-gap: 10px;\n    gap: 10px;\n    align-items: center;\n}\n\n.data[_ngcontent-%COMP%]   .data-temp[_ngcontent-%COMP%] {\n    margin-left: 10px;\n}\n\n.footer[_ngcontent-%COMP%]   .motion_status[_ngcontent-%COMP%] {\n    display: flex;\n    width: 40%;\n}\n\n.motion_status[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%] {\n    display: flex;\n    width: 25%;\n    justify-content: center;\n    border-left: solid .1px rgba(211, 211, 211, 0.493);\n    align-items: center;\n}\n\n.motion_status[_ngcontent-%COMP%]   .cur_status[_ngcontent-%COMP%] {\n    background-color: deeppink;\n}\n\n.title[_ngcontent-%COMP%] {\n    opacity: .5;\n    font-size: .7rem;\n    padding-left: 10px;\n}\n\ni[_ngcontent-%COMP%] {\n    opacity: .5;\n    font-size: 1.3rem;\n}\n\n.cur_status[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\n    opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3BsYXkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixjQUFTO0lBQVQsU0FBUztJQUNULFdBQVc7SUFDWCxvREFBb0Q7SUFDcEQsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsb0RBQW9EO0FBQ3hEOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxvREFBb0Q7SUFDcEQsV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0RBQWtEO0FBQ3REOztBQUVBO0lBQ0ksb0RBQW9EO0lBQ3BELFdBQVc7SUFDWCxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGtEQUFrRDtBQUN0RDs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksY0FBYztJQUNkLFVBQVU7SUFDVixjQUFTO0lBQVQsU0FBUztJQUNULG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsVUFBVTtJQUNWLHVCQUF1QjtJQUN2QixrREFBa0Q7SUFDbEQsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksVUFBVTtBQUNkIiwiZmlsZSI6ImRpc3BsYXkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaXNwbGF5IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uZGlzcGxheSAuaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMjBweDtcbiAgICBoZWlnaHQ6IDEyJTtcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAuMXB4IHJnYmEoMjExLCAyMTEsIDIxMSwgMC40OTMpO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG4uZGlzcGxheSAuY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBoZWlnaHQ6IDc2JTtcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAuMXB4IHJnYmEoMjExLCAyMTEsIDIxMSwgMC40OTMpO1xufVxuXG4uY29udGVudCAubGluZV9jaGFydCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiA2MCU7XG59XG5cbi5saW5lX2NoYXJ0IC5saW5lX2NoYXJ0LWVjZyB7XG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgLjFweCByZ2JhKDIxMSwgMjExLCAyMTEsIDAuNDkzKTtcbiAgICBoZWlnaHQ6IDYwJTtcbn1cblxuLmxpbmVfY2hhcnQgLmxpbmVfY2hhcnQtcmVzcCB7XG4gICAgaGVpZ2h0OiA0MCU7XG59XG5cbi5jb250ZW50IC5kb3RfY2hhcnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogNDAlO1xuICAgIC8qIGhlaWdodDogMTAwJTsgKi9cbn1cblxuLmRvdF9jaGFydCAuZG90X2NoYXJ0LWhlYXJ0LCAuZG90X2NoYXJ0IC5kb3RfY2hhcnQtcmVzcCB7XG4gICAgYm9yZGVyLWxlZnQ6IHNvbGlkIC4xcHggcmdiYSgyMTEsIDIxMSwgMjExLCAwLjQ5Myk7XG59XG5cbi5kb3RfY2hhcnQgLmRvdF9jaGFydC11cCB7XG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgLjFweCByZ2JhKDIxMSwgMjExLCAyMTEsIDAuNDkzKTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDUwJTtcbn1cblxuLmRvdF9jaGFydCAuZG90X2NoYXJ0LWRvd24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA1MCU7XG59XG5cbi5kb3RfY2hhcnQtZG93biAuZG90X2NoYXJ0LXJlc3AsIC5kb3RfY2hhcnQtZG93biAuZG90X2NoYXJ0LXRlbXAge1xuICAgIHdpZHRoOiA1MCU7XG59XG5cbi5kb3RfY2hhcnQtZG93biAuZG90X2NoYXJ0LXRlbXAge1xuICAgIGJvcmRlci1sZWZ0OiBzb2xpZCAuMXB4IHJnYmEoMjExLCAyMTEsIDIxMSwgMC40OTMpO1xufVxuXG4uZGlzcGxheSAuZm9vdGVyIHtcbiAgICBoZWlnaHQ6IDEyJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uZm9vdGVyIC5kYXRhIHtcbiAgICBkaXNwbGF5OiAgZmxleDtcbiAgICB3aWR0aDogNjAlO1xuICAgIGdhcDogMTBweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZGF0YSAuZGF0YS10ZW1wIHtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLmZvb3RlciAubW90aW9uX3N0YXR1cyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogNDAlO1xufVxuXG4ubW90aW9uX3N0YXR1cyAuc3RhdHVzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAyNSU7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYm9yZGVyLWxlZnQ6IHNvbGlkIC4xcHggcmdiYSgyMTEsIDIxMSwgMjExLCAwLjQ5Myk7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm1vdGlvbl9zdGF0dXMgLmN1cl9zdGF0dXMge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGRlZXBwaW5rO1xufVxuXG4udGl0bGUge1xuICAgIG9wYWNpdHk6IC41O1xuICAgIGZvbnQtc2l6ZTogLjdyZW07XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG5pIHtcbiAgICBvcGFjaXR5OiAuNTtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbn1cblxuLmN1cl9zdGF0dXMgaXtcbiAgICBvcGFjaXR5OiAxO1xufSJdfQ== */"] });


/***/ }),

/***/ 7611:
/*!*************************************************************!*\
  !*** ./src/app/component/main/display/ecg/ecg.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EcgComponent": () => (/* binding */ EcgComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

class EcgComponent {
    constructor() { }
    ngOnInit() {
    }
}
EcgComponent.ɵfac = function EcgComponent_Factory(t) { return new (t || EcgComponent)(); };
EcgComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EcgComponent, selectors: [["app-ecg"]], decls: 2, vars: 0, template: function EcgComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "ecg works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlY2cuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 2751:
/*!***************************************************************!*\
  !*** ./src/app/component/main/display/resp/resp.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RespComponent": () => (/* binding */ RespComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

class RespComponent {
    constructor() { }
    ngOnInit() {
    }
}
RespComponent.ɵfac = function RespComponent_Factory(t) { return new (t || RespComponent)(); };
RespComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RespComponent, selectors: [["app-resp"]], decls: 2, vars: 0, template: function RespComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "resp works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXNwLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 2168:
/*!*****************************************************************!*\
  !*** ./src/app/component/main/display/state/state.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StateComponent": () => (/* binding */ StateComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

class StateComponent {
    constructor() { }
    ngOnInit() {
    }
}
StateComponent.ɵfac = function StateComponent_Factory(t) { return new (t || StateComponent)(); };
StateComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StateComponent, selectors: [["app-state"]], decls: 2, vars: 0, template: function StateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "state works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdGF0ZS5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 6796:
/*!*****************************************************************!*\
  !*** ./src/app/component/main/display/trend/trend.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrendComponent": () => (/* binding */ TrendComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

class TrendComponent {
    constructor() { }
    ngOnInit() {
    }
}
TrendComponent.ɵfac = function TrendComponent_Factory(t) { return new (t || TrendComponent)(); };
TrendComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TrendComponent, selectors: [["app-trend"]], decls: 2, vars: 0, template: function TrendComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "trend works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0cmVuZC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 738:
/*!**************************************************!*\
  !*** ./src/app/component/main/main.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainComponent": () => (/* binding */ MainComponent)
/* harmony export */ });
/* harmony import */ var rxjs_internal_Subscription__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/internal/Subscription */ 3984);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_app_service_websocket_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/service/websocket.service */ 9825);
/* harmony import */ var _service_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/data.service */ 4590);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 1321);
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./map/map.component */ 3158);
/* harmony import */ var _detect_detect_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detect/detect.component */ 9082);
/* harmony import */ var _display_display_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./display/display.component */ 2762);








function MainComponent_app_display_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-display", 12);
} if (rf & 2) {
    const index_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("id", "display_", index_r2, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("index", index_r2 + 1)("deviceInfos", ctx_r0.deviceInfos[index_r2 + 1]);
} }
function MainComponent_app_display_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-display", 12);
} if (rf & 2) {
    const index_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("id", "display_", index_r3, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("index", index_r3 + 1)("deviceInfos", ctx_r1.deviceInfos[index_r3 + 1]);
} }
const _c0 = function () { return [0, 1, 2, 3]; };
const _c1 = function () { return [4, 5, 6, 7]; };
class MainComponent {
    constructor(wsService, dataService) {
        this.wsService = wsService;
        this.dataService = dataService;
        this.wsSubscription = new rxjs_internal_Subscription__WEBPACK_IMPORTED_MODULE_6__.Subscription();
        this.groupIndex = 0;
        this.spaceIds = [];
        this.deviceInfos = {};
        this.reports = {};
        this.dataService.getDeviceIds("AA").then(deviceItems => {
            //데이터 받아올 배열 초기화
            for (let i = 0; i < deviceItems.length; i++) {
                this.reports[deviceItems[i][0].peripheral.id] = [];
            }
            //소켓통신으로 데이터 받아오기
            this.wsSubscription = this.wsService.createObservableSocket(deviceItems)
                .subscribe(
            //   data => {
            //     if (JSON.parse(data).type === "data") {
            //       this.reports[JSON.parse(data).data.dv].push(JSON.parse(data).data);
            //     }
            //   },
            //   err => console.log(err),
            //   () => console.log("socekt completed!")
            );
            //기타 정보 가져오기
            let space;
            this.dataService.getSpaceInGroup(1).then(spaceItems => {
                deviceItems.map((dItem) => {
                    space = spaceItems.find((sItem) => dItem[0]._id === sItem.device);
                    this.deviceInfos[space.index] = {
                        "_id": space.device,
                        "hicardiName": dItem[0].peripheral.customName,
                        "deviceAddress": dItem[0].peripheral.id
                    };
                });
            });
        });
        this.date = new Date().toLocaleString();
    }
    closeSocket() {
        this.wsSubscription.unsubscribe();
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        this.closeSocket();
    }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_service_websocket_service__WEBPACK_IMPORTED_MODULE_0__.WebsocketService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_service_data_service__WEBPACK_IMPORTED_MODULE_1__.DataService)); };
MainComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], decls: 16, vars: 5, consts: [[1, "top_header"], [1, "logo"], ["src", "/assets/hicardi.png"], [1, "date"], [1, "content"], [1, "display_content"], [1, "display_content-left"], ["class", "display", 3, "id", "index", "deviceInfos", 4, "ngFor", "ngForOf"], [1, "display_content-right"], [1, "other_content"], [1, "map"], [1, "detect"], [1, "display", 3, "id", "index", "deviceInfos"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "LiveStudio");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, MainComponent_app_display_10_Template, 1, 3, "app-display", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, MainComponent_app_display_12_Template, 1, 3, "app-display", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "app-map", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "app-detect", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.date);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](3, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](4, _c1));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _map_map_component__WEBPACK_IMPORTED_MODULE_2__.MapComponent, _detect_detect_component__WEBPACK_IMPORTED_MODULE_3__.DetectComponent, _display_display_component__WEBPACK_IMPORTED_MODULE_4__.DisplayComponent], styles: [".top_header[_ngcontent-%COMP%] {\n    display: flex;\n    margin-top: 10px;\n    flex-direction: row;\n    align-items: center;\n}\n\n.top_header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n    display: flex;\n    font-size: .7rem;\n    color: red;\n    position: absolute;\n}\n\n.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 15px;\n}\n\n.top_header[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n    margin: 0 auto;\n}\n\n.content[_ngcontent-%COMP%] {\n    display: flex;\n    width: 99%;\n    height: 95%;\n    margin-top: 5px;\n    background-color: #343a40;\n}\n\n.content[_ngcontent-%COMP%]   .display_content[_ngcontent-%COMP%] {\n    width: 80%;\n    display: flex;\n    height: 100%;\n}\n\n.display_content[_ngcontent-%COMP%]   .display_content-left[_ngcontent-%COMP%], .display_content[_ngcontent-%COMP%]   .display_content-right[_ngcontent-%COMP%] {\n    width: 50%;\n    margin-right: 5px;\n}\n\n.display_content-left[_ngcontent-%COMP%], .display_content-right[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n}\n\n.display[_ngcontent-%COMP%] {\n    height: 25%;\n    border: solid .1px rgba(211, 211, 211, 0.493);\n    margin-top: 5px;\n    background-color: black;\n}\n\n.display_0[_ngcontent-%COMP%], .display_4[_ngcontent-%COMP%] {\n    margin-top: 0;\n}\n\n.content[_ngcontent-%COMP%]   .other_content[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    width: 20%;\n    height: 100%;\n}\n\n.other_content[_ngcontent-%COMP%]   .map[_ngcontent-%COMP%] {\n    height: 30%;\n    margin-bottom: 5px;\n    border: solid .1px rgba(211, 211, 211, 0.493);\n    background-color: black;\n}\n\n.other_content[_ngcontent-%COMP%]   .detect[_ngcontent-%COMP%] {\n    height: 70%;\n    border: solid .1px rgba(211, 211, 211, 0.493);\n    background-color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFVBQVU7SUFDVixXQUFXO0lBQ1gsZUFBZTtJQUNmLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixhQUFhO0lBQ2IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksV0FBVztJQUNYLDZDQUE2QztJQUM3QyxlQUFlO0lBQ2YsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLDZDQUE2QztJQUM3Qyx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsNkNBQTZDO0lBQzdDLHVCQUF1QjtBQUMzQiIsImZpbGUiOiJtYWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9wX2hlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnRvcF9oZWFkZXIgLmxvZ28ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZm9udC1zaXplOiAuN3JlbTtcbiAgICBjb2xvcjogcmVkO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLmxvZ28gaW1nIHtcbiAgICBoZWlnaHQ6IDE1cHg7XG59XG5cbi50b3BfaGVhZGVyIC5kYXRlIHtcbiAgICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDk5JTtcbiAgICBoZWlnaHQ6IDk1JTtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM0M2E0MDtcbn1cblxuLmNvbnRlbnQgLmRpc3BsYXlfY29udGVudCB7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLmRpc3BsYXlfY29udGVudCAuZGlzcGxheV9jb250ZW50LWxlZnQsIC5kaXNwbGF5X2NvbnRlbnQgLmRpc3BsYXlfY29udGVudC1yaWdodCB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLmRpc3BsYXlfY29udGVudC1sZWZ0LCAuZGlzcGxheV9jb250ZW50LXJpZ2h0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5kaXNwbGF5IHtcbiAgICBoZWlnaHQ6IDI1JTtcbiAgICBib3JkZXI6IHNvbGlkIC4xcHggcmdiYSgyMTEsIDIxMSwgMjExLCAwLjQ5Myk7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuXG4uZGlzcGxheV8wLCAuZGlzcGxheV80IHtcbiAgICBtYXJnaW4tdG9wOiAwO1xufVxuXG4uY29udGVudCAub3RoZXJfY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiAyMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ub3RoZXJfY29udGVudCAubWFwIHtcbiAgICBoZWlnaHQ6IDMwJTtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgYm9yZGVyOiBzb2xpZCAuMXB4IHJnYmEoMjExLCAyMTEsIDIxMSwgMC40OTMpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuXG4ub3RoZXJfY29udGVudCAuZGV0ZWN0IHtcbiAgICBoZWlnaHQ6IDcwJTtcbiAgICBib3JkZXI6IHNvbGlkIC4xcHggcmdiYSgyMTEsIDIxMSwgMjExLCAwLjQ5Myk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59Il19 */"] });


/***/ }),

/***/ 3158:
/*!*****************************************************!*\
  !*** ./src/app/component/main/map/map.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapComponent": () => (/* binding */ MapComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

class MapComponent {
    constructor() {
        this.title = 'My First AGM project';
        this.lat = 51.678418;
        this.lng = 7.809007;
    }
    ngOnInit() {
    }
}
MapComponent.ɵfac = function MapComponent_Factory(t) { return new (t || MapComponent)(); };
MapComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MapComponent, selectors: [["app-map"]], decls: 0, vars: 0, template: function MapComponent_Template(rf, ctx) { }, styles: ["agm-map[_ngcontent-%COMP%] {\n  height: 300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtBQUNmIiwiZmlsZSI6Im1hcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYWdtLW1hcCB7XG4gIGhlaWdodDogMzAwcHg7XG59Il19 */"] });


/***/ }),

/***/ 5611:
/*!********************************************!*\
  !*** ./src/app/service/auth/auth.guard.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ 7878);



class AuthGuard {
    constructor(router, auth) {
        this.router = router;
        this.auth = auth;
        this.UserLogIn = false;
    }
    canActivate(route, state) {
        if (this.auth.userSubject.value.result) {
            return true;
        }
        alert("비밀번호를 확인해주세요");
        this.router.navigate(['/login']);
        return false;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService)); };
AuthGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 7878:
/*!**********************************************!*\
  !*** ./src/app/service/auth/auth.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 8002);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 6215);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);






class AuthService {
    // user: Observable<User>;
    constructor(http, router) {
        this.http = http;
        this.router = router;
        // public get userValue(): any {
        //   return this.userSubject.value;
        // }
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        this.userSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : {});
        // this.user = this.userSubject.asObservable();
    }
    postLogin(id, pwd) {
        return this.http.post("http://192.168.0.3:5000/accounts/signin", { "accountID": id, "password": pwd }, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((data) => {
            localStorage.setItem("user", JSON.stringify(data));
            this.userSubject.next(data);
            return data;
        }));
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router)); };
AuthService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 4590:
/*!*****************************************!*\
  !*** ./src/app/service/data.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataService": () => (/* binding */ DataService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 1841);


class DataService {
    constructor(http) {
        this.http = http;
        this.getSpaces = () => this.http.get(`${this.url}/spaces`).toPromise();
        this.getGroups = () => this.http.get(`${this.url}/groups`).toPromise();
        this.getDevices = () => this.http.get(`${this.url}/devices`).toPromise();
        this.url = "http://192.168.0.3:5000";
    }
    getDeviceIds(groupName) {
        return this.getGroups()
            .then(groupItem => {
            if (groupItem.result) {
                return groupItem.data.filter((i) => i.name === groupName);
            }
        })
            .then(groupItem => {
            return this.getSpaces()
                .then(spaceItem => {
                if (spaceItem.result) {
                    return spaceItem.data.filter((i) => groupItem[0].index === i.groupIndex);
                }
            })
                .then(spaceItem => {
                return this.getDevices()
                    .then(deviceItem => {
                    if (deviceItem.result) {
                        return spaceItem.map((sItem) => deviceItem.data.filter((dItem) => sItem.device === dItem._id));
                    }
                });
            });
        });
    }
    getSpaceInGroup(groupIndex) {
        return this.getSpaces().then(spaces => {
            if (spaces.result) {
                return spaces.data.filter((item) => item.groupIndex === groupIndex);
            }
        });
    }
}
DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
DataService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DataService, factory: DataService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 9825:
/*!**********************************************!*\
  !*** ./src/app/service/websocket.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WebsocketService": () => (/* binding */ WebsocketService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 9765);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 9165);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);


class WebsocketService {
    constructor() {
        this.socketIsOpen = 1;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    }
    createObservableSocket(deviceList) {
        const addressList = deviceList.map((item) => {
            if (item[0].isRunning) {
                return item[0].peripheral.id;
            }
        }).filter((item) => item !== undefined);
        this.ws = new WebSocket('ws://192.168.0.3:5000');
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable(observer => {
            this.ws.onmessage = event => {
                //처음 연결되었을 때 central-connect 메시지 보내기
                if (JSON.parse(event.data).type === 'connected') {
                    const message = {
                        "type": "central-connect",
                        "data": { "account": `${JSON.parse(localStorage.getItem("user")).data._id}` }
                    };
                    this.sendMessage(JSON.stringify(message));
                }
                //연결 응답 왔을 때 devices-subscription 보내기
                else if (JSON.parse(event.data).type === 'connection-confirmed') {
                    const message = {
                        "type": "devices-subscription",
                        "data": { "account": `${JSON.parse(localStorage.getItem("user")).data._id}`, "devices": addressList }
                    };
                    this.sendMessage(JSON.stringify(message));
                }
                else if (JSON.parse(event.data).type === "data") {
                    this.subject.next(JSON.parse(event.data).data);
                }
                observer.next(event.data);
            };
            this.ws.onerror = event => observer.error(event);
            this.ws.onclose = () => observer.complete();
            return () => this.ws.close(1000, "the user disconnected");
        });
    }
    sendMessage(message) {
        if (this.ws.readyState === this.socketIsOpen) {
            this.ws.send(message);
            return `sent to server ${message}`;
        }
        else {
            return 'Message was not sent - the socket is closed';
        }
    }
}
WebsocketService.ɵfac = function WebsocketService_Factory(t) { return new (t || WebsocketService)(); };
WebsocketService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: WebsocketService, factory: WebsocketService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 6461:
/*!***************************************************************!*\
  !*** ./node_modules/webpack/hot/ sync nonrecursive ^\.\/log$ ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./log": 7598
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 6461;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(5142), __webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map