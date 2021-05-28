import { Component, Input, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';

@Component({
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
  </canvas>`,
  styles: []
})
export class SharedLibComponent implements OnInit {

  @Input() lineChartData : any
  @Input() lineChartLabels :any;
  @Input() lineChartOptions :any;
  @Input() lineChartColors:any;
  @Input() lineChartLegend:any;
  @Input() lineChartType:any;
  @Input() lineChartPlugins:any;

    constructor() { }


  ngOnInit(): void {
    console.log(this.lineChartData , 'line')
    console.log(this.lineChartLabels , 'labe')
  }

}
