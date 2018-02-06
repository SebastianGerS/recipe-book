export class Ingredient {
  name: string;
  amouth: number;
  unitOfMeasurement: string;
  type: string;

  constructor(name: string, amounth: number , unitOfMeasurement: string,  type: string) {
    this.name = name;
    this.unitOfMeasurement = unitOfMeasurement;
    this.amouth = amounth;
    this.type = type;
  }
}
