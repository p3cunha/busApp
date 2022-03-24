import { Itinerary } from './../../interfaces/itinerary.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Bus } from 'src/app/interfaces/bus.interface';

@Injectable({
  providedIn: 'root',
})
export class BusService {
  constructor(private http: HttpClient) {}

  listBusLines() {
    return this.http.get<Bus[]>(
      'http://www.poatransporte.com.br/php/facades/process.php?a=nc&p=%&t=o'
    );
  }

  listBusStations() {
    return this.http.get<Bus[]>(
      'http://www.poatransporte.com.br/php/facades/process.php?a=nc&p=%&t=l'
    );
  }

  getBusRoute(busId: string) {
    return this.http.get<Itinerary>(
      `http://www.poatransporte.com.br/php/facades/process.php?a=il&p=${busId}`
    );
  }
}
