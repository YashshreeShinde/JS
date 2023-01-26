"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Restaurant_1 = require("../database/Restaurant");
class AdminSchema {
    get() {
        return Restaurant_1.restaurnatsDetails;
    }
}
const adminSchema = new AdminSchema;
exports.default = adminSchema;
//# sourceMappingURL=admin.schema.js.map