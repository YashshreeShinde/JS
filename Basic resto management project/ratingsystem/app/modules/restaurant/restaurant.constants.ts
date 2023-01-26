import { LoginResponse as RestaurantResponse } from '../login/login.type'

export const RESTAURANT_MESSAGE={
    FAILED_TO_ADD:new RestaurantResponse(404,'FAILED TO ADD REVIEW'),
    SUCCESSFULLY_ADDED:new RestaurantResponse(201,' REVIEW ADDED')
}