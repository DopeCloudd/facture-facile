import { AppError } from "@utils/appError";
import { NextFunction, Request, Response } from "express";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // Vérifier si l'erreur est une instance d'AppError
  if (err instanceof AppError) {
    if (err.isOperational) {
      return res.status(err.statusCode).json({
        status: "error",
        message: err.message,
      });
    } else {
      // Erreur inconnue
      console.error("ERROR 💥:", err);
      return res.status(500).json({
        status: "error",
        message: "Something went wrong!",
      });
    }
  } else {
    // Pour les autres types d'erreurs
    return res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
};
