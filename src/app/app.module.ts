import { RedditSearchWithoutRxJSModule } from './components/reddit-search-wo-rxjs/reddit-search-wo-rxjs.module';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardListModule } from './components/card-list/card-list.component';
import { BusRouteModule } from './components/bus-route/bus-route.module';
import { RedditSearchModule } from './components/reddit-search/reddit-search.module';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    CardListModule,
    MatProgressSpinnerModule,
    MatIconModule,
    BusRouteModule,
    RedditSearchModule,
    RedditSearchWithoutRxJSModule,
    PdfViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
