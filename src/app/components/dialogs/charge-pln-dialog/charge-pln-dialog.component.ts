import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-charge-pln-dialog',
  templateUrl: './charge-pln-dialog.component.html',
  styleUrls: ['./charge-pln-dialog.component.scss']
})
export class ChargePlnDialogComponent implements OnInit {
  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      amount: new FormControl(0, [Validators.required, Validators.min(1)])
    });
  }

  ngOnInit() {
  }

}
