import { PAGES_IN_APP } from "../config/pages.config";
import { APP_MODULES } from "../utils/consts";

export type PagesInAppKey = keyof typeof PAGES_IN_APP;

export class PAGE {
    showInMenu: boolean;
    readonly path: string;
    title: string;
    linkText: string;
    module: APP_MODULES;
    component: any;

    constructor(path: string, title: string, linkText: string, component: any, module: APP_MODULES = APP_MODULES.PUBLIC,  showInMenu: boolean = true) {
        this.path = path;
        this.title = title;
        this.component = component;
        this.linkText = linkText;
        this.showInMenu = showInMenu;
        this.module = module;
    }

    public get fullLink() {
        return this.module ? this.module + '/' + this.path : this.path;
    }

    public get partialLink() {
        return this.path;
    }

}
