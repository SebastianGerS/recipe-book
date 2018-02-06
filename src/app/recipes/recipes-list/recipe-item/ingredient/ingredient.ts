export class Ingredient {
  name: string;
  amount: number;
  unitOfMeasurement: string;
  type: string;

  constructor(name: string, amount: number , unitOfMeasurement: string,  type: string) {
    this.name = name;
    this.unitOfMeasurement = unitOfMeasurement;
    this.amount = amount;
    this.type = type;
  }
}
