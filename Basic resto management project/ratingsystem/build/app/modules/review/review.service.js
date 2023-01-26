"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const review_schema_1 = __importDefault(require("./review.schema"));
const review_constants_1 = require("./review.constants");
// const create = (review: IReview) => reviewSchema.create(review);
const getAll = () => review_schema_1.default.get();
const getOne = (id) => {
    const review = review_schema_1.default.getOne(id);
    if (review) {
        return review;
    }
    throw review_constants_1.REVIEW_MESSAGE.NOT_FOUND;
};
exports.default = {
    // create,
    getAll,
    getOne,
};
//# sourceMappingURL=review.service.js.map