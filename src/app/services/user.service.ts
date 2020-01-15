import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user/user';
import { UserUpsert } from '../models/user/user-upsert';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = `${environment.api}/users`;

  constructor(private client: HttpClient) { }

  register(user: UserUpsert): Observable<User> {
    return this.client.post<User>(`${this.url}/register/`, user);
  }
}
