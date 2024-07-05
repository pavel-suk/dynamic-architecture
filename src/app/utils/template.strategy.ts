import { inject, Injectable } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { RouterStateSnapshot, TitleStrategy } from "@angular/router";
import { APP_STATE_TOKEN } from "@config";
import { APPTITLE } from "./consts";

@Injectable()
export class TemplatePageTitleStrategy extends TitleStrategy {

 protected readonly APP_STATE = inject(APP_STATE_TOKEN);

 private readonly title = inject(Title);

  constructor() {
    super();
  }

  override updateTitle(routerState: RouterStateSnapshot) {
    const title = this.buildTitle(routerState);
    if (title !== undefined) {

      this.title.setTitle(`${APPTITLE} | ${title}`);

      this.APP_STATE.browserTitle.update(() => `${APPTITLE} | ${title}`);
      this.APP_STATE.pageTitle.update(() => title);
    }
  }
}