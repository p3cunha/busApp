import { Component } from '@angular/core';
import { BusFacade } from './core/store/bus.facade';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'BusApp'
  busLines$ = this.busFacade.busLines$;
  busStations$ = this.busFacade.busStations$;

  constructor(private busFacade: BusFacade) {}
}
