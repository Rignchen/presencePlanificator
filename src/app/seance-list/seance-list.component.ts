import {Component} from '@angular/core';
import {SeanceElementComponent} from "../seance-element/seance-element.component";
import {Seance} from "../seance-element/seance.model";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-seance-list',
  standalone: true,
  imports: [
    SeanceElementComponent,
    NgForOf
  ],
  templateUrl: './seance-list.component.html',
  styleUrl: './seance-list.component.css'
})
export class SeanceListComponent {
  public seances: Seance[] = [
    new Seance("Noël de Groupe", "16.12.2023", 2),
    new Seance("Séance de Troupe", "13.01.2024", 1),
    new Seance("Soirée médias", "13.01.2024", 0),
    new Seance("Camp d'été", "05.08.2024", 1),
    new Seance("Rangements du camp d'été", "15.08.2024", 1),
  ]
  addSeance() {
    let type = "Nouvelle séance";
    let date = "01.01.2025";
    this.seances.push(new Seance(type, date, 1));
  }
}
