import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Server } from '../server.model';

type EventData = {serverName: string, serverContent: string};

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.css',
})
export class CockpitComponent {
  // newServerName = '';
  // newServerContent = '';

  @ViewChild('serverContentInput') serverContentInput: ElementRef;

  @Output() serverCreated = new EventEmitter<EventData>();
  @Output() bluePrintCreated = new EventEmitter<EventData>();

  onAddServer(serverNameInput) {
    // console.log(this.serverContentInput.nativeElement.value);
  
    this.serverCreated.emit({serverName:  serverNameInput.value, serverContent: this.serverContentInput.nativeElement.value})
  }

  onAddBlueprint(serverNameInput) {
    this.bluePrintCreated.emit({serverName:  serverNameInput.value, serverContent: this.serverContentInput.nativeElement.value})
  }
}
