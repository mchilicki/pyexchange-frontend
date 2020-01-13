import { Component, OnInit, Input } from '@angular/core';
import { NavItem } from 'src/app/models/infrastructure/nav-item';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  navItems: NavItem[] = [
    new NavItem('Home', 'home', ''),
    new NavItem('Currency table', 'attach_money', 'currencies'),
    new NavItem('My account', 'person', 'account'),
    new NavItem('Sign in', 'exit_to_app', 'login'),
    new NavItem('Sign out', 'power_settings_new', 'logout', false)
  ];

  @Input() showLabels = true;

  constructor() { }

  ngOnInit() {
  }

  getVisibleNavItems(): NavItem[] {
    return this.navItems.filter(x => x.visible);
  }
}
