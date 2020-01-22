import { Component, OnInit, Input } from '@angular/core';
import { NavItem } from 'src/app/models/infrastructure/nav-item';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  private loggedIn = false;
  navItems: NavItem[] = [];

  @Input() showLabels = true;

  constructor(private authService: AuthService,
              private router: Router) {
  }

  ngOnInit() {
    this.authService.isLoggedIn.subscribe(isAuthenticated => {
      this.loggedIn = isAuthenticated;
      this.getNavItems();
    });
  }

  getNavItems() {
    this.navItems = [
      new NavItem({ name: 'Currency table', icon: 'attach_money', path: 'currencies' }),
      new NavItem({ name: 'Agency locator', icon: 'near_me', path: 'map' }),
      new NavItem({ name: 'My account', icon: 'person', path: 'account', visible: this.loggedIn }),
      new NavItem({ name: 'Sign in', icon: 'exit_to_app', path: 'login', visible: !this.loggedIn }),
      new NavItem({ name: 'Sign out', icon: 'power_settings_new', action: () => this.logout(), visible: this.loggedIn }),
      new NavItem({ name: 'Sign up', icon: 'person_add', path: 'register', visible: !this.loggedIn })
    ];
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
