import { Component, Input } from '@angular/core';
import { AnnualData } from '../annual-data.model';
import { InvestmentService } from '../investment.service';
import { CurrencyPipe, DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe, DecimalPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {

  @Input() annualData: AnnualData[] = [];



  // constructor(private investmentService: InvestmentService) {}

  // ngOnInit() {
  //   this.annualData = this.investmentService.getAnnualData();
  // }
  
}
