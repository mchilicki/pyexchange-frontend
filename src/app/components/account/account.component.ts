import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user/user';
import { MatDialog } from '@angular/material/dialog';
import { ChargePlnDialogComponent } from '../dialogs/charge-pln-dialog/charge-pln-dialog.component';
import { CurrencyService } from 'src/app/services/currency.service';
import { CurrencyAmount } from 'src/app/models/currency/currency-amount';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  user: User;

  constructor(private userService: UserService,
              private currencyService: CurrencyService,
              private dialog: MatDialog) { }

  ngOnInit() {
    this.userService.get().subscribe(data => {
      this.user = data;
    });
  }

  openChargePlnDialog() {
    const dialogRef = this.dialog.open(ChargePlnDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.currencyService.chargePln(result as CurrencyAmount).subscribe(data => {
          this.user = data;
        });
      }
    });
  }

}
