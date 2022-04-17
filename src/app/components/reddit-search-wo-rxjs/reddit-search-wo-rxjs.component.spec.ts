import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedditSearchWithoutRxJSComponent } from './reddit-search-wo-rxjs.component';

describe('RedditSearchComponent', () => {
  let component: RedditSearchWithoutRxJSComponent;
  let fixture: ComponentFixture<RedditSearchWithoutRxJSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedditSearchWithoutRxJSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RedditSearchWithoutRxJSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
