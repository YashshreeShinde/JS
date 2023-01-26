"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Restaurant_1 = require("../database/Restaurant");
const response_handler_1 = require("../utility/response-handler");
const restaurant_constants_1 = require("./restaurant.constants");
const uuid_1 = require("uuid");
const router = (0, express_1.Router)();
router.post('/rate', (req, res, next) => {
    const { restaurantName, username, food, ambience, service, cleanliness, overAll } = req.body;
    const resName = Restaurant_1.restaurnatsDetails.find(u => u.restaurantName === restaurantName);
    const resIndex = Restaurant_1.restaurnatsDetails.findIndex(u => u.restaurantName === restaurantName);
    // console.log(resIndex)
    if (resName) {
        let ratingArray = [];
        ratingArray.push(food, ambience, service, cleanliness, overAll);
        // console.log(ratingArray)
        const average = ratingArray.reduce((a, b) => a + b);
        const averageRating = average / 5;
        const detail = Restaurant_1.restaurnatsDetails[resIndex].ratings.push({ userId: (0, uuid_1.v4)(), username, food, ambience, service, cleanliness, overAll, averageRating });
        return res.send(new response_handler_1.Response({ message: restaurant_constants_1.RESTAURANT_MESSAGE.SUCCESSFULLY_ADDED }));
        // res.send(new ResponseHandler())
    }
    next(restaurant_constants_1.RESTAURANT_MESSAGE.FAILED_TO_ADD);
});
router.get('/', (req, res, next) => {
    res.send({ restaurnatsDetails: Restaurant_1.restaurnatsDetails });
});
exports.default = router;
//# sourceMappingURL=restaurant.routes.js.map