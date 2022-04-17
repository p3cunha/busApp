import { BusService } from './core/services/bus.service';
import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {
  distinctUntilChanged,
  map,
  switchMap,
  throttleTime,
} from 'rxjs/operators';
import { BusFacade } from './core/store/bus.facade';
import { Bus } from './interfaces/bus.interface';
import { Coordinate } from './interfaces/itinerary.interface';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'BusApp';
  busLines$ = this.busFacade.busLines$;
  busStations$ = this.busFacade.busStations$;
  selectedCoordinates!: Array<Coordinate>;
  page = 1;

  selectedBus$ = new Subject<Bus>();
  selectedCoordinates$ = this.selectedBus$.pipe(
    throttleTime(400),
    distinctUntilChanged(),
    switchMap((bus) =>
      this.busService.getRoute(bus.id).pipe(
        map((itineraryObj) =>
          Object.entries(itineraryObj)
            .map(([key, prop]) => {
              if (!isNaN(Number(key))) {
                prop.lat = Number(prop.lat);
                prop.lng = Number(prop.lng);
                return prop;
              }
              return;
            })
            .filter(Boolean)
        )
      )
    )
  );

  constructor(
    private busFacade: BusFacade,
    private busService: BusService,
    private scroll: ViewportScroller
  ) {}

  onBusSelect(bus: Bus) {
    this.busService.getRoute(bus.id).subscribe((itineraryObj) => {
      this.selectedCoordinates = Object.entries(itineraryObj)
        .map(([key, prop]) => {
          if (!isNaN(Number(key))) {
            prop.lat = Number(prop.lat);
            prop.lng = Number(prop.lng);
            return prop;
          }
          return;
        })
        .filter(Boolean);
    });
  }

  prevPage() {
    this.page = --this.page;
  }

  nextPage() {
    this.page = ++this.page;
  }
}
