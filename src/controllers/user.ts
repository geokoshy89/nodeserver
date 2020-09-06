import {Request,Response} from 'express';
export class UserController{
    helloUser(req:Request, res:Response){
      res.json({
                  message: 'Hello users from controller!'
                });
    }
}