import { addSeance } from "./addSeance.js";

const seanceList = document.querySelector("main > div");

/**
 * @param { [(type:String,date:String,state:Number)] } data
 */

export function loadSeance(data) {
	data.forEach((seance) => {
		addSeance(seance[0], seance[1], seance[2]);
	});
}
