import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { UserCurrency } from 'src/app/models/user/user-currency';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-account-currency-table',
  templateUrl: './account-currency-table.component.html',
  styleUrls: ['./account-currency-table.component.scss']
})
export class AccountCurrencyTableComponent implements OnInit, OnDestroy {
  @Input() data: UserCurrency[] = [];
  columnsToDisplay = [];
  private mediaWatcher: Subscription;
  private currentScreenBreakpoint = '';

  constructor(private mediaObserver: MediaObserver) {
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
}
