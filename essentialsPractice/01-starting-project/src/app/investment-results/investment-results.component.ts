import { Component, computed } from '@angular/core';
import { InvestmentService } from '../investment.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-investment-results',
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {

  constructor(private investmentService: InvestmentService) {}

  get annualDataResults() {
    return this.investmentService.getAnnualData();
  }

  ngOnInit() {
    computed(() => this.annualDataResults);
  }
}
