import { LoginResponse as AdminResponse } from "../login/login.type";

export const ADMIN_MESSAGE={
    NOT_FOUND:new AdminResponse(404,'ADMIN NOT FOUND'),
    ADMIN_FOUND:new AdminResponse(201,'ADMIN FOUND') 
}