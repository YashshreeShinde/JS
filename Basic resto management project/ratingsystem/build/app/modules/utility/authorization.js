"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorize = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const authorize = (excludedRoutes) => {
    return (req, res, next) => {
        try {
            if (excludedRoutes.find(e => e.url === req.url && e.method === req.method)) {
                return next();
            }
            const token = req.headers.authorization;
            const { JWT_SECRET_KEY } = process.env;
            const user = (0, jsonwebtoken_1.verify)(token || '', JWT_SECRET_KEY || '');
            console.log(user);
            next();
        }
        catch (e) {
            next(e);
        }
    };
};
exports.authorize = authorize;
//# sourceMappingURL=authorization.js.map