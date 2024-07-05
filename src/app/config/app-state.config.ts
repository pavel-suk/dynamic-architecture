import { InjectionToken, signal, WritableSignal } from "@angular/core";
import { APPTITLE } from "../utils/consts";
import { APP_STATE_MODEL } from "../models/app.viewmodel";

export const APP_STATE_TOKEN = new InjectionToken<
  APP_STATE_MODEL
>('APP_STATE', {
  providedIn: 'root',
  factory: () => ({ 
    browserTitle: signal(APPTITLE),
    pageTitle: signal(undefined)
  }),
});


