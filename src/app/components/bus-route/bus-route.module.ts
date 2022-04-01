import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusRouteComponent } from './bus-route.component';
import { AgmCoreModule } from '@agm/core';



@NgModule({
  declarations: [
    BusRouteComponent
  ],
  imports: [
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDoS9Wc0v2wa6_8f501N-sKlpi3KQ9HPtg',
    }),
  ],
  exports: [
    BusRouteComponent
  ]
})
export class BusRouteModule { }
