import { AppError } from "@utils/appError";
import { NextFunction, Request, Response } from "express";

export const notFoundHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  next(new AppError(`Cannot find ${req.originalUrl} on this server!`, 404));
};
