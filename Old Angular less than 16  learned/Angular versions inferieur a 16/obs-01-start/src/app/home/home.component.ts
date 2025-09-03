import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs-compat';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  private subscription: Subscription;
  constructor() {}

  ngOnInit() {
    //  this.subscription = interval(1000).subscribe((count) => console.log(count));
    const customIntervalObservable = Observable.create((observer) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if (count === 2) {
          observer.complete();
        }
        if (count > 3) {
          observer.error(new Error('count is greater 3!'));
        }
        count++;
      }, 1000);
    });
    this.subscription = customIntervalObservable.subscribe(
      (count) => {
        console.log(count);
      },
      (error) => {
        console.log(error);
        alert(error.message);
      },
      () => {
        console.log('Completed!');
      }
    );

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
