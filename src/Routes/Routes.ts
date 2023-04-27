import { Router } from 'express';
import CarsController from '../Controllers/CarsController';
import MotorcycleController from '../Controllers/MotorcycleController';

const routes = Router();

const motorcyclesID = '/motorcycles/:id';

// Cars
routes.post('/cars', (req, res, next) => new CarsController(req, res, next).create());

routes.get('/cars/:id', (req, res, next) => new CarsController(req, res, next).getById());

routes.get('/cars', (req, res, next) => new CarsController(req, res, next).getAll());

routes.put('/cars/:id', (req, res, next) => new CarsController(req, res, next).update());

routes.delete('/cars/:id', (req, res, next) => new CarsController(req, res, next).delete());

// Motorcycles
routes.post('/motorcycles', (req, res, next) => new MotorcycleController(req, res, next).create());

routes.get(motorcyclesID, (req, res, next) => new MotorcycleController(req, res, next)
  .getById());

routes.get('/motorcycles', (req, res, next) => new MotorcycleController(req, res, next).getAll());

routes.put(motorcyclesID, (req, res, next) => new MotorcycleController(req, res, next)
  .update());

routes.delete(motorcyclesID, (req, res, next) => new MotorcycleController(req, res, next).delete());

export default routes;
