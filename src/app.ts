import express from "express";
import winston from "winston";

(function () {
  const app = express();

  const myformat = winston.format.combine(
    winston.format.colorize(),
    winston.format.timestamp(),
    winston.format.align(),
    winston.format.printf(
      (info) => `${info.timestamp} ${info.level}: ${info.message}`
    )
  );

  const logger = winston.createLogger({
    transports: [new winston.transports.Console({ format: myformat })],
  });

  app
    .listen(3000, () => logger.info("✔ Running..."))
    .on("error", (err) => {
      if (err) {
        logger.error(err);
        process.exit(1);
      }
    });
})();
