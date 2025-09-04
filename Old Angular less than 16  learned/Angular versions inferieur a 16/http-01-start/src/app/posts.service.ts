import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { catchError, map, tap } from 'rxjs/operators';
import { Subject, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  errorHandling = new Subject<string>();
  url: string = 'https://ng-complete-guide-45e3e-default-rtdb.firebaseio.com/';

  constructor(private http: HttpClient) {}

  createAndStorePost(title: string, content: string) {
    const postData: Post = { title, content };
    this.http
      .post<{ name: string }>(this.url + 'posts.json', postData, {
        observe: 'response'
      })
      .subscribe(
        (responseData) => {
          console.log(responseData);
        },
        (error) => {
          this.errorHandling.next(error.message);
        }
      );
  }

  fetchPosts() {
    let searchParams = new HttpParams();
    searchParams = searchParams.append('print', 'pretty');
    // searchParams = searchParams.append('custom', 'key');
    // searchParams = searchParams.append('page', 5);
    return this.http
      .get<{ [key: string]: Post }>(this.url + 'posts.json', {
        headers: new HttpHeaders({
          'Customer-Header': 'hello',
        }),
        params: searchParams,
      })
      .pipe(
        map((responseData) => {
          const postArray: Post[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postArray.push({ ...responseData[key], id: key });
            }
          }
          return postArray;
        }),
        catchError((errorResponse) => {
          //Send to analytics server
          return throwError(errorResponse);
        })
      );
  }
  deletePosts() {
    return this.http.delete(this.url + 'posts.json', {
      observe: 'events'
    }).pipe(
      tap(event => {
        console.log(event);
        
      })
    );
  }
}
