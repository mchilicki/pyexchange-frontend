import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { CurrencyListItem } from '../models/currency/currency-list-item';
import { Observable } from 'rxjs';
import { CurrencyAmount } from '../models/currency/currency-amount';
import { User } from '../models/user/user';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  private url = `${environment.api}/currencies`;

  constructor(private client: HttpClient) { }

  getCurrencies(): Observable<CurrencyListItem[]> {
    return this.client.get<CurrencyListItem[]>(this.url);
  }

  chargePln(amount: CurrencyAmount): Observable<User> {
    return this.client.post<User>(`${this.url}/charge_pln/`, amount);
  }

  chargeForeignCurrency(id: number, amount: CurrencyAmount): Observable<User> {
    return this.client.post<User>(`${this.url}/${id}/charge_foreign_currency/`, amount);
  }
}
