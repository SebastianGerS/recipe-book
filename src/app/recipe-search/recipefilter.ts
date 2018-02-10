export class RecipeFilter {
  name: string;
  parameter: string;
  type: string;


  constructor(name: string, parameter: string, type: string) {
    this.name = name;
    this.parameter = parameter;
    this.type = type;
  }
}
