import { Itinerary } from './../../interfaces/itinerary.interface';
import { BusState } from './states/bus.state';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { BusService } from '../services/bus.service';
import { Observable } from 'rxjs';
import { Bus } from 'src/app/interfaces/bus.interface';

@Injectable({
  providedIn: 'root',
})
export class BusFacade {
  get busLines$(): Observable<Bus[]> {
    return this.busService
      .listBusLines()
      .pipe(tap((busLines: Bus[]) => (this.busState.busLines = busLines)));
  }

  get busStations$(): Observable<Bus[]> {
    return this.busService
      .listBusStations()
      .pipe(
        tap((busStations: Bus[]) => (this.busState.busStations = busStations))
      );
  }

  constructor(private busService: BusService, private busState: BusState) {}

  getRoute(busId: string): Observable<Itinerary> {
    return this.busService.getRoute(busId);
  }
}
