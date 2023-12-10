import { addSeance } from "./script/addSeance.js";

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

addSeance("Séance de Patrouille", "01.01.2021");
addSeance("Séance de Troupe", "02.01.2021");