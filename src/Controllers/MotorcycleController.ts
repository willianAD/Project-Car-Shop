import { NextFunction, Request, Response } from 'express';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleService from '../Services/MotorcycleService';

export default class MotorcycleController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: MotorcycleService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new MotorcycleService();
  }

  async create() {
    const motorcycle: IMotorcycle = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status,
      buyValue: this.req.body.buyValue,
      category: this.req.body.category,
      engineCapacity: this.req.body.engineCapacity,
    };

    try {
      const newMotorcycle = await this.service.createMotorcycle(motorcycle);
      return this.res.status(201).json(newMotorcycle);
    } catch (error) {
      this.next(error);
    }
  }

  async getAll() {
    const motorcycle = await this.service.getAllMotorcycle();
    return this.res.status(200).json(motorcycle);
  }

  async getById() {
    const { id } = this.req.params;
    try {
      const motorcycle = await this.service.getMotorcycleById(id);
      return this.res.status(200).json(motorcycle);
    } catch (error) {
      this.next(error);
    }
  }

  async update() {
    const { id } = this.req.params;
    try {
      await this.service.getMotorcycleById(id);
      const motorcycle: IMotorcycle = { ...this.req.body };
      await this.service.updateMotorcycleById(id, motorcycle);
      const newMotorcycle = await this.service.getMotorcycleById(id);
      return this.res.status(200).json(newMotorcycle);
    } catch (error) {
      this.next(error);
    }
  }

  async delete() {
    const { id } = this.req.params;
    try {
      await this.service.getMotorcycleById(id);
      await this.service.deleteMotorcycleById(id);
      return this.res.status(204).end();
    } catch (error) {
      this.next(error);
    }
  }
}
