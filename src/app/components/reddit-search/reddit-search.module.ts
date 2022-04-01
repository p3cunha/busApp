import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RedditSearchComponent } from './reddit-search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

@NgModule({
  declarations: [RedditSearchComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatSlideToggleModule
  ],
  exports: [RedditSearchComponent],
})
export class RedditSearchModule {}
