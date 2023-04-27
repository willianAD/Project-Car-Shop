import { expect } from 'chai';
import Sinon from 'sinon';
import { Model } from 'mongoose';
import MotorcycleService from '../../../src/Services/MotorcycleService';
import Motorcycle from '../../../src/Domains/Motorcycle';
import { allMotorcycles, oneMotorcycles, newMotorcycles,
  newMotorcyclesOK, updateMotorcycles } from '../Mocks/MotorcycleMock';
import IMotorcycle from '../../../src/Interfaces/IMotorcycle';

describe('Devera testar todas funcionalidades da tabela motorcycles', function () {
  it('Devera cadastrar uma moto no banco de dados corretamente', async function () {
    const motorcyclesOutPut = new Motorcycle(newMotorcycles as IMotorcycle);
    
    Sinon.stub(Model, 'create').resolves(motorcyclesOutPut);
    
    const service = new MotorcycleService();
    const result = await service.createMotorcycle(newMotorcycles as IMotorcycle);

    expect(result).to.be.deep.equal(newMotorcyclesOK);
  
    Sinon.restore();
  });

  it('Devera retornar um valor null', function () {  
    const service = new MotorcycleService();
    const result = service.createMotorcycleDomain(null);

    expect(result).to.be.deep.equal(null);
  
    Sinon.restore();
  });

  it('Devera buscar todas as motos no banco de dados corretamente', async function () {
    const motorcyclesOutPut = allMotorcycles.map((motorcycles) => new Motorcycle({
      id: motorcycles.id,
      model: motorcycles.model,
      year: motorcycles.year,
      color: motorcycles.color,
      status: motorcycles.status,
      buyValue: motorcycles.buyValue,
      category: motorcycles.category as 'Street' | 'Custom' | 'Trail',
      engineCapacity: motorcycles.engineCapacity,
    }));
    
    Sinon.stub(Model, 'find').resolves(motorcyclesOutPut);
    
    const service = new MotorcycleService();
    const result = await service.getAllMotorcycle();

    expect(result).to.be.deep.equal(motorcyclesOutPut);
  
    Sinon.restore();
  });

  it('Devera buscar uma moto no banco de dados pelo ID, SUCESSO', async function () {
    const motorcyclesOutPut = new Motorcycle(oneMotorcycles as IMotorcycle);
    
    Sinon.stub(Model, 'findById').resolves(motorcyclesOutPut);
    
    const service = new MotorcycleService();
    const result = await service.getMotorcycleById('64495692954562d93033d97a');

    expect(result).to.be.deep.equal(motorcyclesOutPut);
  
    Sinon.restore();
  });

  it('Devera buscar uma moto no banco de dados pelo ID, Erro invalid', async function () {
    Sinon.stub(Model, 'findById').resolves(false);
    
    try {
      const service = new MotorcycleService();
      await service.getMotorcycleById('1');
    } catch (error) {
      expect((error as Error).message).to.be.deep.equal('Invalid mongo id');
    }
  
    Sinon.restore();
  });

  it('Devera buscar uma moto no banco de dados pelo ID, Erro not found', async function () {  
    Sinon.stub(Model, 'findById').resolves(false);

    try {
      const service = new MotorcycleService();
      await service.getMotorcycleById('644999d6008d');
    } catch (error) {
      expect((error as Error).message).to.be.deep.equal('Motorcycle not found');
    }
  
    Sinon.restore();
  });

  it('Devera alterar uma moto no banco de dados pelo ID', async function () {  
    const motorcyclesOutPut = new Motorcycle(oneMotorcycles as IMotorcycle);

    Sinon.stub(Model, 'findById').resolves(motorcyclesOutPut);    
    Sinon.stub(Model, 'findByIdAndUpdate').resolves(updateMotorcycles);
    
    const service = new MotorcycleService();

    const result = await service.updateMotorcycleById(
      '64495692954562d93033d97a',
      updateMotorcycles as IMotorcycle,
    );

    expect(result).to.be.deep.equal(updateMotorcycles);
  
    Sinon.restore();
  });
});
