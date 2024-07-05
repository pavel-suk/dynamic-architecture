import { Component, inject } from '@angular/core';
import { Event, NavigationEnd, NavigationError, NavigationStart, ResolveEnd, ResolveStart, Router, RouterOutlet } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { APPTITLE } from './utils/consts';
import { APP_STATE_TOKEN } from '@config';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  protected readonly router = inject(Router);

  protected readonly APP_STATE = inject(APP_STATE_TOKEN);

  protected readonly title = inject(Title);

  constructor() {
    this.router.events.subscribe({
      next: (event: Event) => {
        if (event instanceof NavigationStart) {
          // this.preloadService.showLoader();
        } else if (event instanceof ResolveStart) {
          // this.preloadService.showLoader();
        }

        if (event instanceof NavigationEnd) {
          setTimeout(() => {
            this.APP_STATE.browserTitle.update(() => this.title.getTitle());
            this.APP_STATE.pageTitle.update(() => this.title.getTitle().replace(APPTITLE+' - ', ''));
          }, 0);
         
          //this.preloadService.hideLoader();
        } else if (event instanceof NavigationError) {
          // this.preloadService.hideLoader();
        } else if (event instanceof ResolveEnd) {
      

          // this.preloadService.hideLoader();
        }
        console.log(event);
      },
    });
  }

}
