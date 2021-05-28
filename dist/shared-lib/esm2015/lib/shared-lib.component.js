import { Component, Input } from '@angular/core';
export class SharedLibComponent {
    constructor() { }
    ngOnInit() {
        console.log(this.lineChartData, 'line');
        console.log(this.lineChartLabels, 'labe');
    }
}
SharedLibComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-shared-lib',
                template: "<h1>chart</h1>\r\n<canvas baseChart width=\"400\" height=\"400\"\r\n[datasets]=\"lineChartData\"\r\n[labels]=\"lineChartLabels\"\r\n[options]=\"lineChartOptions\"\r\n[colors]=\"lineChartColors\"\r\n[legend]=\"lineChartLegend\"\r\n[chartType]=\"lineChartType\"\r\n[plugins]=\"lineChartPlugins\">\r\n</canvas>"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLWxpYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiRTovYW5ndWxhci1zaGFyZWQvcHJvamVjdHMvc2hhcmVkLWxpYi9zcmMvIiwic291cmNlcyI6WyJsaWIvc2hhcmVkLWxpYi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFRekQsTUFBTSxPQUFPLGtCQUFrQjtJQVUzQixnQkFBZ0IsQ0FBQztJQUduQixRQUFRO1FBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFHLE1BQU0sQ0FBQyxDQUFBO1FBQ3hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRyxNQUFNLENBQUMsQ0FBQTtJQUM1QyxDQUFDOzs7WUFyQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLCtUQUEwQzthQUUzQzs7Ozs0QkFHRSxLQUFLOzhCQUNMLEtBQUs7K0JBQ0wsS0FBSzs4QkFDTCxLQUFLOzhCQUNMLEtBQUs7NEJBQ0wsS0FBSzsrQkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDaGFydERhdGFTZXRzLCBDaGFydE9wdGlvbnMgfSBmcm9tICdjaGFydC5qcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1zaGFyZWQtbGliJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NoYXJlZC1saWIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIFNoYXJlZExpYkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgbGluZUNoYXJ0RGF0YSA6IGFueVxuICBASW5wdXQoKSBsaW5lQ2hhcnRMYWJlbHMgOmFueTtcbiAgQElucHV0KCkgbGluZUNoYXJ0T3B0aW9ucyA6YW55O1xuICBASW5wdXQoKSBsaW5lQ2hhcnRDb2xvcnM6YW55O1xuICBASW5wdXQoKSBsaW5lQ2hhcnRMZWdlbmQ6YW55O1xuICBASW5wdXQoKSBsaW5lQ2hhcnRUeXBlOmFueTtcbiAgQElucHV0KCkgbGluZUNoYXJ0UGx1Z2luczphbnk7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxuXG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgY29uc29sZS5sb2codGhpcy5saW5lQ2hhcnREYXRhICwgJ2xpbmUnKVxuICAgIGNvbnNvbGUubG9nKHRoaXMubGluZUNoYXJ0TGFiZWxzICwgJ2xhYmUnKVxuICB9XG5cbn1cbiJdfQ==