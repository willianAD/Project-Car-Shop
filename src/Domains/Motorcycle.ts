import IMotorcycle from '../Interfaces/IMotorcycle';

export default class Car {
  protected id: string | undefined;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status: boolean | false;
  protected buyValue: number;
  private category: string;
  private engineCapacity: number;

  constructor({ id, model, year, color, status, buyValue, category, engineCapacity }: IMotorcycle) {
    this.id = id;
    this.model = model;
    this.year = year;
    this.color = color;
    this.status = status || false;
    this.buyValue = buyValue;
    this.category = category;
    this.engineCapacity = engineCapacity;
  }
}
