import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { DynamicGridComponent } from '@components/dynamic-grid/dynamic-grid.component';

@Component({
  selector: 'app-project-index-page',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    DynamicGridComponent
  ],
  templateUrl: './project-index-page.component.html',
  styleUrl: './project-index-page.component.scss',
})
export default class ProjectIndexPageComponent { }
