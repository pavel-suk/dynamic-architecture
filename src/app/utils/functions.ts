import { Route } from "@angular/router";
import { PAGE } from "@models";


export function transformPageToRoute(page: PAGE): Route {
    return { path: page.path, title: page.title, loadComponent: () => page.component }
}