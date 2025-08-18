import { Component, signal } from '@angular/core';
import { InvestmentService } from '../investment.service';
import type { UserInvestmentInput } from '../user-investment-input.model';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  enteredInitialInvestment = signal(0);
  enteredAnnualInvestment = signal(0);
  enteredExpectedReturn = signal(5);
  enteredDuration = signal(10);

  constructor(private investmentService: InvestmentService) {}

  onSubmit() {
    const userInvestment: UserInvestmentInput = {
      initialInvestment: this.enteredInitialInvestment(),
      annualInvestment: this.enteredAnnualInvestment(),
      expectedReturn: this.enteredExpectedReturn(),
      duration: this.enteredDuration(),
    };
    this.investmentService.calculateInvestment(userInvestment);
    this.resetForm();
  }

  resetForm() {
    this.enteredInitialInvestment.set(0);
    this.enteredAnnualInvestment.set(0);
    this.enteredExpectedReturn.set(0);
    this.enteredDuration.set(0);
  }
}
