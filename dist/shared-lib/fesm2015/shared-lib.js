import { ɵɵdefineInjectable, Injectable, Component, Input, NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

class SharedLibService {
    constructor() { }
}
SharedLibService.ɵprov = ɵɵdefineInjectable({ factory: function SharedLibService_Factory() { return new SharedLibService(); }, token: SharedLibService, providedIn: "root" });
SharedLibService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
SharedLibService.ctorParameters = () => [];

class SharedLibComponent {
    constructor() { }
    ngOnInit() {
        console.log(this.lineChartData, 'line');
        console.log(this.lineChartLabels, 'labe');
    }
}
SharedLibComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-shared-lib',
                template: `<h1>chart</h1>
  <div style="display: block;">
  <canvas baseChart width="400" height="400"
  [datasets]="lineChartData"
  [labels]="lineChartLabels"
  [options]="lineChartOptions"
  [colors]="lineChartColors"
  [legend]="lineChartLegend"
  [chartType]="lineChartType"
  [plugins]="lineChartPlugins">
  </canvas>
  </div>`
            },] }
];
SharedLibComponent.ctorParameters = () => [];
SharedLibComponent.propDecorators = {
    lineChartData: [{ type: Input }],
    lineChartLabels: [{ type: Input }],
    lineChartOptions: [{ type: Input }],
    lineChartColors: [{ type: Input }],
    lineChartLegend: [{ type: Input }],
    lineChartType: [{ type: Input }],
    lineChartPlugins: [{ type: Input }]
};

class SharedLibModule {
}
SharedLibModule.decorators = [
    { type: NgModule, args: [{
                declarations: [SharedLibComponent],
                imports: [
                    ChartsModule
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

export { SharedLibComponent, SharedLibModule, SharedLibService };
//# sourceMappingURL=shared-lib.js.map
