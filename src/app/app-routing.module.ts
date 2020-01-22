import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/users/register/register.component';
import { LoginComponent } from './components/users/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { AccountComponent } from './components/account/account.component';
import { CurrencyPageComponent } from './components/currencies/currency-page/currency-page.component';
import { MapComponent } from './components/map/map.component';


const routes: Routes = [
  { path: '', component: CurrencyPageComponent, pathMatch: 'full' },
  { path: 'currencies', component: CurrencyPageComponent },
  { path: 'map', component: MapComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'account', component: AccountComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
