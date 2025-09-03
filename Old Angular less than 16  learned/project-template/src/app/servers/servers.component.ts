import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css',
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverName = 'Test Server';
  serverList = ['Test Server', 'Preprod Server', 'Prod Server'];
  serverCreationStatus = 'No server was created';

  serverCreated = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.serverList.push(this.serverName);
    this.serverCreationStatus = 'A new server was created! Name is ' + this.serverName;
  }
  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
    
  }
}
