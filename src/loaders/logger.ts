import winston from "winston";

const myformat = winston.format.combine(
  winston.format.colorize(),
  winston.format.timestamp(),
  winston.format.align(),
  winston.format.printf(
    (info) => `${info.timestamp} ${info.level}: ${info.message}`
  )
);

const LoggerInstance = winston.createLogger({
  transports: [new winston.transports.Console({ format: myformat })],
});

export default LoggerInstance;
