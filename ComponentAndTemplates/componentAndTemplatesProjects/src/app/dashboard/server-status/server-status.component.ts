import {
  Component,
  DestroyRef,
  effect,
  inject,
  OnDestroy,
  OnInit,
  signal,
} from '@angular/core';

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
  // currentStatus: 'online' | 'offline' | 'unknown' = 'online';
  currentStatus = signal<'online' | 'offline' | 'unknown'>('online');

  private destroyRef = inject(DestroyRef);
  private interval: ReturnType<typeof setInterval> = setInterval(() => {});

  constructor() {
    effect(() => {
      console.log(this.currentStatus());
    });
  }

  ngOnInit(): void {

    this.interval = setInterval(() => {
      const random = Math.random(); // 0 - 0.9999999999999999999

      if (random < 0.5) {
        this.currentStatus.set('online');
      } else if (random < 0.9) {
        this.currentStatus.set('offline');
      } else {
        this.currentStatus.set('unknown');
      }
    }, 5000);

    this.destroyRef.onDestroy(() => {
      clearInterval(this.interval);
    });
  }


  ngOnDestroy(): void {
    console.log('ON DESTROY');
    clearInterval(this.interval);
  }
}
