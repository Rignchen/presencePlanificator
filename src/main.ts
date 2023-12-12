import {addSeance} from "./script/addSeance";
import {loadSeance} from "./script/loadSeance";

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
            const seanceTypeContent = seanceTypeElement.textContent;
            if (seanceTypeContent != null) {
              addSeance(seanceTypeContent, seanceDate.split("-").reverse().join("."));
              seanceType.checked = false;
              seanceDateElement.value = "";
            }
          }
        }
      }
    })
  }
}
loadSeance([
  ["Séance Spéciale", "16.12.2023", 1],
  ["Séance de Troupe", "13.01.2024", 1],
  ["Soirée médias", "13.01.2024", 1],
  ["Séance Spéciale", "05.08.2024", 1],
  ["Séance Spéciale", "15.08.2024", 1],
]);
