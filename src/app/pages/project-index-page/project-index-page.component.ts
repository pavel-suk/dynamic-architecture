import { Component, computed, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { DynamicGridFilterComponent } from '@components/dynamic-grid-filter/dynamic-grid-filter.component';
import { DynamicGridComponent } from '@components/dynamic-grid/dynamic-grid.component';
import { GRID_DATA_STRUCTURE } from '@config';

@Component({
  selector: 'app-project-index-page',
  standalone: true,
  imports: [
    MatCardModule,
    DynamicGridComponent,
    MatButtonModule,
    DynamicGridFilterComponent,
    MatIconModule,
  ],
  templateUrl: './project-index-page.component.html',
  styleUrl: './project-index-page.component.scss',
})
export default class ProjectIndexPageComponent {

  protected readonly structure = inject(GRID_DATA_STRUCTURE);

  protected readonly isBudgetVisible = computed(() => {
    const columns = this.structure();

    const foundColumn = columns.find(column => column.dataKey === "budget");

    if(foundColumn) {
      return foundColumn.visible;
    }

    return false;
  })

  protected toggleVisibleBudgetColumns(state: boolean) {
    console.log(state);
    const columns = this.structure();

    for (let i = 0; i < columns.length; i++) {
      const element = columns[i];
      
      if(element.dataKey === "budget") {
        element.visible = state;
      }
    }

    console.log(columns);

    this.structure.update(() => [...columns]);
  }

 }
