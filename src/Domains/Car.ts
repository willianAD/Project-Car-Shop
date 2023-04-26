import ICar from '../Interfaces/ICar';
import Vheicle from './Vehicle';

export default class Car extends Vheicle {
  private doorsQty: number;
  private seatsQty: number;

  constructor({ id, model, year, color, status, buyValue, doorsQty, seatsQty }: ICar) {
    super({
      id,
      model,
      year,
      color,
      status,
      buyValue,
    });
    this.doorsQty = doorsQty;
    this.seatsQty = seatsQty;
  }
}
