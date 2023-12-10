import { addSeance } from "./script/addSeance.js";
import { loadSeance } from "./script/loadSeance.js";

const newSeance = document.querySelector("#NewSeance");
newSeance.querySelector("input[type=submit]").addEventListener("click", () => {
    const seanceType = newSeance.querySelector("input[type=radio]:checked");
	const seanceDateElement = newSeance.querySelector("input[type=date]");
	const seanceDate = seanceDateElement.value;
	if (seanceType && seanceDate) {
		addSeance(
			seanceType.parentElement.textContent, 
			seanceDate.split("-").reverse().join(".")
		);
		seanceType.checked = false;
		seanceDateElement.value = "";
	}
})

loadSeance([
	["Séance de Troupe", "15.12.2023"],
	["Séance de Patrouille", "22.12.2023", 2],
	["Séance de Troupe", "29.12.2023", 0],
])
