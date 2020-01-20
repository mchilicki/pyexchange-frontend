import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, tap } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { TokenData } from '../models/auth/token-data';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly JWT_TOKEN = 'JWT_TOKEN';
  private readonly REFRESH_TOKEN = 'REFRESH_TOKEN';

  private url = environment.api;
  private tokenSubject: BehaviorSubject<string>;

  constructor(private client: HttpClient) {
    this.tokenSubject = new BehaviorSubject<string>(this.getJwtToken());
  }

  public get tokenValue(): string {
    return this.tokenSubject.value;
  }

  public get isLoggedIn(): Observable<boolean> {
    return this.tokenSubject.pipe(map(token => token !== null));
  }

  login(username: string, password: string) {
    return this.client.post<TokenData>(`${this.url}/token`, { username, password })
      .pipe(tap(tokenData => {
        if (tokenData && tokenData.access && tokenData.refresh) {
          this.storeTokens(tokenData);
          this.tokenSubject.next(tokenData.access);
        }
      }));
  }

  logout() {
    this.removeTokens();
    this.tokenSubject.next(null);
  }

  refreshToken() {
    return this.client.post<TokenData>(`${this.url}/refresh`, {
      refresh: this.getRefreshToken()
    }).pipe(tap((tokenData: TokenData) => {
      this.storeJwtToken(tokenData.access);
    }));
  }

  private storeJwtToken(token: string) {
    localStorage.setItem(this.JWT_TOKEN, token);
  }

  private storeTokens(tokenData: TokenData) {
    localStorage.setItem(this.JWT_TOKEN, tokenData.access);
    localStorage.setItem(this.REFRESH_TOKEN, tokenData.refresh);
  }

  private getJwtToken() {
    return localStorage.getItem(this.JWT_TOKEN);
  }

  private getRefreshToken() {
    return localStorage.getItem(this.REFRESH_TOKEN);
  }

  private removeTokens() {
    localStorage.removeItem(this.JWT_TOKEN);
    localStorage.removeItem(this.REFRESH_TOKEN);
  }
}
