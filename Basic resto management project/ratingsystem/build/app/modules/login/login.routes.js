"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRouter = void 0;
const express_1 = require("express");
const jsonwebtoken_1 = require("jsonwebtoken");
const response_handler_1 = require("../utility/response-handler");
const login_constants_1 = require("./login.constants");
exports.AuthRouter = (0, express_1.Router)();
const login_database_1 = require("./login.database");
let access_token;
exports.AuthRouter.post("/login", (req, res, next) => {
    const { username, password } = req.body;
    const user = login_database_1.users.find(u => u.password === password && u.username === username);
    const indexofUser = login_database_1.users.findIndex(u => u.password === password && u.username === username);
    if (user) {
        const role = login_database_1.users[indexofUser].role;
        const restaurant = login_database_1.users[indexofUser].restaurantName;
        const { JWT_SECRET_KEY, JWT_EXPIRES_IN } = process.env;
        access_token = (0, jsonwebtoken_1.sign)({
            username: login_database_1.users[indexofUser].username,
            restaurant: login_database_1.users[indexofUser].restaurantName
        }, JWT_SECRET_KEY || '', { expiresIn: JWT_EXPIRES_IN });
        if (role === 'manager') {
            return res.send(new response_handler_1.Response({ access_token, role, restaurant, message: login_constants_1.LOGIN_MESSAGE.USER_FOUND }));
        }
        return res.send(new response_handler_1.Response({ access_token, role, message: login_constants_1.LOGIN_MESSAGE.USER_FOUND }));
    }
    next(login_constants_1.LOGIN_MESSAGE.NOT_FOUND);
});
exports.AuthRouter.get('/getAll', (req, res, next) => {
    let name = [];
    for (let restaurant of login_database_1.users) {
        if (restaurant.restaurantName != null) {
            name.push(restaurant.restaurantName);
        }
    }
    return res.send(new response_handler_1.Response({ name }));
});
// AuthRouter.get('/manager',(req,res,next)=>{
//   const newToken=req.headers.authorization || "";
//   console.log(newToken)
//   const validate=JSON.parse(Buffer.from(newToken.split('.')[1], 'base64').toString());
//   console.log(validate.restaurant)
//   return res.send({validate})
// })
//# sourceMappingURL=login.routes.js.map