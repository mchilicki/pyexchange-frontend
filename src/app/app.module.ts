import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
import { SidenavComponent } from './components/sidenav/sidenav.component';

import { CookieService } from 'ngx-cookie-service';
import { CurrencyTableComponent } from './components/currencies/currency-table/currency-table.component';
import { CurrencyService } from './services/currency.service';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './components/users/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from './services/user.service';
import { SnackbarService } from './services/infrastructure/snack-bar.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    SidenavComponent,
    CurrencyTableComponent,
    RegisterComponent
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
    MatSnackBarModule
  ],
  providers: [CookieService, CurrencyService, UserService, SnackbarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
