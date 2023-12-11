const seanceTemplate = document.querySelector("#SeanceTemplate").content;
const seanceList = document.querySelector("main > div");

/**
 * @param {String} type type de séance
 * @param {String} date dd.mm.yyyy
 * @param {Number} selectedValue 0: absent, 1: je sais pas, 2: présent
 */
export function addSeance(type, date, selectedValue = 1) {
  seanceList.appendChild(seanceTemplate.cloneNode(true));
  const seance = seanceList.lastElementChild;

  const buttons = seance.querySelectorAll("input[type=radio]")
  buttons.forEach((radio) => {
    radio.name = seanceList.childElementCount;
  });

  seance.querySelector(".seance").textContent = type;
  seance.querySelector(".date").textContent = date;
  buttons[2 - selectedValue].checked = true;

  seance.querySelector(".delete").addEventListener("click", () => {
    seance.remove();
  })
}
