"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RESTAURANT_MESSAGE = void 0;
const login_type_1 = require("../login/login.type");
exports.RESTAURANT_MESSAGE = {
    FAILED_TO_ADD: new login_type_1.LoginResponse(404, 'FAILED TO ADD REVIEW'),
    SUCCESSFULLY_ADDED: new login_type_1.LoginResponse(201, ' REVIEW ADDED')
};
//# sourceMappingURL=restaurant.constants.js.map