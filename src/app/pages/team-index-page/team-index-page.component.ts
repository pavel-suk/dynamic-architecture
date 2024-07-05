import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-team-index-page',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './team-index-page.component.html',
  styleUrl: './team-index-page.component.scss',
})
export default class TeamIndexPageComponent { }
