import { expect } from 'chai';
import Sinon from 'sinon';
import { Model } from 'mongoose';
import CarsService from '../../../src/Services/CarsService';
import Car from '../../../src/Domains/Car';
import { allCars, oneCar, newCar, newCarOK, updateCar } from '../Mocks/CarsMock';

describe('Devera testar todas funcionalidades da tabela carros', function () {
  it('Devera cadastrar um carros no banco de dados corretamente', async function () {
    const carOutPut = new Car(newCar);
    
    Sinon.stub(Model, 'create').resolves(carOutPut);
    
    const service = new CarsService();
    const result = await service.createCar(newCar);

    expect(result).to.be.deep.equal(newCarOK);
  
    Sinon.restore();
  });

  it('Devera buscar todos os carros no banco de dados corretamente', async function () {
    const carOutPut = allCars.map((car) => new Car({
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

    expect(result).to.be.deep.equal(carOutPut);
  
    Sinon.restore();
  });

  it('Devera buscar 1 carro no banco de dados pelo ID, SUCESSO', async function () {
    const carOutPut = new Car(oneCar);
    
    Sinon.stub(Model, 'findById').resolves(carOutPut);
    
    const service = new CarsService();
    const result = await service.getCarById('64495692954562d93033d97a');

    expect(result).to.be.deep.equal(carOutPut);
  
    Sinon.restore();
  });

  it('Devera buscar um carro no banco de dados pelo ID, Erro invalid', async function () {
    Sinon.stub(Model, 'findById').resolves(false);
    
    try {
      const service = new CarsService();
      await service.getCarById('1');
    } catch (error) {
      expect((error as Error).message).to.be.deep.equal('Invalid mongo id');
    }
  
    Sinon.restore();
  });

  it('Devera buscar um carro no banco de dados pelo ID, Erro not found', async function () {  
    Sinon.stub(Model, 'findById').resolves(false);

    try {
      const service = new CarsService();
      await service.getCarById('644999d6008d');
    } catch (error) {
      expect((error as Error).message).to.be.deep.equal('Car not found');
    }
  
    Sinon.restore();
  });

  it('Devera alterar um carro no banco de dados pelo ID', async function () {  
    const carOutPut = new Car(oneCar);

    Sinon.stub(Model, 'findById').resolves(carOutPut);    
    Sinon.stub(Model, 'findByIdAndUpdate').resolves(updateCar);
    
    const service = new CarsService();

    const result = await service.updateCarById('64495692954562d93033d97a', updateCar);

    expect(result).to.be.deep.equal(updateCar);
  
    Sinon.restore();
  });
});
