"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.excludedRoutes = exports.routes = void 0;
const login_routes_1 = require("../login/login.routes");
const routes_type_1 = require("./routes.type");
const restaurant_routes_1 = __importDefault(require("../restaurant/restaurant.routes"));
const manager_routes_1 = __importDefault(require("../manager/manager.routes"));
exports.routes = [
    new routes_type_1.Route('/auth', login_routes_1.AuthRouter),
    new routes_type_1.Route('/restaurant', restaurant_routes_1.default),
    new routes_type_1.Route('/manager', manager_routes_1.default),
];
exports.excludedRoutes = [
    { url: "/auth/login", method: "POST" },
    { url: "/restaurant/rate", method: "POST" },
    { url: "/auth/getAll", method: "GET" }
];
//# sourceMappingURL=routes.data.js.map