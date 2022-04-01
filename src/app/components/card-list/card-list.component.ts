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
import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
} from '@angular/core';
import { NgModule } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { SearchBarModule } from '../search-bar/search-bar.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { Subject } from 'rxjs';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'bus-line-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardListComponent {
  @Output() selectedBus = new Subject<Bus>();
  @Input() items = new Array<Bus>();
  pageSize = 10;
  pagIndex = 0;
  searchControl = new FormControl();
  searchedBus$ = this.searchControl.valueChanges.pipe(
    startWith(''),
    map((value) => this._filter(value))
  );
  displayedColumns: string[] = ['codigo', 'linha'];
  selection = new SelectionModel<Bus>(false, []);

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
    MatProgressSpinnerModule,
    MatTableModule,
  ],
  exports: [CardListComponent],
  declarations: [CardListComponent],
  providers: [],
})
export class CardListModule {}
