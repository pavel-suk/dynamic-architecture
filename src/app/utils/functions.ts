import { Route } from "@angular/router";
import { PAGE } from "@models";


export function transformPageToRoute(page: PAGE): Route {
    return page.route;
}