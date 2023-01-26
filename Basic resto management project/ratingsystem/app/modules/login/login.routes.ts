import { Router } from "express";
import { sign } from "jsonwebtoken";
import {Response as ResponseHandler } from "../utility/response-handler";
import {LOGIN_MESSAGE} from './login.constants'
export const AuthRouter = Router();
import {users} from './login.database'

let access_token: string;
AuthRouter.post("/login", (req, res, next) => {
    const { username, password } = req.body;
    const user = users.find(u => u.password === password && u.username === username);
    const indexofUser=users.findIndex(u => u.password === password && u.username === username)
    
    if(user) {
         const role=users[indexofUser].role
         const restaurant=users[indexofUser].restaurantName
        const { JWT_SECRET_KEY,JWT_EXPIRES_IN } = process.env;
         access_token = sign({
          username:users[indexofUser].username,
          restaurant:users[indexofUser].restaurantName
        }, JWT_SECRET_KEY || '', {expiresIn: JWT_EXPIRES_IN});
      
        if(role ==='manager'){
          return res.send(new ResponseHandler({access_token,role,restaurant,message:LOGIN_MESSAGE.USER_FOUND}));
        }
        return res.send(new ResponseHandler({access_token,role,message:LOGIN_MESSAGE.USER_FOUND}));
    }

    next(LOGIN_MESSAGE.NOT_FOUND)

})

AuthRouter.get('/getAll',(req,res,next)=>{
  let name=[];
  for(let restaurant of users)
{
  if(restaurant.restaurantName != null){
    name.push(restaurant.restaurantName)
  }
}
 return res.send(new ResponseHandler({name}))
})



// AuthRouter.get('/manager',(req,res,next)=>{
//   const newToken=req.headers.authorization || "";
//   console.log(newToken)
//   const validate=JSON.parse(Buffer.from(newToken.split('.')[1], 'base64').toString());
//   console.log(validate.restaurant)
//   return res.send({validate})
// })

