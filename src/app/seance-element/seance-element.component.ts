import {Component, Input} from '@angular/core';
import {Seance} from "./seance.model";

@Component({
  selector: 'app-seance-element',
  standalone: true,
  imports: [],
  templateUrl: './seance-element.component.html',
  styleUrl: './seance-element.component.css'
})
export class SeanceElementComponent {
  @Input() seance: Seance = new Seance("", "", 0);

  setPresence(number: number) {
    this.seance.value = number;
  }

  deleteSeance(id: number) {
    document.getElementById(String(id))?.remove();
  }
}
