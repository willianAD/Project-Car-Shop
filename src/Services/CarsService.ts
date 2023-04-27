import Car from '../Domains/Car';
import CarsODM from '../Models/CarsODM';
import ICar from '../Interfaces/ICar';
import ErrorMessage from '../Middlewares/ErrorHandler';

const notFoundMessage = 'Car not found';

export default class CarsService {
  createCarDomain(car: ICar | null): Car | null {
    if (car) return new Car(car);
    return null;
  }

  async createCar(car: ICar) {
    const carODM = new CarsODM();
    const newCar = await carODM.create(car);
    return this.createCarDomain(newCar);
  }

  async getAllCar() {
    const carODM = new CarsODM();
    const getAllCar = await carODM.find();
    const carsArray = getAllCar.map((car) => this.createCarDomain(car));
    return carsArray;
  }

  async getCarById(id: string) {
    const carODM = new CarsODM();
    const getCar = await carODM.findById(id);
    if (!getCar) throw new ErrorMessage(404, notFoundMessage);
    return this.createCarDomain(getCar);
  }

  async updateCarById(id: string, car: ICar) {
    const carODM = new CarsODM();
    const getCar = await carODM.findById(id);
    if (!getCar) throw new ErrorMessage(404, notFoundMessage);
    const updateCar = await carODM.updateById(id, car);
    return this.createCarDomain(updateCar);
  }

  async deleteCarById(id: string) {
    const carODM = new CarsODM();
    const getCar = await carODM.findById(id);
    if (!getCar) throw new ErrorMessage(404, notFoundMessage);
    const result = await carODM.deleteById(id);
    return result;
  }
}
