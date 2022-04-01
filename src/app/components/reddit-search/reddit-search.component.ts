import { HttpClient } from '@angular/common/http';
import {
  debounceTime,
  startWith,
  map,
  distinctUntilChanged,
  filter,
  switchMap,
  pluck,
  tap,
} from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { combineLatest, Observable, Subject } from 'rxjs';
import {
  RedditChildren,
  RedditResponse,
} from 'src/app/interfaces/reddit.interface';

@Component({
  selector: 'reddit-search',
  templateUrl: './reddit-search.component.html',
  styleUrls: ['./reddit-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RedditSearchComponent implements OnInit {
  hasFilter = false;

  //Com RxJS
  //Sem filtro
  search = new FormControl();
  images$: Observable<RedditChildren[]> = this.search.valueChanges.pipe(
    startWith(''),
    map((search) => search.trim()),
    debounceTime(200),
    distinctUntilChanged(),
    filter((search) => search !== ''),
    switchMap((search) =>
      this.http
        .get<RedditResponse>(
          `http://www.reddit.com/r/wallpaper/search.json?restrict_sr=on&q=${search}&sort=comment&limit=50`
        )
        .pipe(pluck('data', 'children'))
    )
  );

  //ComFiltro
  subReddit = new FormControl();
  subs = ['OnePiece', 'Movies', 'Pokemon', 'Anime', 'Space', 'Pics', 'Aww'];
  search$ = this.search.valueChanges.pipe(
    startWith(''),
    map((search) => search.trim()),
    debounceTime(200),
    distinctUntilChanged(),
    filter((search) => search !== '')
  );
  subReddit$ = this.subReddit.valueChanges.pipe(startWith(''));
  filteredImages$: Observable<RedditChildren[]> = combineLatest([
    this.subReddit$,
    this.search$,
  ]).pipe(
    switchMap(([subReddit, search]) =>
      this.http
        .get<RedditResponse>(
          `http://www.reddit.com/r/${subReddit}/search.json?restrict_sr=on&q=${search}&sort=comment&limit=50`
        )
        .pipe(pluck('data', 'children'))
    )
  );

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  shouldRenderImg(img: RedditChildren) {
    return Boolean(img.data.thumbnail.startsWith('https'));
  }
}
