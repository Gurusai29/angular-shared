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
  <canvas baseChart width="400" height="400"
  [datasets]="lineChartData"
  [labels]="lineChartLabels"
  [options]="lineChartOptions"
  [colors]="lineChartColors"
  [legend]="lineChartLegend"
  [chartType]="lineChartType"
  [plugins]="lineChartPlugins">
  </canvas>`
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLWxpYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiRTovYW5ndWxhci1zaGFyZWQvcHJvamVjdHMvc2hhcmVkLWxpYi9zcmMvIiwic291cmNlcyI6WyJsaWIvc2hhcmVkLWxpYi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFpQnpELE1BQU0sT0FBTyxrQkFBa0I7SUFVM0IsZ0JBQWdCLENBQUM7SUFHbkIsUUFBUTtRQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRyxNQUFNLENBQUMsQ0FBQTtRQUN4QyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUcsTUFBTSxDQUFDLENBQUE7SUFDNUMsQ0FBQzs7O1lBOUJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixRQUFRLEVBQUU7Ozs7Ozs7OztZQVNBO2FBRVg7Ozs7NEJBR0UsS0FBSzs4QkFDTCxLQUFLOytCQUNMLEtBQUs7OEJBQ0wsS0FBSzs4QkFDTCxLQUFLOzRCQUNMLEtBQUs7K0JBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2hhcnREYXRhU2V0cywgQ2hhcnRPcHRpb25zIH0gZnJvbSAnY2hhcnQuanMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItc2hhcmVkLWxpYicsXG4gIHRlbXBsYXRlOiBgPGgxPmNoYXJ0PC9oMT5cbiAgPGNhbnZhcyBiYXNlQ2hhcnQgd2lkdGg9XCI0MDBcIiBoZWlnaHQ9XCI0MDBcIlxuICBbZGF0YXNldHNdPVwibGluZUNoYXJ0RGF0YVwiXG4gIFtsYWJlbHNdPVwibGluZUNoYXJ0TGFiZWxzXCJcbiAgW29wdGlvbnNdPVwibGluZUNoYXJ0T3B0aW9uc1wiXG4gIFtjb2xvcnNdPVwibGluZUNoYXJ0Q29sb3JzXCJcbiAgW2xlZ2VuZF09XCJsaW5lQ2hhcnRMZWdlbmRcIlxuICBbY2hhcnRUeXBlXT1cImxpbmVDaGFydFR5cGVcIlxuICBbcGx1Z2luc109XCJsaW5lQ2hhcnRQbHVnaW5zXCI+XG4gIDwvY2FudmFzPmAsXG4gIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgU2hhcmVkTGliQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSBsaW5lQ2hhcnREYXRhIDogYW55XG4gIEBJbnB1dCgpIGxpbmVDaGFydExhYmVscyA6YW55O1xuICBASW5wdXQoKSBsaW5lQ2hhcnRPcHRpb25zIDphbnk7XG4gIEBJbnB1dCgpIGxpbmVDaGFydENvbG9yczphbnk7XG4gIEBJbnB1dCgpIGxpbmVDaGFydExlZ2VuZDphbnk7XG4gIEBJbnB1dCgpIGxpbmVDaGFydFR5cGU6YW55O1xuICBASW5wdXQoKSBsaW5lQ2hhcnRQbHVnaW5zOmFueTtcblxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XG5cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmxpbmVDaGFydERhdGEgLCAnbGluZScpXG4gICAgY29uc29sZS5sb2codGhpcy5saW5lQ2hhcnRMYWJlbHMgLCAnbGFiZScpXG4gIH1cblxufVxuIl19