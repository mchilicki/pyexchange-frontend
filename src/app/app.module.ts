import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePl from '@angular/common/locales/pl';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './components/nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HomeComponent } from './components/home/home.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { GoogleMapsModule } from '@angular/google-maps';
import { SidenavComponent } from './components/sidenav/sidenav.component';

import { CookieService } from 'ngx-cookie-service';
import { CurrencyTableComponent } from './components/currencies/currency-table/currency-table.component';
import { CurrencyService } from './services/currency.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RegisterComponent } from './components/users/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from './services/user.service';
import { SnackbarService } from './services/infrastructure/snack-bar.service';
import { LoginComponent } from './components/users/login/login.component';
import { AuthService } from './services/auth.service';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { VisiblePipe } from './pipes/visible.pipe';
import { AccountComponent } from './components/account/account.component';
import { CurrencyPageComponent } from './components/currencies/currency-page/currency-page.component';
import { AccountCurrencyTableComponent } from './components/account/account-currency-table/account-currency-table.component';
import { CurrencyDialogComponent } from './components/dialogs/currency-dialog/currency-dialog.component';
import { MapComponent } from './components/map/map.component';
import { MAT_HAMMER_OPTIONS } from '@angular/material/core';


registerLocaleData(localePl, 'pl');

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    SidenavComponent,
    CurrencyTableComponent,
    CurrencyPageComponent,
    RegisterComponent,
    LoginComponent,
    VisiblePipe,
    AccountComponent,
    AccountCurrencyTableComponent,
    CurrencyDialogComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatDialogModule,
    GoogleMapsModule
  ],
  providers: [CookieService, CurrencyService, UserService, SnackbarService, AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: LOCALE_ID, useValue: 'pl' },
    {
      provide: MAT_HAMMER_OPTIONS,
      useValue: {
        cssProps: {
          userSelect: true
        }
      }
    }
  ],
  bootstrap: [AppComponent],
  entryComponents: [CurrencyDialogComponent]
})
export class AppModule { }
