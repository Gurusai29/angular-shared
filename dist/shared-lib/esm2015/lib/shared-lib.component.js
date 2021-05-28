import { Component, Input } from '@angular/core';
export class SharedLibComponent {
    constructor() { }
    ngOnInit() {
    }
}
SharedLibComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-shared-lib',
                template: "<canvas baseChart width=\"400\" height=\"400\" [datasets]=\"lineChartData\" [labels]=\"lineChartLabels\"\r\n    [options]=\"lineChartOptions\" [colors]=\"lineChartColors\" [legend]=\"lineChartLegend\">\r\n</canvas>"
            },] }
];
SharedLibComponent.ctorParameters = () => [];
SharedLibComponent.propDecorators = {
    lineChartData: [{ type: Input }],
    lineChartLabels: [{ type: Input }],
    lineChartOptions: [{ type: Input }],
    lineChartColours: [{ type: Input }],
    lineChartLegend: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLWxpYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiRTovYW5ndWxhci1zaGFyZWQvcHJvamVjdHMvc2hhcmVkLWxpYi9zcmMvIiwic291cmNlcyI6WyJsaWIvc2hhcmVkLWxpYi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFRekQsTUFBTSxPQUFPLGtCQUFrQjtJQU8zQixnQkFBZ0IsQ0FBQztJQUduQixRQUFRO0lBQ1IsQ0FBQzs7O1lBaEJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixrT0FBMEM7YUFFM0M7Ozs7NEJBR0UsS0FBSzs4QkFDTCxLQUFLOytCQUNMLEtBQUs7K0JBQ0wsS0FBSzs4QkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDaGFydERhdGFTZXRzLCBDaGFydE9wdGlvbnMgfSBmcm9tICdjaGFydC5qcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1zaGFyZWQtbGliJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NoYXJlZC1saWIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIFNoYXJlZExpYkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgbGluZUNoYXJ0RGF0YSA6IGFueVxuICBASW5wdXQoKSBsaW5lQ2hhcnRMYWJlbHMgOmFueTtcbiAgQElucHV0KCkgbGluZUNoYXJ0T3B0aW9ucyA6YW55O1xuICBASW5wdXQoKSBsaW5lQ2hhcnRDb2xvdXJzOmFueTtcbiAgQElucHV0KCkgbGluZUNoYXJ0TGVnZW5kOmFueTtcbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxuXG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gIH1cblxufVxuIl19