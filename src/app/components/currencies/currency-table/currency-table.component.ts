import { Component, OnInit, Input } from '@angular/core';
import { CurrencyListItem } from 'src/app/models/currency/currency-list-item';
import { defaults } from 'src/app/common/defaults';

@Component({
  selector: 'app-currency-table',
  templateUrl: './currency-table.component.html',
  styleUrls: ['./currency-table.component.scss']
})
export class CurrencyTableComponent implements OnInit {
  @Input() data: CurrencyListItem[] = [];
  columnsToDisplay = ['name', 'code', 'unit', 'purchase_price', 'actions'];
  defaults = defaults;

  constructor() { }

  ngOnInit() { }

}
