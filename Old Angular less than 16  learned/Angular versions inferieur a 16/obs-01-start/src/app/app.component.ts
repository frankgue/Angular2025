import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from './user/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  activated: boolean;
  private activaredSub: Subscription;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.activaredSub = this.userService.activatedEventEmitter.subscribe(
      (isActivated) => {
        console.log(isActivated);
        this.activated = isActivated;
      }
    );
  }

  ngOnDestroy(): void {
    this.activaredSub.unsubscribe();
  }
}
