import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { InstaFeed } from './common/model';
@Injectable({
  providedIn: 'root',
})
export class InstaService {
  private readonly MOCK_URL = 'assets/mock/data.json';
  private readonly FEED_URL = 'http://starlord.hackerearth.com/insta';
  constructor(private http: HttpClient) {}

  getInstaFeeds = (): Observable<InstaFeed[]> => {
    return this.http.get<InstaFeed[]>(`${this.FEED_URL}`).pipe(
      map((res) => res),
      catchError((err) => {
        return throwError(err);
      })
    );
  }
}
