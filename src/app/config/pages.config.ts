
import { PAGE } from "@models";
import { APPTITLE } from "../utils/consts";
import { GRID_DATA_SOURCE_TOKEN, GRID_DATA_STRUCTURE } from "./app-state.config";
import { DynamicDataSource } from "../models/dynamic-data-source";
import { of } from "rxjs";
import { signal } from "@angular/core";
import { GridColumnViewModel } from "../models/grid-column.viewmodel";

const ELEMENT_DATA: PeriodicElement[] = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  ];

  const Structure: GridColumnViewModel[] = [
    {
        headerName: 'No.',
        dataKey: 'position',
        visible: true,
    },
    {
        headerName: 'Name',
        dataKey: 'name',
        visible: true,
    },
    {
        headerName: 'Weight',
        dataKey: 'weight',
        visible: true,
    },
    {
        headerName: 'Symbol',
        dataKey: 'symbol',
        visible: true,
    },
  ]

  export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
  }
  

export const PAGES_IN_APP = {
    DASHBOARD: new PAGE(
        {
            path: "dashboard",
            loadComponent: () => import('@pages/dashboard-page/dashboard-page.component'),
            title: `${APPTITLE} | Dashboard`,
            providers: []
        },
        'Dashboard'
    ),
    TEAMS: new PAGE(
        {
            path: "teams",
            loadComponent: () => import('@pages/team-index-page/team-index-page.component'),
            title: `${APPTITLE} | Teams`,
            providers: []
        },
        'Teams',
    ),
    PROJECTS: new PAGE(
        {
            path: "projects",
            loadComponent: () => import('@pages/project-index-page/project-index-page.component'),
            title: `${APPTITLE} | Projects`,
            providers: [
                { provide: GRID_DATA_SOURCE_TOKEN, useValue: new DynamicDataSource<PeriodicElement>(of(ELEMENT_DATA))},
                { provide: GRID_DATA_STRUCTURE, useValue: signal(Structure)}
            ]
        },
        'Projects', 
    ),
}