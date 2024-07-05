import { InjectionToken, signal, WritableSignal } from "@angular/core";
import { APPTITLE } from "../utils/consts";
import { APP_STATE_MODEL } from "../models/app.viewmodel";
import { DynamicDataSource } from "../models/dynamic-data-source";
import { GridColumnViewModel } from "../models/grid-column.viewmodel";

export const APP_STATE_TOKEN = new InjectionToken<
  APP_STATE_MODEL
>('APP_STATE', {
  providedIn: 'root',
  factory: () => ({ 
    browserTitle: signal(APPTITLE),
    pageTitle: signal(undefined)
  }),
});

export const GRID_DATA_SOURCE_TOKEN = new InjectionToken<DynamicDataSource<any>>('GRID_DATA_SOURCE');

export const GRID_DATA_STRUCTURE = new InjectionToken<WritableSignal<GridColumnViewModel[]>>('GRID_DATA_STRUCTURE');


