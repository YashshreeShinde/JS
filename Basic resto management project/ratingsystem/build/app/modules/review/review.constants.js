"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.REVIEW_MESSAGE = void 0;
const review_type_1 = require("./review.type");
exports.REVIEW_MESSAGE = {
    NOT_FOUND: new review_type_1.ReviewResponse(404, "REVIEW NOT FOUND"),
    REVIEW_CREATED: new review_type_1.ReviewResponse(201, "REVIEW CREATED"),
    REVIEW_NOT_CREATED: new review_type_1.ReviewResponse(400, "REVIEW NOT CREATED"),
};
//# sourceMappingURL=review.constants.js.map