import express, { Request, Response, NextFunction } from "express";
import helmet from "helmet";
import cors from "cors";

import controllers from "@controllers";
import logger from "@utils/logger";
import { PORT } from "@config";

const log = logger(module);

const app = express();
app.use(helmet());
app.use(express.json());
app.use(cors());

//Registers controllers exported from controllers folder. Must add them to @controllers/index.ts
controllers.forEach((c) => app.use(c.path, c.handler));

app.use(
  (err: Error, _req: Request, res: Response, _next: NextFunction): void => {
    if (err && typeof err.message === "string") {
      log.error("General Error: " + err.message);
      res.status(500).json({ error: err.message });
    } else {
      res.status(500).json({ error: "An unexpected error occurred" });
    }
  },
);

app.listen(PORT, async () => {
  log.info(`Server listening on port ${PORT}`);
});
