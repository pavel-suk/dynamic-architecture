import { LoadChildrenCallback, Routes } from "@angular/router";
import { APP_ROUTES, PAGES_IN_APP } from "@config";
import { transformPageToRoute } from "../utils/functions";

const PAGE_ROUTES: Routes = Object.values(PAGES_IN_APP).map(
    (page) => transformPageToRoute(page)
).concat([{ path: '', redirectTo: APP_ROUTES.DASHBOARD(true, '/'), pathMatch: 'full' }]);

export default PAGE_ROUTES;