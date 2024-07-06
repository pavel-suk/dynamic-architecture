import { AfterViewInit, Component, EnvironmentInjector, inject, Injector, NgModule, NgModuleRef, OnInit, signal, ViewChild, ViewContainerRef } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { APP_ROUTES, DASHBOARD_CARD_TOKEN, GRID_DATA_SOURCE_TOKEN, GRID_DATA_STRUCTURE_TOKEN, PAGES_IN_APP } from '@config';
import { DashboardCardViewmodel } from '../../models/dashboard-card.viewmodel';
import { DashboardCardComponent } from '@components/dashboard-card/dashboard-card.component';
import { MockDataService } from '../../services/mock-data.service';
import { DynamicDataSource } from '../../models/dynamic-data-source';
import { Team } from '../../models/entity/team.entity';
import { of } from 'rxjs';
import { TeamsCardGrid } from './teams.card.grid';
import { Project } from '../../models/entity/project.entity';
import { ProjectCardGrid } from './project.card.grid';

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [
    RouterLink, MatCardModule
  ],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.scss',
})
export default class DashboardPageComponent implements AfterViewInit {

  protected readonly injector = inject(EnvironmentInjector);

  protected readonly mockService = inject(MockDataService);

  protected readonly teamData = signal<DashboardCardViewmodel>({ page: PAGES_IN_APP.TEAMS});

  protected readonly projectData = signal<DashboardCardViewmodel>({ page: PAGES_IN_APP.PROJECTS});

  @ViewChild('teamcard', { read: ViewContainerRef }) teamcard!: ViewContainerRef;

  @ViewChild('projectcard', { read: ViewContainerRef }) projectcard! : ViewContainerRef;

  ngAfterViewInit(): void {
    let teaminjector = Injector.create([
      { provide: DASHBOARD_CARD_TOKEN, useValue: this.teamData},
      {
        provide: GRID_DATA_SOURCE_TOKEN, useValue: new DynamicDataSource<Team>(of(this.mockService.getTeams()))
      },
      { provide: GRID_DATA_STRUCTURE_TOKEN, useValue: signal(TeamsCardGrid) }
    ], this.injector);
    
    this.teamcard.createComponent(DashboardCardComponent, { injector: teaminjector });

    let projectinjector = Injector.create([
      { provide: DASHBOARD_CARD_TOKEN, useValue: this.projectData},
      {
        provide: GRID_DATA_SOURCE_TOKEN, useValue: new DynamicDataSource<Project>(of(this.mockService.getProjects()))
      },
      { provide: GRID_DATA_STRUCTURE_TOKEN, useValue: signal(ProjectCardGrid) }
    ], this.injector);
    
    this.projectcard.createComponent(DashboardCardComponent, { injector: projectinjector });
  } 
}
