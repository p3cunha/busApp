import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RedditResponse } from 'src/app/interfaces/reddit.interface';

@Injectable({ providedIn: 'root' })
export class RedditService {
  constructor(private http: HttpClient) {}

  search(value: string) {
    return this.http.get<RedditResponse>(
      `https://www.reddit.com/r/wallpaper/search.json?restrict_sr=on&q=${value}&sort=comment&limit=50`
    );
  }

  subRedditSearch(subReddit: string, search: string) {
    return this.http.get<RedditResponse>(
      `https://www.reddit.com/r/${subReddit}/search.json?restrict_sr=on&q=${search}&sort=comment&limit=50`
    );
  }
}
