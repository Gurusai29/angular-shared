import { NgModule } from '@angular/core';
import { SharedLibComponent } from './shared-lib.component';
import { ChartsModule } from 'ng2-charts';
export class SharedLibModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLWxpYi5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiRTovYW5ndWxhci1zaGFyZWQvcHJvamVjdHMvc2hhcmVkLWxpYi9zcmMvIiwic291cmNlcyI6WyJsaWIvc2hhcmVkLWxpYi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBUTFDLE1BQU0sT0FBTyxlQUFlOzs7WUFQM0IsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLGtCQUFrQixDQUFDO2dCQUNsQyxPQUFPLEVBQUU7b0JBQ1AsWUFBWTtpQkFDYjtnQkFDRCxPQUFPLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQzthQUM5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBmcm9tIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBTaGFyZWRMaWJDb21wb25lbnQgfSBmcm9tICcuL3NoYXJlZC1saWIuY29tcG9uZW50JztcbmltcG9ydCB7IENoYXJ0c01vZHVsZSB9IGZyb20gJ25nMi1jaGFydHMnO1xuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbU2hhcmVkTGliQ29tcG9uZW50XSxcbiAgaW1wb3J0czogW1xuICAgIENoYXJ0c01vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbU2hhcmVkTGliQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBTaGFyZWRMaWJNb2R1bGUgeyB9XG4iXX0=