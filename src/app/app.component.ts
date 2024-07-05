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

  protected readonly title = inject(Title);

}
