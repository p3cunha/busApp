import { Itinerary } from './../../interfaces/itinerary.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIService } from 'src/app/API.service';
import { Bus } from 'src/app/interfaces/bus.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BusService {
  constructor(private http: HttpClient, private api: APIService) {}

  listBusLines(): Observable<Bus[]> {
    this.api.ListBuses().then(console.log)
    return this.http.get<Bus[]>(
      `${environment.baseUrl}nc&p=%&t=o`
    );
  }

  listBusStations(): Observable<Bus[]> {
    return this.http.get<Bus[]>(
      `${environment.baseUrl}nc&p=%&t=l`
    );
  }

  getBusRoute(busId: string): Observable<Itinerary> {
    return this.http.get<Itinerary>(
      `${environment.baseUrl}il&p=${busId}`
    );
  }
}
