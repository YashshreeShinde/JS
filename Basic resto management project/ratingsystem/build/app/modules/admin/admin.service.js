"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const admin_contants_1 = require("./admin.contants");
const admin_schema_1 = __importDefault(require("./admin.schema"));
const getOneRestaurant = () => {
    const admin = admin_schema_1.default.get();
    if (admin) {
        return admin;
    }
    throw admin_contants_1.ADMIN_MESSAGE.NOT_FOUND;
};
exports.default = {
    getOneRestaurant
};
//# sourceMappingURL=admin.service.js.map