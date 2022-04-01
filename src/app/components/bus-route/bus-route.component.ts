import { BusFacade } from './../../core/store/bus.facade';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { Coordinate } from 'src/app/interfaces/itinerary.interface';

@Component({
  selector: 'bus-route',
  templateUrl: './bus-route.component.html',
  styleUrls: ['./bus-route.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BusRouteComponent implements OnInit {
  @Input() coordinates!: Coordinate[] | null;
  constructor() {}

  ngOnInit(): void {}

  centralizeMap(coordinates: Coordinate[]) {
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
}
