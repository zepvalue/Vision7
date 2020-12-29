import express from "express";
import Logger from "./loaders/logger";

(async function () {
  const app = express();

  await require("./loaders").default({ expressApp: app });

  app
    .listen(3000, () => Logger.info("✔ Running..."))
    .on("error", (err) => {
      if (err) {
        Logger.error(err);
        process.exit(1);
      }
    });
})();
