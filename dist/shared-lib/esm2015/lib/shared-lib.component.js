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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLWxpYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiRTovYW5ndWxhci1zaGFyZWQvcHJvamVjdHMvc2hhcmVkLWxpYi9zcmMvIiwic291cmNlcyI6WyJsaWIvc2hhcmVkLWxpYi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFtQnpELE1BQU0sT0FBTyxrQkFBa0I7SUFVM0IsZ0JBQWdCLENBQUM7SUFHbkIsUUFBUTtRQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRyxNQUFNLENBQUMsQ0FBQTtRQUN4QyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUcsTUFBTSxDQUFDLENBQUE7SUFDNUMsQ0FBQzs7O1lBaENGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7O1NBV0g7YUFFUjs7Ozs0QkFHRSxLQUFLOzhCQUNMLEtBQUs7K0JBQ0wsS0FBSzs4QkFDTCxLQUFLOzhCQUNMLEtBQUs7NEJBQ0wsS0FBSzsrQkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDaGFydERhdGFTZXRzLCBDaGFydE9wdGlvbnMgfSBmcm9tICdjaGFydC5qcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1zaGFyZWQtbGliJyxcbiAgdGVtcGxhdGU6IGA8aDE+Y2hhcnQ8L2gxPlxuICA8ZGl2IHN0eWxlPVwiZGlzcGxheTogYmxvY2s7XCI+XG4gIDxjYW52YXMgYmFzZUNoYXJ0IHdpZHRoPVwiNDAwXCIgaGVpZ2h0PVwiNDAwXCJcbiAgW2RhdGFzZXRzXT1cImxpbmVDaGFydERhdGFcIlxuICBbbGFiZWxzXT1cImxpbmVDaGFydExhYmVsc1wiXG4gIFtvcHRpb25zXT1cImxpbmVDaGFydE9wdGlvbnNcIlxuICBbY29sb3JzXT1cImxpbmVDaGFydENvbG9yc1wiXG4gIFtsZWdlbmRdPVwibGluZUNoYXJ0TGVnZW5kXCJcbiAgW2NoYXJ0VHlwZV09XCJsaW5lQ2hhcnRUeXBlXCJcbiAgW3BsdWdpbnNdPVwibGluZUNoYXJ0UGx1Z2luc1wiPlxuICA8L2NhbnZhcz5cbiAgPC9kaXY+YCxcbiAgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBTaGFyZWRMaWJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIGxpbmVDaGFydERhdGEgOiBhbnlcbiAgQElucHV0KCkgbGluZUNoYXJ0TGFiZWxzIDphbnk7XG4gIEBJbnB1dCgpIGxpbmVDaGFydE9wdGlvbnMgOmFueTtcbiAgQElucHV0KCkgbGluZUNoYXJ0Q29sb3JzOmFueTtcbiAgQElucHV0KCkgbGluZUNoYXJ0TGVnZW5kOmFueTtcbiAgQElucHV0KCkgbGluZUNoYXJ0VHlwZTphbnk7XG4gIEBJbnB1dCgpIGxpbmVDaGFydFBsdWdpbnM6YW55O1xuXG4gICAgY29uc3RydWN0b3IoKSB7IH1cblxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGNvbnNvbGUubG9nKHRoaXMubGluZUNoYXJ0RGF0YSAsICdsaW5lJylcbiAgICBjb25zb2xlLmxvZyh0aGlzLmxpbmVDaGFydExhYmVscyAsICdsYWJlJylcbiAgfVxuXG59XG4iXX0=