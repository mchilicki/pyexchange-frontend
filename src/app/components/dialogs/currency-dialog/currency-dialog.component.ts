import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Currency } from 'src/app/models/currency/currency';
import { OperationType } from 'src/app/common/operation-type';
import { defaults } from 'src/app/common/defaults';

@Component({
  selector: 'app-currency-dialog',
  templateUrl: './currency-dialog.component.html',
  styleUrls: ['./currency-dialog.component.scss']
})
export class CurrencyDialogComponent implements OnInit {
  form: FormGroup;
  operationType = OperationType;
  defaults = defaults;

  constructor(@Inject(MAT_DIALOG_DATA) public data: {operationType: OperationType, currency: Currency}) {
    this.form = new FormGroup({
      amount: new FormControl(0, [Validators.required, Validators.min(1)])
    });
  }

  ngOnInit() {
  }
}
