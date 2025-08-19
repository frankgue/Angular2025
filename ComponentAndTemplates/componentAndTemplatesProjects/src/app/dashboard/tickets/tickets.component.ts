import { Component } from '@angular/core';
import { NewTicketComponent } from "./new-ticket/new-ticket.component";
import { Ticket } from './ticket/ticket.model';
import { TicketComponent } from "./ticket/ticket.component";

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [NewTicketComponent, TicketComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css',
  host: {
    id: "tickets"
  }
})
export class TicketsComponent {

  tickets: Ticket[] = [];


  onAddTicket(data: { title: string; request: string }): void {
    const newTicket: Ticket = {
      id: Math.random().toString(36).substring(2, 9),
      title: data.title,
      request: data.request,
      status: 'open'
    };
    this.tickets.push(newTicket);
  }

  onCloseTicket(ticketId: string) {
    this.tickets = this.tickets.map(ticket =>{
      if (ticket.id === ticketId) {
        return { ...ticket, status: 'closed' };
      }
      return ticket;
    })
  }

}
