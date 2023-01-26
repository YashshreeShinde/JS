"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerRoutes = void 0;
const express_1 = require("express");
const response_handler_1 = require("../utility/response-handler");
const routes_data_1 = require("./routes.data");
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const authorization_1 = require("../utility/authorization");
const registerRoutes = (app) => {
    app.use((0, cors_1.default)());
    app.use((0, helmet_1.default)());
    app.use((0, express_1.json)());
    app.use((0, authorization_1.authorize)(routes_data_1.excludedRoutes));
    for (let route of routes_data_1.routes) {
        app.use(route.path, route.router);
    }
    app.use((err, req, res, next) => {
        res.status(err.statusCode || 500).send(new response_handler_1.Response(null, err));
    });
};
exports.registerRoutes = registerRoutes;
//# sourceMappingURL=routes.register.js.map