export class AppError extends Error {
  public statusCode: number;
  public isOperational: boolean;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true; // Indique que c'est une erreur opérationnelle connue
    Object.setPrototypeOf(this, AppError.prototype);
  }
}
