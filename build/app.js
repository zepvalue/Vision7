"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var winston_1 = __importDefault(require("winston"));
(function () {
    var app = express_1["default"]();
    var myformat = winston_1["default"].format.combine(winston_1["default"].format.colorize(), winston_1["default"].format.timestamp(), winston_1["default"].format.align(), winston_1["default"].format.printf(function (info) { return info.timestamp + " " + info.level + ": " + info.message; }));
    var logger = winston_1["default"].createLogger({
        transports: [new winston_1["default"].transports.Console({ format: myformat })]
    });
    app
        .listen(3000, function () { return logger.info("✔ Running..."); })
        .on("error", function (err) {
        if (err) {
            logger.error(err);
            process.exit(1);
        }
    });
})();
//# sourceMappingURL=app.js.map