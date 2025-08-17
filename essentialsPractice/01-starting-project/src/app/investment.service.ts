import { Injectable } from '@angular/core';
import { AnnualData } from './annual-data.model';

@Injectable({
  providedIn: 'root',
})
export class InvestmentService {
  private annualData: AnnualData[] = [];
  constructor() {}

  getAnnualData() {
    return this.annualData;
  }

  calculateInvestment(
    initialInvestment: number,
    annualInvestment: number,
    expectedReturn: number,
    duration: number
  ): AnnualData[] {
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
      this.annualData.push(annualDataValue);
    }

    return this.annualData;
  }
}
