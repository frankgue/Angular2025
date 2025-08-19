import { Component, ContentChild, ElementRef, EventEmitter, output, Output, viewChild, ViewChild } from '@angular/core';
import { ButtonComponent } from "../../../shared/button/button.component";
import { ControlComponent } from "../../../shared/control/control.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {

  @ViewChild('form') private form?: ElementRef<HTMLFormElement>;
  // private form = viewChild.required<ElementRef<HTMLFormElement>>('form');
  // @Output() private add = new EventEmitter<{ title: string; request: string }>();
  add = output<{ title: string; request: string }>();

  enteredTitle = '';
  enteredRequest = '';

  ngOnInit(): void {
    console.log("ON INIT");

    console.log(this.form?.nativeElement);
  }

  ngAfterViewInit(): void {
    console.log("AFTER VIEW INIT");
    console.log(this.form?.nativeElement);

  }

  onSubmit(): void {
    this.add.emit({title: this.enteredTitle, request: this.enteredRequest });
    this.form?.nativeElement.reset();
  }
}
