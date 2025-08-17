import { Component, EventEmitter, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentService } from '../investment.service';
import { AnnualData } from '../annual-data.model';
import type { UserInvestmentInput } from '../user-investment-input.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  // @Output() annualDataCalculated = new EventEmitter<AnnualData[]>();
  @Output() userData = new EventEmitter<UserInvestmentInput>();


  enteredInitialInvestment= signal(0);
  enteredAnnualInvestment= signal(0);
  enteredExpectedReturn= signal(5);
  enteredDuration= signal(10);

  annualData: AnnualData[] = [];

  // constructor(private investmentService: InvestmentService) {}

  onSubmit() {
    const userInvestment: UserInvestmentInput = {
      initialInvestment: this.enteredInitialInvestment(),
      annualInvestment: this.enteredAnnualInvestment(),
      expectedReturn: this.enteredExpectedReturn(),
      duration: this.enteredDuration()  ,
    };
    this.userData.emit(userInvestment);
    // this.calculateInvestment();
    // this.annualData = this.investmentService.calculateInvestment(
    //   this.enteredInitialInvestment,
    //   this.enteredAnnualInvestment,
    //   this.enteredExpectedReturn,
    //   this.enteredDuration
    // );
    this.resetForm();

  }

  resetForm() {
    this.enteredInitialInvestment.set(0);
    this.enteredAnnualInvestment.set(0);
    this.enteredExpectedReturn.set(0);
    this.enteredDuration.set(0);
    this.annualData = [];
  }

  // calculateInvestment() {
  //   let investmentValue = this.enteredInitialInvestment;

  //   for (let i = 0; i < this.enteredDuration; i++) {
  //     const year = i + 1;
  //     const interestEarnedInYear =
  //       investmentValue * (this.enteredExpectedReturn / 100);
  //     investmentValue += interestEarnedInYear + this.enteredAnnualInvestment;
  //     const totalInterest =
  //       investmentValue -
  //       this.enteredAnnualInvestment * year -
  //       this.enteredInitialInvestment;
  //     this.annualData.push({
  //       year: year,
  //       interest: interestEarnedInYear,
  //       valueEndOfYear: investmentValue,
  //       annualInvestment: this.enteredAnnualInvestment,
  //       totalInterest: totalInterest,
  //       totalAmountInvested:
  //         this.enteredInitialInvestment + this.enteredAnnualInvestment * year,
  //     });
  //   }

  //   this.annualDataCalculated.emit(this.annualData);
  // }
}
