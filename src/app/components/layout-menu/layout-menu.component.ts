import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { PAGES_IN_APP } from '../../config/pages.config';

@Component({
  selector: 'app-layout-menu',
  standalone: true,
  imports: [
    RouterLink, RouterLinkActive,
  ],
  template: `
    <div class="ml-10 flex items-baseline space-x-4 menu">
      @for (page of pages; track page;) {
        <a routerLink="/{{page.fullLink}}" routerLinkActive="menu-active-link" class="menu-link"> {{page.linkText}} </a>
      }
    </div>
  `,
  styleUrl: './layout-menu.component.scss',
})
export class LayoutMenuComponent {

  protected readonly pages = Object.values(PAGES_IN_APP)
  .filter((page) => page.showInMenu);
 }
