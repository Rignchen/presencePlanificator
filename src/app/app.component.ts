import {Component} from "@angular/core";
import {NgForOf} from "@angular/common";
import {SeanceModule} from "../seance/seance.module";
import {Seance} from "../seance/seance.model";

@Component({
  standalone: true, selector: "seance-list", templateUrl: "./app.html", imports: [NgForOf, SeanceModule]
})
export class AppComponent {
  seances: Seance[] = [
    new Seance("Noël de Groupe", "16.12.2023", 2),
    new Seance("Séance de Troupe", "13.01.2024", 1),
    new Seance("Soirée médias", "13.01.2024", 0),
    new Seance("Camp d'été", "05.08.2024", 1),
    new Seance("Rangements du camp d'été", "15.08.2024", 1),
  ]
}
