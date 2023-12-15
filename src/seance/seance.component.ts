import {Component, Input} from "@angular/core";
import {Seance} from "./seance.model";

@Component({
  selector: "seance-item", templateUrl: "./seance.html", styleUrls: []
})
export class SeanceComponent {
  @Input() seance: Seance = new Seance("", "", 0)

  deleteSeance(id: number) {
    const self = document.getElementById(String(id));
    self?.remove();
  }
  setPresence(number: number) {
    this.seance.value = number;
  }
}
