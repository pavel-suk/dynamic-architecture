
import { PAGE } from "@models";
import { APPTITLE } from "../utils/consts";

export const PAGES_IN_APP = {
    DASHBOARD: new PAGE(
        'dashboard', `${APPTITLE} - Dashboard`, 'Dashboard',
        import('@pages/dashboard-page/dashboard-page.component')
    ),
    TEAMS: new PAGE(
        'teams', `${APPTITLE} - Teams`, 'Teams',
        import('@pages/team-index-page/team-index-page.component')
    ),
    PROJECTS: new PAGE(
        'projects', `${APPTITLE} - Projects`, 'Projects',
        import('@pages/project-index-page/project-index-page.component')
    ),
}