"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const login_database_1 = require("../login/login.database");
class ManagerSchema {
    getOne(restaurantName) {
        const retaurantFinder = login_database_1.users.find(u => u.restaurantName === restaurantName);
        return retaurantFinder;
    }
}
const managerSchema = new ManagerSchema;
exports.default = managerSchema;
//# sourceMappingURL=manager.schema.js.map