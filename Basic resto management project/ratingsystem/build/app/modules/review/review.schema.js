"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ReviewSchema {
    constructor() {
        this.reviews = [
        // {
        //     id: "1",
        //     name:"Res1",
        //     food:3,
        //     ambience:3,
        //     sevice:4,
        //     cleanliness:4,
        //     overall:4
        // },  
        ];
    }
    //   create(review:IReview){
    //     return true;
    // }
    get() {
        return this.reviews;
    }
    getOne(id) {
        const review = this.reviews.find(x => x.id === id);
        return review;
    }
}
const reviewSchema = new ReviewSchema();
exports.default = reviewSchema;
//# sourceMappingURL=review.schema.js.map