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
  @Input() lineChartColours:any;
  @Input() lineChartLegend:any;
    constructor() { }


  ngOnInit(): void {
  }

}
