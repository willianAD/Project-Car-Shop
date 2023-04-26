import { NextFunction, Request, Response } from 'express';

export default class ErrorHandler extends Error {
  status: number;
  message: string;

  constructor(status: number, message: string) {
    super(message);
    this.status = status;
    this.message = message;
  }

  static ErrorMessage(
    error: ErrorHandler,
    _req: Request,
    res: Response,
    _next: NextFunction,
  ) {
    const status = error.status || 500;
    return res.status(status).send({ message: error.message });
  }
}
