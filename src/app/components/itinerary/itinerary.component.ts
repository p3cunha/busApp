import { Bus } from 'src/app/interfaces/bus.interface';
import { MatLegacyProgressSpinnerModule as MatProgressSpinnerModule } from '@angular/material/legacy-progress-spinner';
import { CommonModule } from '@angular/common';
import { BusFacade } from 'src/app/core/store/bus.facade';
import {
  Component,
  ChangeDetectionStrategy,
  Inject,
  ViewChildren,
} from '@angular/core';
import { NgModule } from '@angular/core';
import { MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/legacy-dialog';
import { map, shareReplay } from 'rxjs/operators';
import { AgmCoreModule } from '@agm/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyListModule as MatListModule, MatLegacySelectionList as MatSelectionList } from '@angular/material/legacy-list';
import { MatLegacyTooltipModule as MatTooltipModule } from '@angular/material/legacy-tooltip';
import { Coordinate } from 'src/app/interfaces/itinerary.interface';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-itinerary',
  templateUrl: './itinerary.component.html',
  styleUrls: ['./itinerary.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItineraryComponent {
  @ViewChildren('coordinates') coordinatesList!: MatSelectionList;
  selectedCoordinate$ = new BehaviorSubject<Coordinate | null>(null);
  coordinates$: Observable<Coordinate[]> = this.busFacade
    .getRoute(this.bus.id)
    .pipe(
      map((item) =>
        Object.entries(item)
          .map(([key, prop]) => {
            if (!isNaN(Number(key))) {
              prop.lat = Number(prop.lat);
              prop.lng = Number(prop.lng);
              return prop;
            }
            return;
          })
          .filter(Boolean)
      ),
      shareReplay()
    );

  constructor(
    @Inject(MAT_DIALOG_DATA) public bus: Bus,
    @Inject('Window') private window: Window,
    private busFacade: BusFacade
  ) {}

  centralizeMap(coordinates: Coordinate[]) {
    if (this.coordinatesList._value)
      return {
        lat: (this.coordinatesList._value[0] as any).lat,
        lng: (this.coordinatesList._value[0] as any).lng,
      };
    return {
      lat: coordinates[0].lat,
      lng: coordinates[0].lng,
    };
  }

  getLastCoordinate(coordinates: Coordinate[]) {
    return {
      lat: coordinates[coordinates.length - 1].lat,
      lng: coordinates[coordinates.length - 1].lng,
    };
  }

  changeCurrentLocation(coordinate: Coordinate) {
    this.selectedCoordinate$.next(coordinate);
  }

  redirectToMaps(coordinate: Coordinate) {
    this.window.open(
      `https://www.google.com/maps/?q=${coordinate.lat},${coordinate.lng}`,
      '_blank'
    );
  }
}

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatListModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    AgmCoreModule.forRoot({
      apiKey: environment.apiKey
    }),
  ],
  exports: [ItineraryComponent],
  declarations: [ItineraryComponent],
  providers: [
    { provide: 'Window',  useValue: window }
  ],
})
export class ItineraryModule {}
