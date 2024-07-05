import { WritableSignal } from "@angular/core";

export interface APP_STATE_MODEL {
    browserTitle: WritableSignal<string>;
    pageTitle: WritableSignal<string | undefined>;
}

