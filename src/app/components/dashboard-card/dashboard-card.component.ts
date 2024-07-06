import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { DynamicGridComponent } from '@components/dynamic-grid/dynamic-grid.component';
import { DASHBOARD_CARD_TOKEN, GRID_DATA_SOURCE_TOKEN } from '@config';

@Component({
  selector: 'app-dashboard-card',
  standalone: true,
  imports: [
    DynamicGridComponent,
  ],
  templateUrl: './dashboard-card.component.html',
  styleUrl: './dashboard-card.component.scss',
})
export class DashboardCardComponent { 

  protected readonly card = inject(DASHBOARD_CARD_TOKEN);

  protected readonly data = inject(GRID_DATA_SOURCE_TOKEN);
}
