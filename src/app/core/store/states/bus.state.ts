import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { Bus } from 'src/app/interfaces/bus.interface';

@Injectable({
  providedIn: 'root',
})
export class BusState {
  private _busLines$ = new BehaviorSubject<Bus[]>([]);
  private _busStations$ = new BehaviorSubject<Bus[]>([]);

  get busLines$() {
    return this._busLines$.asObservable().pipe(shareReplay());
  }
  set busLines(bus: Bus[]) {
    this._busLines$.next(bus);
  }
  get busStations$() {
    return this._busStations$.asObservable().pipe(shareReplay());
  }
  set busStations(bus: Bus[]) {
    this._busStations$.next(bus);
  }
}
