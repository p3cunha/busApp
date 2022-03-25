import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';

import { ItineraryComponent, ItineraryModule } from './itinerary.component';

import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { Bus } from 'src/app/interfaces/bus.interface';
import { Coordinate } from 'src/app/interfaces/itinerary.interface';
import { Component } from '@angular/core';

describe('ItineraryComponent', () => {
  let component: ItineraryComponent;
  let fixture: ComponentFixture<ItineraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItineraryComponent],
      imports: [ItineraryModule, HttpClientModule],
      providers: [{ provide: MAT_DIALOG_DATA, useValue: {} }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItineraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#centralizeMap should be called', () => {
    const coordinates: Coordinate[] = [
      { lat: -31.21213, lng: -20.129372813 },
      { lat: -31.21213, lng: -20.129372813 },
    ];

    const spyCentralizeMap = spyOn(
      component,
      'centralizeMap'
    ).and.callThrough();
    component.centralizeMap(coordinates);
    expect(spyCentralizeMap).toHaveBeenCalled();
  });

  it('#getLastCoordinate should be called', () => {
    const coordinates: Coordinate[] = [
      { lat: -31.21213, lng: -20.129372813 },
      { lat: -31.21213, lng: -20.129372813 },
    ];
    const spyGetLastCoordinate = spyOn(
      component,
      'getLastCoordinate'
    ).and.callThrough();
    component.getLastCoordinate(coordinates);
    expect(spyGetLastCoordinate).toHaveBeenCalled();
  });

  it('#changeCurrentLocation should be called', () => {
    const coordinate: Coordinate = { lat: -31.21213, lng: -20.129372813 };
    const spyChangeCurrentLocation = spyOn(
      component,
      'changeCurrentLocation'
    ).and.callThrough();
    component.changeCurrentLocation(coordinate);
    expect(spyChangeCurrentLocation).toHaveBeenCalled();
  });

  it('#redirectToMaps should be called', () => {
    const coordinate: Coordinate = { lat: -31.21213, lng: -20.129372813 };
    const spyRedirectToMaps = spyOn(
      component,
      'redirectToMaps'
    ).and.callThrough();
    component.redirectToMaps(coordinate);
    expect(spyRedirectToMaps).toHaveBeenCalled();
  });

  it('#coordinates$ should return value from observable', fakeAsync(() => {
    component.coordinates$.subscribe(value => expect(value).toBeTruthy())
  }));
});
