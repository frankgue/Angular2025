import { Injectable, signal } from '@angular/core';
import { AnnualData } from './annual-data.model';
import { UserInvestmentInput } from './user-investment-input.model';

@Injectable({
  providedIn: 'root',
})
export class InvestmentService {
  // private annualData: AnnualData[] = [];
  private annualDataResults = signal<AnnualData[]>([]);
  constructor() {}

  getAnnualData() {
    return this.annualDataResults();
  }

  calculateInvestment(userData: UserInvestmentInput): AnnualData[] {
    const { initialInvestment, annualInvestment, expectedReturn, duration } = userData;
    let investmentValue = initialInvestment;
    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      const annualDataValue: AnnualData = {
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      };
      this.annualDataResults
      .set([...this.annualDataResults(), annualDataValue]);
    }

    return this.annualDataResults();
  }
}
