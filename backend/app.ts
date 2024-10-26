import { errorHandler } from "@middlewares/errorMiddleware";
import { notFoundHandler } from "@middlewares/notFoundMiddleware";
import userRoutes from "@routes/userRoutes";
import * as dotenv from "dotenv";
import express from "express";

dotenv.config();

const app = express();
app.use(express.json());

// Définir les routes
app.use("/api/users", userRoutes);

// Gestion des routes non trouvées
app.use(notFoundHandler);

// Middleware de gestion des erreurs
app.use(errorHandler);

export default app;
