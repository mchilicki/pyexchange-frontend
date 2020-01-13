import { Component, OnInit } from '@angular/core';
import { NavItem } from 'src/app/models/infrastructure/nav-item';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  navItems: NavItem[] = [
    new NavItem('Dashboard', 'dashboard'),
    new NavItem('User Profile', 'person'),
    new NavItem('Table List', 'content_paste'),
    new NavItem('Typography', 'library_books'),
    new NavItem('Maps', 'location_on'),
    new NavItem('Calendar', 'calendar_today')
  ];

  constructor() { }

  ngOnInit() {
  }

}
