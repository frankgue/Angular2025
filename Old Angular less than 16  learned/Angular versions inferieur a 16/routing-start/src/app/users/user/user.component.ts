import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: {id: number, name: string};
  subscription: Subscription;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.user = {
      id: this.route.params['id'],
      name: this.route.snapshot.params['name']
    };
    this.subscription = this.route.params.subscribe(
      (params: Params) => {
        this.user = {
          id: params['id'],
          name: params['name'],
        }
      }
    );
  
  }

  ngOnDestroy(): void {
   this.subscription.unsubscribe();
    
  }

}
