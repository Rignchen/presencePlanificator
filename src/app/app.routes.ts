import { Routes } from '@angular/router';
import {SeanceListComponent} from "./seance-list/seance-list.component";

export const routes: Routes = [
  {
    path: "",
    redirectTo: "seances",
    pathMatch: "full"
  },
  {
    path: "seances",
    component: SeanceListComponent
  }
];
