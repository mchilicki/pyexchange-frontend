import { Component, OnInit, Input, OnDestroy, Output } from '@angular/core';
import { UserCurrency } from 'src/app/models/user/user-currency';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription, Subject } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { Currency } from 'src/app/models/currency/currency';
import { CurrencyService } from 'src/app/services/currency.service';
import { CurrencyAmount } from 'src/app/models/currency/currency-amount';
import { defaults } from 'src/app/common/defaults';
import { SnackbarService } from 'src/app/services/infrastructure/snack-bar.service';
import { OperationType } from 'src/app/common/operation-type';
import { CurrencyDialogComponent } from '../../dialogs/currency-dialog/currency-dialog.component';

@Component({
  selector: 'app-account-currency-table',
  templateUrl: './account-currency-table.component.html',
  styleUrls: ['./account-currency-table.component.scss']
})
export class AccountCurrencyTableComponent implements OnInit, OnDestroy {
  @Input() data: UserCurrency[] = [];
  @Output() changed = new Subject();
  columnsToDisplay = [];
  defaults = defaults;
  private mediaWatcher: Subscription;
  private currentScreenBreakpoint = '';

  constructor(private currencyService: CurrencyService,
              private snackBarService: SnackbarService,
              private mediaObserver: MediaObserver,
              private dialog: MatDialog) {
    this.mediaWatcher = mediaObserver.media$.subscribe((change: MediaChange) => {
      if (change.mqAlias !== this.currentScreenBreakpoint) {
        this.currentScreenBreakpoint = change.mqAlias;
        this.setupTable();
      }
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.mediaWatcher.unsubscribe();
  }

  setupTable() {
    if (['xs', 'sm'].includes(this.currentScreenBreakpoint)) {
      this.columnsToDisplay = ['amount', 'purchase_price', 'sell_price', 'actions'];
    } else {
      this.columnsToDisplay = ['amount', 'unit', 'purchase_price', 'sell_price', 'actions'];
    }
  }

  openChargeForeignCurrencyDialog(currency: Currency) {
    const dialogRef = this.dialog.open(CurrencyDialogComponent, {
      data: {
        operationType: OperationType.CHARGE,
        currency
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.currencyService.chargeForeignCurrency(currency.id, result as CurrencyAmount).subscribe(user => {
          this.data = user.currencies;
          this.snackBarService.openSnackBar(`Account charged for ${result.amount} ${currency.code}`);
          this.changed.next();
        }, error => {
          this.snackBarService.openSnackBar(error.error.error, 'Dismiss', true);
        });
      }
    });
  }

  openBuyCurrencyDialog(currency: Currency) {
    const dialogRef = this.dialog.open(CurrencyDialogComponent, {
      data: {
        operationType: OperationType.BUY,
        currency
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.currencyService.buyCurrency(currency.id, result as CurrencyAmount).subscribe(user => {
          this.data = user.currencies;
          this.snackBarService.openSnackBar(`You've bought ${result.amount} ${currency.code}`);
          this.changed.next();
        }, error => {
          this.snackBarService.openSnackBar(error.error.error, 'Dismiss', true);
        });
      }
    });
  }

  openSellCurrencyDialog(currency: Currency) {
    const dialogRef = this.dialog.open(CurrencyDialogComponent, {
      data: {
        operationType: OperationType.SELL,
        currency
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.currencyService.sellCurrency(currency.id, result as CurrencyAmount).subscribe(user => {
          this.data = user.currencies;
          this.snackBarService.openSnackBar(`You've sold ${result.amount} ${currency.code}`);
          this.changed.next();
        }, error => {
          this.snackBarService.openSnackBar(error.error.error, 'Dismiss', true);
        });
      }
    });
  }
}
