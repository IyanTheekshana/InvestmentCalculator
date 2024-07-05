import { Component, computed, input } from '@angular/core';
import { AnnualData } from '../../data.model';
import { InvestmentService } from '../investments.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  constructor(private service: InvestmentService) {}

  results = this.service.resultData.asReadonly();
}
