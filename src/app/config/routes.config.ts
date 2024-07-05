
import { PagesInAppKey } from "@models";
import { PAGES_IN_APP } from "./pages.config";

export const APP_ROUTES: Record<PagesInAppKey, (fullPath: boolean, relativePath: string) => string> = {
    DASHBOARD: (fullPath: boolean = true, relativePath: string = ''): string => {
       const path = fullPath ? PAGES_IN_APP.DASHBOARD.fullLink : PAGES_IN_APP.DASHBOARD.partialLink;
       return relativePath + path;
    },
    TEAMS: (fullPath: boolean = true, relativePath: string = ''): string => {
        const path = fullPath ? PAGES_IN_APP.TEAMS.fullLink : PAGES_IN_APP.TEAMS.partialLink;
        return relativePath + path; 
    },
    PROJECTS: (fullPath: boolean = true, relativePath: string = ''): string => {
        const path = fullPath ? PAGES_IN_APP.PROJECTS.fullLink : PAGES_IN_APP.PROJECTS.partialLink;
        return relativePath + path; 
    }
}

