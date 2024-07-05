import { Component, inject } from '@angular/core';
import { ActivatedRoute, Event, NavigationEnd, NavigationError, NavigationStart, ResolveEnd, ResolveStart, Router, RouterOutlet } from '@angular/router';
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
          this._setPageTitle(this.router.routerState.root);
          //this.preloadService.hideLoader();
        } else if (event instanceof NavigationError) {
          // this.preloadService.hideLoader();
        } else if (event instanceof ResolveEnd) {
          // this.preloadService.hideLoader();
        }
        //console.log(event);
      },
    });
  }

  private _setPageTitle(activeRoute: ActivatedRoute) {
    let route = activeRoute;
    let routeTitle = '';
    while (route!.firstChild) {
      route = route.firstChild;
    }

    if (route.snapshot.title) {
      routeTitle = route!.snapshot.title;
    }

    this.APP_STATE.browserTitle.update(() => routeTitle);
    this.APP_STATE.pageTitle.update(() => routeTitle.replace(APPTITLE+' | ', ''));
  }

}
