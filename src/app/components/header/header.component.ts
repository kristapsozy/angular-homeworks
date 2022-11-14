import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  headerItems = [
    {
      path: '/planner',
      title: 'Planner',
    },
    {
      path: '/login',
      title: 'Login',
    },
    {
      path: '/register',
      title: 'Register',
    },
    {
      path: '/users',
      title: 'Users',
    },
  ];
}
