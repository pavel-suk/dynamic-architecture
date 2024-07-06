import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { DynamicGridComponent } from '@components/dynamic-grid/dynamic-grid.component';

@Component({
  selector: 'app-team-index-page',
  standalone: true,
  imports: [
    MatCardModule,
    DynamicGridComponent
  ],
  templateUrl: './team-index-page.component.html',
  styleUrl: './team-index-page.component.scss',
})
export default class TeamIndexPageComponent { }
