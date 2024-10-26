import { loginUser, registerUser } from "@services/userService";
import { AppError } from "@utils/appError";
import { NextFunction, Request, Response } from "express";

export const register = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      // Lancer une nouvelle erreur avec un code de statut 400
      throw new AppError("Email and password are required", 400);
    }
    const newUser = await registerUser(email, password);
    res.status(201).json({ message: "User registered", user: newUser });
  } catch (error) {
    next(error);
  }
};

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      throw new AppError("Email and password are required", 400);
    }
    const token = await loginUser(email, password);
    res.status(200).json({ token });
  } catch (error) {
    next(error);
  }
};
