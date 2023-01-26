import { MANAGER_MESSAGE } from "./manager.contants";
import managerSchema from "./manager.schema";

const getOneRestaurant = (restaurantName: string) => {
    const manager = managerSchema.getOne(restaurantName);
    if(manager) {
        return manager;
    }
    throw MANAGER_MESSAGE.NOT_FOUND
}

export default {
    getOneRestaurant
}
