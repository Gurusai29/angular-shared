import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-shared-lib',
  templateUrl: './shared-lib.component.html',
  styles: []
})
export class SharedLibComponent implements OnInit {

  @Input()
  data : String
  constructor() { }


  ngOnInit(): void {
  }

}
