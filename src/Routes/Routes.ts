import { Router } from 'express';
import CarsController from '../Controllers/CarsController';
import MotorcycleController from '../Controllers/MotorcycleController';

const routes = Router();

// Cars
routes.post('/cars', (req, res, next) => new CarsController(req, res, next).create());

routes.get('/cars/:id', (req, res, next) => new CarsController(req, res, next).getById());

routes.get('/cars', (req, res, next) => new CarsController(req, res, next).getAll());

routes.put('/cars/:id', (req, res, next) => new CarsController(req, res, next).update());

// Motorcycles
routes.post('/motorcycles', (req, res, next) => new MotorcycleController(req, res, next).create());

routes.get('/motorcycles/:id', (req, res, next) => new MotorcycleController(req, res, next)
  .getById());

routes.get('/motorcycles', (req, res, next) => new MotorcycleController(req, res, next).getAll());

export default routes;
