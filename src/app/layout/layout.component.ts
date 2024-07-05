import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { LayoutMenuComponent } from '@components';
import { APP_STATE_TOKEN } from '@config';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    LayoutMenuComponent
  ],
  templateUrl: './layout.component.html',
})
export default class LayoutComponent {

  protected readonly pageTitle = inject(APP_STATE_TOKEN).pageTitle;

 }
