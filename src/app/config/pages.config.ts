
import { PAGE } from "@models";
import { GRID_DATA_SOURCE_TOKEN, GRID_DATA_STRUCTURE_TOKEN } from "./app-state.config";
import { DynamicDataSource } from "../models/dynamic-data-source";
import { of } from "rxjs";
import { inject, signal } from "@angular/core";
import { ProjectGrid } from "@pages/project-index-page/project.grid";
import { MockDataService } from "../services/mock-data.service";
import { Project } from "../models/entity/project.entity";
import { Team } from "../models/entity/team.entity";
import { TeamGrid } from "@pages/team-index-page/team.grid";

export const PAGES_IN_APP = {
    DASHBOARD: new PAGE(
        {
            path: "dashboard",
            loadComponent: () => import('@pages/dashboard-page/dashboard-page.component'),
            title: "Dashboard",
            providers: []
        },
        'Dashboard'
    ),
    TEAMS: new PAGE(
        {
            path: "teams",
            loadComponent: () => import('@pages/team-index-page/team-index-page.component'),
            title: "Teams",
            providers: [
                {
                    provide: GRID_DATA_SOURCE_TOKEN, useFactory: () => {
                        return new DynamicDataSource<Team>(of(inject(MockDataService).getTeams()))
                    }
                },
                { provide: GRID_DATA_STRUCTURE_TOKEN, useValue: signal(TeamGrid) }
            ]
        },
        'Teams',
    ),
    PROJECTS: new PAGE(
        {
            path: "projects",
            loadComponent: () => import('@pages/project-index-page/project-index-page.component'),
            title: "Projects",
            providers: [
                {
                    provide: GRID_DATA_SOURCE_TOKEN, useFactory: () => {
                        return new DynamicDataSource<Project>(of(inject(MockDataService).getProjects()))
                    }
                },
                { provide: GRID_DATA_STRUCTURE_TOKEN, useValue: signal(ProjectGrid) }
            ]
        },
        'Projects',
    ),
}