"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const review_service_1 = __importDefault(require("./review.service"));
const review_constants_1 = require("./review.constants");
const response_handler_1 = require("../utility/response-handler");
const review_schema_1 = __importDefault(require("./review.schema"));
const uuid_1 = require("uuid");
const router = (0, express_1.Router)();
router.post("/", (req, res, next) => {
    const { restaurantName, food, ambience, userName, sevice, cleanliness, overall } = req.body;
    console.log(req.body);
    const restaurnat = review_schema_1.default.reviews.find(u => u.restaurantName === restaurantName);
    if (restaurnat) {
        return review_schema_1.default.reviews.push(Object.assign(Object.assign({}, food), { userName, ambience, sevice, cleanliness, overall, id: (0, uuid_1.v4)() }));
    }
    res.send(new response_handler_1.Response(review_constants_1.REVIEW_MESSAGE.REVIEW_CREATED));
});
router.get("/", (req, res, next) => {
    const result = review_service_1.default.getAll();
    res.send(new response_handler_1.Response(result));
});
router.get("/:id", (req, res, next) => {
    try {
        const result = review_service_1.default.getOne(req.params.id);
        res.send(new response_handler_1.Response(result));
    }
    catch (e) {
        next(e);
    }
});
// router.get('/getRestaurnt',(req,res,next)=>{
//  restaurnatsDetail.findIndex()
// })
exports.default = router;
//# sourceMappingURL=review.routes.js.map