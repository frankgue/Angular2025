import { Component } from '@angular/core';
import { Server } from './server.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  serverElements: Server[] = [
    { type: 'server', name: 'Test Server 2', content: 'Just a test!' },
  ];

  onServerAdded(eventData: { serverName: string; serverContent: string }) {
    this.serverElements.push({
      type: 'server',
      name: eventData.serverName,
      content: eventData.serverContent,
    });
  }

  onBlueprintAdded(eventData: { serverName: string; serverContent: string }) {
    this.serverElements.push({
      type: 'blueprint',
      name: eventData.serverName,
      content: eventData.serverContent,
    });
  }

  onFirstChange() {
    this.serverElements[0].name = 'Changed';
  }

  onFirstDestroy() {
    this.serverElements.splice(0, 1);
  }
}
