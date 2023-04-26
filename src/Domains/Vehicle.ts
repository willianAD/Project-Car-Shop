import IVehicle from '../Interfaces/IVehicle';

export default class Car {
  protected id: string | undefined;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status: boolean | false;
  protected buyValue: number;
  private doorsQty: number | undefined;
  private seatsQty: number | undefined;
  private category: string | undefined;
  private engineCapacity: number | undefined;

  constructor({ id, model, year, color, status, buyValue,
    doorsQty, seatsQty, category, engineCapacity }: IVehicle) {
    this.id = id;
    this.model = model;
    this.year = year;
    this.color = color;
    this.status = status || false;
    this.buyValue = buyValue;
    this.doorsQty = doorsQty;
    this.seatsQty = seatsQty;
    this.category = category;
    this.engineCapacity = engineCapacity;
  }
}
