import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { CurrencyListItem } from '../models/currency/currency-list-item';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  private url = `${environment.api}/currencies`;

  constructor(private client: HttpClient) { }

  getCurrencies(): Observable<CurrencyListItem[]> {
    return this.client.get<CurrencyListItem[]>(this.url);
  }
}
