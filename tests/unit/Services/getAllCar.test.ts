import { expect } from 'chai';
import Sinon from 'sinon';
import { Model } from 'mongoose';
import CarsService from '../../../src/Services/CarsService';
// import CarsODM from '../../../src/Models/CarsODM';
import Car from '../../../src/Domains/Car';

const inputArray = [
  {
    id: '64495632954562d93033d976',
    model: 'uno',
    year: 2008,
    color: 'Green',
    status: true,
    buyValue: 11.99,
    doorsQty: 2,
    seatsQty: 3,
  },
  {
    id: '64495686954562d93033d978',
    model: 'Marea',
    year: 2002,
    color: 'Black',
    status: true,
    buyValue: 15.99,
    doorsQty: 4,
    seatsQty: 5,
  },
  {
    id: '64495692954562d93033d97a',
    model: 'Golf',
    year: 2022,
    color: 'Black',
    status: true,
    buyValue: 95.99,
    doorsQty: 4,
    seatsQty: 5,
  },
];

describe('Devera buscar todos os carros', function () {
  it('Devera buscar todos os carros no banco de dado corretamente', async function () {
    const carOutPut = inputArray.map((car) => new Car({
      id: car.id,
      model: car.model,
      year: car.year,
      color: car.color,
      status: car.status,
      buyValue: car.buyValue,
      doorsQty: car.doorsQty,
      seatsQty: car.seatsQty,
    }));
    
    Sinon.stub(Model, 'find').resolves(carOutPut);
    
    const service = new CarsService();
    const result = await service.getAllCar();

    expect(result).to.be.deep.equal({ status: 200, message: carOutPut });
  
    Sinon.restore();
  });
});
