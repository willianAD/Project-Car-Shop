import ICar from '../Interfaces/ICar';

export default class Car {
  protected id: string | undefined;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status: boolean | false;
  protected buyValue: number;
  private doorsQty: number;
  private seatsQty: number;

  constructor({ id, model, year, color, status, buyValue, doorsQty, seatsQty }: ICar) {
    this.id = id;
    this.model = model;
    this.year = year;
    this.color = color;
    this.status = status || false;
    this.buyValue = buyValue;
    this.doorsQty = doorsQty;
    this.seatsQty = seatsQty;
  }
}
