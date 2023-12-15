import { addSeance } from "./addSeance";

export function loadSeance(data: [type:string,date:string,state:number][]) {
  data.forEach((seance) => {
    addSeance(seance[0], seance[1], seance[2]);
  });
}
