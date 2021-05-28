import { Component, Input, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';

@Component({
  selector: 'lib-shared-lib',
  templateUrl: './shared-lib.component.html',
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
