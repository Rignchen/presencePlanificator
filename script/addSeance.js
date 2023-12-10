const seanceTemplate = document.querySelector("#SeanceTemplate").content;
const seanceList = document.querySelector("main > div");

/**
 * @param {String} type
 * @param {String} date
 * @param {Element} removeButton
 */
export function addSeance(type, date) {
	seanceList.appendChild(seanceTemplate.cloneNode(true));
	const seance = seanceList.lastElementChild;
	
	seance.querySelectorAll("input[type=radio]").forEach((radio) => {
		radio.name = seanceList.childElementCount;
	});
	seance.querySelector(".seance").textContent = type;
	seance.querySelector(".date").textContent = date;
 	seance.querySelector(".delete").addEventListener("click", () => {
		seance.remove();
	}) 
}