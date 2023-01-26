"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ADMIN_MESSAGE = void 0;
const login_type_1 = require("../login/login.type");
exports.ADMIN_MESSAGE = {
    NOT_FOUND: new login_type_1.LoginResponse(404, 'ADMIN NOT FOUND'),
    ADMIN_FOUND: new login_type_1.LoginResponse(201, 'ADMIN FOUND')
};
//# sourceMappingURL=admin.contants.js.map