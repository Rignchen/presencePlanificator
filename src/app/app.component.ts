import { Component } from "@angular/core";
import {NgForOf} from "@angular/common";

@Component({
  standalone: true,
  selector: "seance-list",
  templateUrl: "./app.html",
  imports: [
    NgForOf
  ],
  styleUrls: []
})
export class AppComponent {
  seances: [string,string,number][] = [
    ["Noël de Groupe", "16.12.2023", 1],
    ["Séance de Troupe", "13.01.2024", 1],
    ["Soirée médias", "13.01.2024", 1],
    ["Camp d'été", "05.08.2024", 1],
    ["Rangements du camp d'été", "15.08.2024", 1],
  ]
}
