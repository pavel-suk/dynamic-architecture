import { AfterViewInit, Component, computed, inject, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { DynamicGridFilterComponent } from '@components/dynamic-grid-filter/dynamic-grid-filter.component';
import { GRID_DATA_SOURCE_TOKEN, GRID_DATA_STRUCTURE } from '@config';

@Component({
  selector: 'app-dynamic-grid',
  standalone: true,
  imports: [
    DynamicGridFilterComponent,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  templateUrl: './dynamic-grid.component.html',
  styleUrl: './dynamic-grid.component.scss',
})
export class DynamicGridComponent implements AfterViewInit {

  dataSource = inject(GRID_DATA_SOURCE_TOKEN);

  dataStructure = inject(GRID_DATA_STRUCTURE);

  displayedColumns = computed(() => {
    return this.dataStructure().filter((configuration) => configuration.visible).map((configuration) => configuration.dataKey);
  });

  //TODO: replace it to viewchild signal based effect
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
 }
