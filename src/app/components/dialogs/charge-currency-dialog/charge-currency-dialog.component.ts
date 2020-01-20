import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Currency } from 'src/app/models/currency/currency';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-charge-currency-dialog',
  templateUrl: './charge-currency-dialog.component.html',
  styleUrls: ['./charge-currency-dialog.component.scss']
})
export class ChargeCurrencyDialogComponent implements OnInit {
  form: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) public data: Currency) {
    this.form = new FormGroup({
      amount: new FormControl(0, [Validators.required, Validators.min(1)])
    });
  }

  ngOnInit() {
  }

}
