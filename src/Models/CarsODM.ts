import { isValidObjectId, Model, model, models, Schema } from 'mongoose';
import ICar from '../Interfaces/ICar';

export default class CarsODM {
  private schema: Schema;
  private model: Model<ICar>;

  constructor() {
    this.schema = new Schema<ICar>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: false },
      buyValue: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
    });
    this.model = models.Car || model('Car', this.schema);
  }

  async create(car: ICar): Promise<ICar> {
    return this.model.create({ ...car });
  }

  async find(): Promise<ICar[]> {
    return this.model.find();
  }

  async findById(id: string) {
    if (!isValidObjectId) {
      throw new Error('Invalid mongo id');
    }
    return this.model.findById({ _id: id });
  }
}
