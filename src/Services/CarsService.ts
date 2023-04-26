import Car from '../Domains/Car';
import CarsODM from '../Models/CarsODM';
import ICar from '../Interfaces/ICar';
import ErrorMessage from '../Middlewares/ErrorHandler';

export default class CarsService {
  private createCarDomain(car: ICar | null): Car | null {
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
    if (!getCar) {
      throw new ErrorMessage(404, 'Car not found');
    }
    return this.createCarDomain(getCar);
  }
}
