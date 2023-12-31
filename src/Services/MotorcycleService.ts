import Motorcycle from '../Domains/Motorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';
import IMotorcycle from '../Interfaces/IMotorcycle';
import ErrorMessage from '../Middlewares/ErrorHandler';

const notFoundMessage = 'Motorcycle not found';

export default class MotorcycleService {
  createMotorcycleDomain(motorcycle: IMotorcycle | null): Motorcycle | null {
    if (motorcycle) return new Motorcycle(motorcycle);
    return null;
  }

  async createMotorcycle(motorcycle: IMotorcycle) {
    const motorcycleODM = new MotorcycleODM();
    const newMotorcycle = await motorcycleODM.create(motorcycle);
    return this.createMotorcycleDomain(newMotorcycle);
  }

  async getAllMotorcycle() {
    const motorcycleODM = new MotorcycleODM();
    const getAllMotorcycle = await motorcycleODM.find();
    const motorcycleArray = getAllMotorcycle
      .map((motorcycle) => this.createMotorcycleDomain(motorcycle));
    return motorcycleArray;
  }

  async getMotorcycleById(id: string) {
    const motorcycleODM = new MotorcycleODM();
    const getMotorcycle = await motorcycleODM.findById(id);
    if (!getMotorcycle) throw new ErrorMessage(404, notFoundMessage);
    return this.createMotorcycleDomain(getMotorcycle);
  }

  async updateMotorcycleById(id: string, car: IMotorcycle) {
    const motorcycleODM = new MotorcycleODM();
    const getMotorcycle = await motorcycleODM.findById(id);
    if (!getMotorcycle) throw new ErrorMessage(404, notFoundMessage);
    const updateMotorcycle = await motorcycleODM.updateById(id, car);
    return this.createMotorcycleDomain(updateMotorcycle);
  }

  async deleteMotorcycleById(id: string) {
    const motorcycleODM = new MotorcycleODM();
    const getMotorcycle = await motorcycleODM.findById(id);
    if (!getMotorcycle) throw new ErrorMessage(404, notFoundMessage);
    const result = await motorcycleODM.deleteById(id);
    return result;
  }
}
