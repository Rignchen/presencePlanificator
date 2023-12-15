import { NgModule } from "@angular/core";
import { SeanceComponent } from "./seance.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    SeanceComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [],
  exports: [
    SeanceComponent
  ],
  bootstrap: [SeanceComponent]
})
export class SeanceModule { }
