import { Component, OnInit, Input } from '@angular/core';
import { CurrencyListItem } from 'src/app/models/currency/currency-list-item';
import { defaults } from 'src/app/common/defaults';
import { MatDialog } from '@angular/material/dialog';
import { CurrencyDialogComponent } from '../../dialogs/currency-dialog/currency-dialog.component';
import { OperationType } from 'src/app/common/operation-type';
import { Currency } from 'src/app/models/currency/currency';
import { CurrencyService } from 'src/app/services/currency.service';
import { CurrencyAmount } from 'src/app/models/currency/currency-amount';
import { SnackbarService as SnackBarService } from 'src/app/services/infrastructure/snack-bar.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-currency-table',
  templateUrl: './currency-table.component.html',
  styleUrls: ['./currency-table.component.scss']
})
export class CurrencyTableComponent implements OnInit {
  @Input() data: CurrencyListItem[] = [];
  private loggedIn = false;
  columnsToDisplay = [];
  defaults = defaults;

  constructor(private currencyService: CurrencyService,
              private snackBarService: SnackBarService,
              private authService: AuthService,
              private dialog: MatDialog) { }

  ngOnInit() {
    this.authService.isLoggedIn.subscribe(isAuthenticated => {
      this.loggedIn = isAuthenticated;
      this.setupTable();
    });
  }

  setupTable() {
    if (this.loggedIn) {
      this.columnsToDisplay = ['name', 'code', 'unit', 'purchase_price', 'actions'];
    } else {
      this.columnsToDisplay = ['name', 'code', 'unit', 'purchase_price'];
    }
  }

  openBuyCurrencyDialog(currency: CurrencyListItem) {
    const dialogRef = this.dialog.open(CurrencyDialogComponent, {
      data: {
        operationType: OperationType.BUY,
        currency: currency as Currency
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.currencyService.buyCurrency(currency.id, result as CurrencyAmount).subscribe(user => {
          this.snackBarService.openSnackBar(`You've bought ${result.amount} ${currency.code}`);
        }, error => {
          this.snackBarService.openSnackBar(error.error.error, 'Dismiss', true);
        });
      }
    });
  }
}
