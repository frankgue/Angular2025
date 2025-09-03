import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  evenNumvers: number[] = [];
  oddNumvers: number[] = [];

  onStoreEvenAndOddNumber(value: number){
    if(value % 2 === 0){
      this.evenNumvers.push(value)
    }else{
      this.oddNumvers.push(value);
    }
  }
}
