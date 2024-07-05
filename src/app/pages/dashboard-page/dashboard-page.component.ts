import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { APP_ROUTES } from '@config';


@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [
    CommonModule, RouterLink
  ],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.scss',
})
export default class DashboardPageComponent { 

  protected readonly routes = APP_ROUTES;

}
