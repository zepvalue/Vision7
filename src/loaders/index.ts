import expressLoader from "./express";
import Logger from "./logger";

export default ({ expressApp }) => {
  expressLoader({ app: expressApp });
  Logger.info("Express loaded");
};
