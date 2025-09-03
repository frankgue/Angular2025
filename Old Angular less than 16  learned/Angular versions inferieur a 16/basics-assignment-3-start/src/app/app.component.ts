import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  display = false;
  logs: string[] = [];

  onToggleDetails(){
    this.display = !this.display;
    const log = new Date().toISOString();
    this.logs.push(log);
  }
}
