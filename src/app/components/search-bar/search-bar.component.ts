import { Bus } from 'src/app/interfaces/bus.interface';
import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { NgModule } from '@angular/core';
import { UntypedFormControl, ReactiveFormsModule } from '@angular/forms';
import { MatLegacyAutocompleteModule as MatAutocompleteModule } from '@angular/material/legacy-autocomplete';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchBarComponent {
  @Input() items = new Array<Bus>();
  @Input() searchControl = new UntypedFormControl();

  constructor() {}
}

@NgModule({
  imports: [
    CommonModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
  ],
  exports: [SearchBarComponent],
  declarations: [SearchBarComponent],
  providers: [],
})
export class SearchBarModule {}
