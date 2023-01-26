"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const manager_contants_1 = require("./manager.contants");
const manager_schema_1 = __importDefault(require("./manager.schema"));
const getOneRestaurant = (restaurantName) => {
    const manager = manager_schema_1.default.getOne(restaurantName);
    if (manager) {
        return manager;
    }
    throw manager_contants_1.MANAGER_MESSAGE.NOT_FOUND;
};
exports.default = {
    getOneRestaurant
};
//# sourceMappingURL=manager.service.js.map