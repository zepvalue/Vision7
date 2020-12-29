import { Application, Request, Response, NextFunction } from "express";
import bodyParser from "body-parser";

export default ({ app }: { app: Application }) => {
  // Health Check endpoints
  app.get("/status", (_req: Request, res: Response) => {
    res.status(200).end();
  });

  app.head("/status", (_req: Request, res: Response) => {
    res.status(200).end();
  });

  app.use(bodyParser.json());

  app.use((_req: Request, _res: Response, next: NextFunction) => {
    const err = new Error("Not Found");
    err["status"] = 404;
    next(err);
  });

  app.use((err: Error, _req: Request, res: Response, next: NextFunction) => {
    // Handle 401 thrown by express-jwt library
    if (err.name === "UnauthorizedError") {
      return res.status(401).send({ message: err.message }).end();
    }
    return next(err);
  });
};
