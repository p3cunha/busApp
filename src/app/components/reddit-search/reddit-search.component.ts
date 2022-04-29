import { RedditService } from 'src/app/core/services/reddit.service';
import {
  debounceTime,
  startWith,
  map,
  distinctUntilChanged,
  filter,
  switchMap,
  pluck,
  retry,
} from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { RedditResult } from 'src/app/interfaces/reddit.interface';

@Component({
  selector: 'reddit-search',
  templateUrl: './reddit-search.component.html',
  styleUrls: ['./reddit-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RedditSearchComponent {
  hasFilter = false;

  //Com RxJS
  //Sem filtro

  search = new FormControl();

  results$: Observable<RedditResult[]> = this.search.valueChanges.pipe(
    map((search) => search.trim()),
    debounceTime(300),
    distinctUntilChanged(),
    filter((search) => search !== ''),
    switchMap((search) =>
      this.service.search(search).pipe(retry(3), pluck('data', 'children'))
    )
  );

  subs = ['OnePiece', 'Movies', 'Pokemon', 'Anime', 'Space', 'Pics', 'Aww'];

  //ComFiltro
  subReddit = new FormControl();
  subReddit$ = this.subReddit.valueChanges.pipe(startWith(''));

  search$ = this.search.valueChanges.pipe(
    map((search) => search.trim()),
    debounceTime(300),
    distinctUntilChanged(),
    filter((search) => search !== '')
  );

  filteredResults$ = combineLatest([this.subReddit$, this.search$]).pipe(
    switchMap(([subReddit, search]) =>
      this.service
        .subRedditSearch(subReddit, search)
        .pipe(retry(3), pluck('data', 'children'))
    )
  );

  constructor(private service: RedditService) {}

  shouldRenderImg(img: RedditResult) {
    return Boolean(img.data.thumbnail.startsWith('https'));
  }
}
