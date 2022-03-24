import { Bus } from 'src/app/interfaces/bus.interface';
import { map, startWith, tap } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import {
  ItineraryModule,
  ItineraryComponent,
} from './../itinerary/itinerary.component';
import { PaginatorModule } from './../paginator/paginator.component';
import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { NgModule } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { SearchBarModule } from '../search-bar/search-bar.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardListComponent {
  @Input() items = new Array<Bus>();
  pageSize = 21;
  pagIndex = 0;
  searchControl = new FormControl();
  searchedBus$ = this.searchControl.valueChanges.pipe(
    startWith(''),
    map((value) => this._filter(value)),
  );
  constructor(public dialog: MatDialog) {}

  openDialog(data: Bus) {
    this.dialog.open(ItineraryComponent, {
      data,
      position: { top: '5%' },
    });
  }

  _filter(value: string): Bus[] {
    const filterValue = value.toLowerCase();
    return this.items?.filter(
      (option) =>
        option.nome.toLowerCase().includes(filterValue) ||
        option.codigo.toLowerCase().includes(filterValue)
    );
  }
}

@NgModule({
  imports: [
    CommonModule,
    PaginatorModule,
    MatDialogModule,
    ItineraryModule,
    MatTooltipModule,
    SearchBarModule,
    MatProgressSpinnerModule
  ],
  exports: [CardListComponent],
  declarations: [CardListComponent],
  providers: [],
})
export class CardListModule {}
