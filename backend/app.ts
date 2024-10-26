import { errorHandler } from "@middlewares/errorMiddleware";
import { notFoundHandler } from "@middlewares/notFoundMiddleware";
import userRoutes from "@routes/userRoutes";
import bodyParser from "body-parser";
import compression from "compression";
import cors from "cors";
import * as dotenv from "dotenv";
import express, { Application } from "express";
import helmet from "helmet";

dotenv.config();

const app: Application = express();
// Configuration CORS
const corsOptions = {
  origin: "*", // Autoriser ces deux origines
  methods: ["GET", "POST", "PUT", "DELETE"], // Les méthodes autorisées
  credentials: true, // Autorise l'envoi de cookies ou de tokens d'authentification
  allowedHeaders: ["Content-Type", "Authorization"], // Autorise ces headers spécifiques
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(helmet());
app.use(compression());

// Définir les routes
app.use("/api/users", userRoutes);

// Gestion des routes non trouvées
app.use(notFoundHandler);

// Middleware de gestion des erreurs
app.use(errorHandler);

export default app;
