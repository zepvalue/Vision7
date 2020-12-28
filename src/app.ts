import express from "express";
import Logger from "./loaders/logger";

(function () {
  const app = express();

  app
    .listen(3000, () => Logger.info("✔ Running..."))
    .on("error", (err) => {
      if (err) {
        Logger.error(err);
        process.exit(1);
      }
    });
})();
