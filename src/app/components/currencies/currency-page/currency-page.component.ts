import { Component, OnInit } from '@angular/core';
import { CurrencyListItem } from 'src/app/models/currency/currency-list-item';
import { CurrencyService } from 'src/app/services/currency.service';

@Component({
  selector: 'app-currency-page',
  templateUrl: './currency-page.component.html',
  styleUrls: ['./currency-page.component.scss']
})
export class CurrencyPageComponent implements OnInit {
  data: CurrencyListItem[] = [];

  constructor(private currencyService: CurrencyService) { }

  ngOnInit() {
    this.currencyService.getCurrencies().subscribe(data => {
      this.data = data;
    });
  }

}
