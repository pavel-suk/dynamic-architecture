import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-project-index-page',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './project-index-page.component.html',
  styleUrl: './project-index-page.component.scss',
})
export default class ProjectIndexPageComponent { }
