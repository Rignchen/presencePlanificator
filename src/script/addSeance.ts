let _seanceTemplate: HTMLTemplateElement|null = document.querySelector("#SeanceTemplate");
const _seanceList = document.querySelector("main > div");
let totalSeance = 0;

let seanceTemplate: DocumentFragment;
let seanceList: Element;
if (_seanceTemplate != null && _seanceList != null) {
  seanceTemplate = _seanceTemplate.content;
  seanceList = _seanceList;
}

/**
 * @param type type de séance
 * @param date dd.mm.yyyy
 * @param selectedValue 0: absent, 1: je sais pas, 2: présent
 */
export function addSeance(type: String, date: String, selectedValue: Number = 1) {
  seanceList.appendChild(seanceTemplate.cloneNode(true));
  const seance = seanceList.lastElementChild;

  if (seance == null) {
    return;
  }
  const buttons: NodeListOf<HTMLInputElement> = seance.querySelectorAll("input[type=radio]")
  buttons.forEach((radio) => {
    radio.name = String(totalSeance);
  });
  totalSeance++;

  const seanceDate = seance.querySelector(".date");
  const seanceType = seance.querySelector(".seance");
  if (seanceDate == null || seanceType == null) {
    alert("Erreur lors de l'ajout de la séance")
    return;
  }
  seanceType.textContent = String(type);
  seanceDate.textContent = String(date);
  buttons[2 - Number(selectedValue)].checked = true;

  const deleteButton = seance.querySelector(".delete");
  if (deleteButton == null) {
    return;
  }
  deleteButton.addEventListener("click", () => {
    seance.remove();
  })
}
