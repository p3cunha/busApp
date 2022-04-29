import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RedditResult } from 'src/app/interfaces/reddit.interface';
import { RedditService } from 'src/app/core/services/reddit.service';

@Component({
  selector: 'reddit-search-wo-rxjs',
  templateUrl: './reddit-search-wo-rxjs.component.html',
  styleUrls: ['./reddit-search-wo-rxjs.component.scss'],
})
export class RedditSearchWithoutRxJSComponent implements OnInit {
  results = new Array<any>();

  constructor(private service: RedditService) {}

  ngOnInit(): void {}

  shouldRenderImg(img: RedditResult) {
    return Boolean(img.data.thumbnail.startsWith('https'));
  }

  doSearch({ target }: KeyboardEvent) {
    const { value } = target as HTMLInputElement;
    this.service.search(value).subscribe(({ data: { children } }) => {
      this.results = [...children];
    });
  }


}
