import { NgModule } from '@angular/core';
import { from } from 'rxjs';
import { SharedLibComponent } from './shared-lib.component';
import { ChartsModule } from 'ng2-charts';
@NgModule({
  declarations: [SharedLibComponent],
  imports: [
    ChartsModule
  ],
  exports: [SharedLibComponent]
})
export class SharedLibModule { }
