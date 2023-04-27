import { isValidObjectId, Model, model, models, Schema, UpdateQuery } from 'mongoose';
import ErrorMessage from '../Middlewares/ErrorHandler';

const invalidMessage = 'Invalid mongo id';

export default class AbstractODM<T> {
  private schema: Schema;
  protected modelName: string;
  protected model: Model<T>;
  
  constructor(modelName: string, schema: Schema) {
    this.schema = schema;
    this.modelName = modelName;
    this.model = models[this.modelName] || model(this.modelName, this.schema);
  }

  async create(vehicle: T): Promise<T> {
    return this.model.create({ ...vehicle });
  }

  async find(): Promise<T[]> {
    return this.model.find();
  }

  async findById(id: string) {
    if (!isValidObjectId(id)) throw new ErrorMessage(422, invalidMessage);
    return this.model.findById({ _id: id });
  }

  async updateById(id: string, obj: Partial<T>) {
    if (!isValidObjectId(id)) throw new ErrorMessage(422, invalidMessage);
    return this.model.findByIdAndUpdate(
      { _id: id },
      { ...obj } as UpdateQuery<T>,
    );
  }

  async deleteById(id: string) {
    if (!isValidObjectId(id)) throw new ErrorMessage(422, invalidMessage);
    return this.model.findByIdAndDelete({ _id: id });
  }
}
