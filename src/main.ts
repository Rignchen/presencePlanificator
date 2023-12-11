//import {addSeance} from "./script/addSeance";
//import {loadSeance} from "./script/loadSeance";

const newSeance = document.querySelector("#NewSeance");
if (newSeance != null) {
  const submit = newSeance.querySelector("input[type=submit]");
  if (submit != null) {
    submit.addEventListener("click", () => {
      const seanceType: HTMLInputElement|null = newSeance.querySelector("input[type=radio]:checked");
      const seanceDateElement: HTMLInputElement|null = newSeance.querySelector("input[type=date]");
      if (seanceType != null && seanceDateElement != null) {
        const seanceDate = seanceDateElement.value;
        if (seanceDate) {
          const seanceTypeElement = seanceType.parentElement;
          if (seanceTypeElement != null) {
            //addSeance(seanceTypeElement.textContent, seanceDate.split("-").reverse().join("."));
            console.log(seanceTypeElement.textContent, seanceDate.split("-").reverse().join("."));
            seanceType.checked = false;
            seanceDateElement.value = "";
          }
        }
      }
    })
  }
}
//loadSeance([
//  ["Séance de Troupe", "15.12.2023"],
//  ["Séance de Patrouille", "22.12.2023", 2],
//  ["Séance de Troupe", "29.12.2023", 0],
//]);
