import { Component, OnInit } from '@angular/core';
import { CurrencyListItem } from 'src/app/models/currency/currency-list-item';
import { CurrencyService } from 'src/app/services/currency.service';

@Component({
  selector: 'app-currency-table',
  templateUrl: './currency-table.component.html',
  styleUrls: ['./currency-table.component.scss']
})
export class CurrencyTableComponent implements OnInit {
  data: CurrencyListItem[] = [];
  columnsToDisplay = ['name', 'code', 'unit', 'purchase_price'];

  constructor(private currencyService: CurrencyService) { }

  ngOnInit() {
    this.currencyService.getCurrencies().subscribe(data => {
      this.data = data.results;
    });
  }

}
