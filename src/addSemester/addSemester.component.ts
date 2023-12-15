import {Component} from "@angular/core";
import {AppComponent} from "../app/app.component";
import {Seance} from "../seance/seance.model";

@Component({
  standalone: true, selector: "add-seance", templateUrl: "./addSemester.html", styleUrls: []
})
export class NewComponent {
  addSeance() {
    console.log("addSeance")
    /*AppComponent.seances.push(
      new Seance("", "", 1)
    )*/
  }
}
