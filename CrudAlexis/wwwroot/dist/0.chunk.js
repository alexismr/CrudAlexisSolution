webpackJsonp([0],{

/***/ 440:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n\r\n    <h1>{{message}}</h1>\r\n\r\n</div>"

/***/ }),

/***/ 441:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/@angular/common/esm5/common.js
var common = __webpack_require__(39);

// EXTERNAL MODULE: ./node_modules/@angular/core/esm5/core.js
var core = __webpack_require__(12);

// EXTERNAL MODULE: ./node_modules/@angular/router/esm5/router.js + 26 modules
var router = __webpack_require__(84);

// CONCATENATED MODULE: ./appAngular/app/about/components/about.component.ts
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var about_component_AboutComponent = (function () {
    function AboutComponent() {
        this.message = 'Components about';
    }
    AboutComponent = __decorate([
        Object(core["n" /* Component */])({
            selector: 'app-about-component',
            template: __webpack_require__(440)
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());


// CONCATENATED MODULE: ./appAngular/app/about/about.routes.ts


var routes = [
    { path: '', component: about_component_AboutComponent }
];
var AboutRoutes = router["a" /* RouterModule */].forChild(routes);

// CONCATENATED MODULE: ./appAngular/app/about/about.module.ts
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutModule", function() { return about_module_AboutModule; });
var about_module___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var about_module_AboutModule = (function () {
    function AboutModule() {
    }
    AboutModule = about_module___decorate([
        Object(core["I" /* NgModule */])({
            imports: [
                common["b" /* CommonModule */],
                AboutRoutes
            ],
            declarations: [
                about_component_AboutComponent
            ],
        })
    ], AboutModule);
    return AboutModule;
}());



/***/ })

});
//# sourceMappingURL=0.chunk.js.map