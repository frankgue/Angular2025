import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
  host: {
    id: 'status',
  },
})
export class ServerStatusComponent implements OnInit {
  currentStatus: 'online' | 'offline' | 'unknown' = 'online';

  constructor() {}

  ngOnInit(): void {
    setInterval(() => {
      const random = Math.random(); // 0 - 0.9999999999999999999

      if (random < 0.5) {
        this.currentStatus = 'online';
      } else if (random < 0.9) {
        this.currentStatus = 'offline';
      } else {
        this.currentStatus = 'unknown';
      }
    }, 5000);
  }
}
