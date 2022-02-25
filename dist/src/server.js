"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("@constants/server");
const app_1 = __importDefault(require("./app"));
app_1.default.listen(server_1.PORT, () => {
    console.log(`${server_1.APP_NAME} is listening on port ${server_1.PORT}`);
});
