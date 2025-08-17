import { Component, Input, signal, Signal } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';
import { InvestmentResultsComponent } from './investment-results/investment-results.component';
import { AnnualData } from './annual-data.model';
import { InvestmentService } from './investment.service';
import type { UserInvestmentInput } from './user-investment-input.model';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, UserInputComponent, InvestmentResultsComponent],
})
export class AppComponent {
  @Input({ required: true }) userData!: UserInvestmentInput;

  @Input() annualDataCalculated: AnnualData[] = [];

  onUserInvestmentAvailable(annualData: AnnualData[]) {
    this.annualDataCalculated = annualData;
  }

  annualData: AnnualData[] = [];

  constructor(private investmentService: InvestmentService) {}

  ngOnInit() {
    this.annualData = this.investmentService.getAnnualData();
  }
}
