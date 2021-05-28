(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('ng2-charts')) :
    typeof define === 'function' && define.amd ? define('shared-lib', ['exports', '@angular/core', 'ng2-charts'], factory) :
    (global = global || self, factory(global['shared-lib'] = {}, global.ng.core, global.ng2Charts));
}(this, (function (exports, i0, ng2Charts) { 'use strict';

    var SharedLibService = /** @class */ (function () {
        function SharedLibService() {
        }
        return SharedLibService;
    }());
    SharedLibService.ɵprov = i0.ɵɵdefineInjectable({ factory: function SharedLibService_Factory() { return new SharedLibService(); }, token: SharedLibService, providedIn: "root" });
    SharedLibService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    SharedLibService.ctorParameters = function () { return []; };

    var SharedLibComponent = /** @class */ (function () {
        function SharedLibComponent() {
        }
        SharedLibComponent.prototype.ngOnInit = function () {
            console.log(this.lineChartData, 'line');
            console.log(this.lineChartLabels, 'labe');
        };
        return SharedLibComponent;
    }());
    SharedLibComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'lib-shared-lib',
                    template: "<h1>chart</h1>\r\n<canvas baseChart width=\"400\" height=\"400\"\r\n[datasets]=\"lineChartData\"\r\n[labels]=\"lineChartLabels\"\r\n[options]=\"lineChartOptions\"\r\n[colors]=\"lineChartColors\"\r\n[legend]=\"lineChartLegend\"\r\n[chartType]=\"lineChartType\"\r\n[plugins]=\"lineChartPlugins\">\r\n</canvas>"
                },] }
    ];
    SharedLibComponent.ctorParameters = function () { return []; };
    SharedLibComponent.propDecorators = {
        lineChartData: [{ type: i0.Input }],
        lineChartLabels: [{ type: i0.Input }],
        lineChartOptions: [{ type: i0.Input }],
        lineChartColors: [{ type: i0.Input }],
        lineChartLegend: [{ type: i0.Input }],
        lineChartType: [{ type: i0.Input }],
        lineChartPlugins: [{ type: i0.Input }]
    };

    var SharedLibModule = /** @class */ (function () {
        function SharedLibModule() {
        }
        return SharedLibModule;
    }());
    SharedLibModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [SharedLibComponent],
                    imports: [
                        ng2Charts.ChartsModule
                    ],
                    exports: [SharedLibComponent]
                },] }
    ];

    /*
     * Public API Surface of shared-lib
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.SharedLibComponent = SharedLibComponent;
    exports.SharedLibModule = SharedLibModule;
    exports.SharedLibService = SharedLibService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=shared-lib.umd.js.map
