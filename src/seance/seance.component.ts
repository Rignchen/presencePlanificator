import {Component, Input} from "@angular/core";

@Component({
  selector: "seance-item", templateUrl: "./seance.html", styleUrls: []
})
export class SeanceComponent {
  @Input() seance: [string, string, number] = ["", "", 1];
}
