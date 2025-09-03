import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrl: './game-control.component.css',
})
export class GameControlComponent {

  @Output() incNumberInterval = new EventEmitter<number>();
  lastNumber = 0;
  intervalRef;

  onStartGame() {
    this.intervalRef = setInterval(() => {
      this.lastNumber++;
      this.incNumberInterval.emit(this.lastNumber);
    }, 1000);
  }

  onStopGame() {
    clearInterval(this.intervalRef);
  }
}
