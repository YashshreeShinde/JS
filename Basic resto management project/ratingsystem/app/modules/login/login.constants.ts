import { LoginResponse } from "./login.type"

export const LOGIN_MESSAGE = {
    NOT_FOUND: new LoginResponse(404, "ROLE NOT FOUND"), 
    USER_FOUND:new LoginResponse(200, "ROLE FOUND"),
}