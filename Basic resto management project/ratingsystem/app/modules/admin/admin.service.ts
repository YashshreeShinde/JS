import { ADMIN_MESSAGE } from "./admin.contants";
import adminSchema from "./admin.schema";

const getOneRestaurant = () => {
    const admin = adminSchema.get()
    if(admin) {
        return admin;
    }
    throw ADMIN_MESSAGE.NOT_FOUND
}

export default {
    getOneRestaurant
}
