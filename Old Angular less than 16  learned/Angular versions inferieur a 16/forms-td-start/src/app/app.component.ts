import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  submited = false;
  subscriptionList = ['Basic', 'Advanced', 'Pro'];
  selectedSubscription = this.subscriptionList[1];
  data = {
    email: '',
    subscription: '',
    password: '',
  };
  @ViewChild('form') formData: NgForm;

  onSubmit() {
    this.data.email = this.formData.value.email;
    this.data.subscription = this.formData.value.subscription;
    this.data.password = this.formData.value.password;
    this.submited = true;
  }
}
