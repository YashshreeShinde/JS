"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MANAGER_MESSAGE = void 0;
const login_type_1 = require("../login/login.type");
exports.MANAGER_MESSAGE = {
    NOT_FOUND: new login_type_1.LoginResponse(404, 'MANAGER NOT FOUND'),
    MANAGER_FOUND: new login_type_1.LoginResponse(201, 'MANAGER FOUND')
};
//# sourceMappingURL=manager.contants.js.map