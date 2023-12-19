import {Component} from '@angular/core';
import {SeanceElementComponent} from "../seance-element/seance-element.component";
import {Seance} from "../seance-element/seance.model";
import {NgForOf} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-seance-list',
  standalone: true,
  imports: [
    SeanceElementComponent,
    NgForOf,
    FormsModule
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
    // get wich input in the div newSeance is selected
    let inputs: HTMLLabelElement|null = document.querySelector("#newSeance label:has(input:checked)");
    let dateInput: HTMLInputElement|null = document.querySelector("#newSeanceDate");
    if (inputs == null || dateInput == null) return;

    // get the date
    if (dateInput.value == "") return;
    let date = dateInput.value;

    //get the seance type
    let type = inputs.textContent;
    if (type == null) {return}
    if (type == "Séance Spéciale") {
      // if it's a special seance, the name is set by the user
      let name: HTMLInputElement|null|undefined = inputs.parentElement?.querySelector("input[type=text]");
      if (name != null) {
        name.value = name.value.trim();
        if (name.value != "") type = name.value;

        // empty the values
    name.value = "";}}
    dateInput.value = "";
    let pomme = inputs.querySelector("input");
    if (pomme != null) pomme.checked = false;

    this.seances.push(new Seance(type, date, 1));
  }
}
