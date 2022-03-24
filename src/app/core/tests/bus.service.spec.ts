import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { Bus } from 'src/app/interfaces/bus.interface';

import { BusService } from '../services/bus.service';

fdescribe('PostService', () => {
  let service: BusService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(BusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#listBusLines should return value from observable', (done: DoneFn) => {
    service.listBusLines().subscribe(value => {
      expect(value).toBeTruthy();
      done();
    });
  });

  it('#listBusStations should return value from observable', (done: DoneFn) => {
    service.listBusStations().subscribe(value => {
      expect(value).toBeTruthy();
      done();
    });
  });

  it('#getBusRoute should return value from observable', (done: DoneFn) => {
    const busId = '6041';
    service.getBusRoute(busId).subscribe(value => {
      expect(value).toBeTruthy();
      done();
    });
  });

});
