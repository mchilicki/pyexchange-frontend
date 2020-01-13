import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pyexchange';
  sidenavOpened = false;

  constructor(private cookieService: CookieService) {
    this.sidenavOpened = this.cookieService.get('sidenavOpened') === 'true';
  }

  openSidenav() {
    this.sidenavOpened = !this.sidenavOpened;
    this.cookieService.set('sidenavOpened', String(this.sidenavOpened));
  }
}
