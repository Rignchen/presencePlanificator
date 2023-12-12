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
export function addSeance(type: string, date: string, selectedValue: number = 1) {
  seanceList.appendChild(seanceTemplate.cloneNode(true));
  const seance = seanceList.lastElementChild;

  if (seance == null) {
    alert("Erreur lors de l'ajout de la séance")
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

  if (type != "Séance Spéciale") {
    seanceType.textContent = type;
  } else {
    const autre: HTMLDivElement|null = document.querySelector("#autre");
    if (autre == null) {
      return;
    }
    else {
      const autreChild: HTMLInputElement|null = autre.lastElementChild as HTMLInputElement;
      if (autreChild == null || autreChild.value.trim() == "") seanceType.textContent = type;
      else {
        seanceType.textContent = autreChild.value.trim();
      }
    }
  }
  seanceDate.textContent = date;
  buttons[2 - selectedValue].checked = true;

  const deleteButton = seance.querySelector(".delete");
  if (deleteButton == null) return;
  deleteButton.addEventListener("click", () => {
    seance.remove();
  })
}
