import { LoginResponse as ManagerResponse } from "../login/login.type";

export const MANAGER_MESSAGE={
    NOT_FOUND:new ManagerResponse(404,'MANAGER NOT FOUND'),
    MANAGER_FOUND:new ManagerResponse(201,'MANAGER FOUND') 
}