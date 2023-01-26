"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LOGIN_MESSAGE = void 0;
const login_type_1 = require("./login.type");
exports.LOGIN_MESSAGE = {
    NOT_FOUND: new login_type_1.LoginResponse(404, "ROLE NOT FOUND"),
    USER_FOUND: new login_type_1.LoginResponse(200, "ROLE FOUND"),
};
//# sourceMappingURL=login.constants.js.map