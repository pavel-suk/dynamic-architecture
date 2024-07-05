import { Route } from "@angular/router";
import { PAGES_IN_APP } from "../config/pages.config";
import { APP_MODULES } from "../utils/consts";

export type PagesInAppKey = keyof typeof PAGES_IN_APP;

export class PAGE {
    showInMenu: boolean;
    route: Route;
    linkText: string;
    module: APP_MODULES;

    constructor(route: Route, linkText: string, module: APP_MODULES = APP_MODULES.PUBLIC, showInMenu: boolean = true) {
        this.route = route;
        this.linkText = linkText;
        this.showInMenu = showInMenu;
        this.module = module;
    }

    public get fullLink() {
        return this.module ? this.module + '/' + this.route.path : this.route.path;
    }

    public get partialLink() {
        return this.route.path;
    }

}
