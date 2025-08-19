import { Component, input, output, signal } from '@angular/core';
import { Ticket } from './ticket.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
  ticketData = input.required<Ticket>();
  detailsVisible = signal(false);

  close = output<string>();

  onToggleDetails(): void {
    this.detailsVisible.update((wasVisivle) => !wasVisivle);
  }

  onMarkAsCompleted(): void {
    this.close.emit(this.ticketData().id);
  }
  
}
