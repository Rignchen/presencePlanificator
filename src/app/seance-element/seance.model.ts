let seanceCount = 0;
export class Seance {
  public name: string;
  public date: string;
  public value: number;
  public id: number = seanceCount++;
  constructor(name: string, date: string, value: number) {
    this.name = name;
    this.date = date;
    this.value = value;
  }
}
