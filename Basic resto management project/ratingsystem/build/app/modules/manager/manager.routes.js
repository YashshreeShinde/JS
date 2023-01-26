"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Restaurant_1 = require("../database/Restaurant");
const manager_contants_1 = require("./manager.contants");
const manager_service_1 = __importDefault(require("./manager.service"));
const router = (0, express_1.Router)();
router.get("/:restaurantName", (req, res, next) => {
    try {
        const result = manager_service_1.default.getOneRestaurant(req.params.restaurantName);
        const restaurnatName = result["restaurantName"];
        const restaurantFinder = Restaurant_1.restaurnatsDetails.find(u => u.restaurantName === restaurnatName);
        for (let rating of Restaurant_1.restaurnatsDetails) {
            console.log(rating.ratings);
        }
        if (restaurantFinder) {
            // console.log(restaurantFinder)
            res.send({ restaurantFinder, message: manager_contants_1.MANAGER_MESSAGE.MANAGER_FOUND });
        }
    }
    catch (e) {
        next(e);
    }
});
exports.default = router;
//# sourceMappingURL=manager.routes.js.map