import { users } from "../login/login.database";

class ManagerSchema{
    getOne(restaurantName:String){
        const retaurantFinder=users.find(u=>u.restaurantName===restaurantName)
        return retaurantFinder
    }
}

const managerSchema=new ManagerSchema
export default managerSchema