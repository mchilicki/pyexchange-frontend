import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user/user';
import { MatDialog } from '@angular/material/dialog';
import { CurrencyService } from 'src/app/services/currency.service';
import { CurrencyAmount } from 'src/app/models/currency/currency-amount';
import { defaults } from 'src/app/common/defaults';
import { SnackbarService } from 'src/app/services/infrastructure/snack-bar.service';
import { OperationType } from 'src/app/common/operation-type';
import { CurrencyDialogComponent } from '../dialogs/currency-dialog/currency-dialog.component';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  user: User;
  defaults = defaults;

  constructor(private userService: UserService,
              private currencyService: CurrencyService,
              private snackBarService: SnackbarService,
              private dialog: MatDialog) { }

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this.userService.get().subscribe(data => {
      this.user = data;
    });
  }

  openChargePlnDialog() {
    const dialogRef = this.dialog.open(CurrencyDialogComponent, {
      data: {
        operationType: OperationType.CHARGE,
        currency: defaults.currency
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.currencyService.chargePln(result as CurrencyAmount).subscribe(data => {
          this.user = data;
          this.snackBarService.openSnackBar(`Account charged for ${result.amount} ${defaults.currency.code}`);
        }, error => {
          this.snackBarService.openSnackBar(error.error.error, 'Dismiss', true);
        });
      }
    });
  }

}
