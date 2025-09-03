import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  activeToInactiveCount: number = 0;
  inactiveToActiveCount: number = 0;

  constructor() { }

  activeToIactive(){
    this.activeToInactiveCount++;
    console.log("Active -> Inactive ", this.activeToInactiveCount);
  }

  inactiveToActive(){
    this.inactiveToActiveCount++;
    console.log("Inactive to Active  ", this.inactiveToActiveCount);
  }

}
