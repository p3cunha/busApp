import { Itinerary } from './../../interfaces/itinerary.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bus } from 'src/app/interfaces/bus.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BusService {
  constructor(private http: HttpClient) {}

  listBusLines() {
    return this.http.get<Bus[]>(
      `${environment.baseUrl}nc&p=%&t=o`
    );
  }

  listBusStations() {
    return this.http.get<Bus[]>(
      `${environment.baseUrl}nc&p=%&t=l`
    );
  }

  getBusRoute(busId: string) {
    return this.http.get<Itinerary>(
      `${environment.baseUrl}il&p=${busId}`
    );
  }
}
