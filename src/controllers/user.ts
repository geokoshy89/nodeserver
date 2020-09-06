import {Request,Response} from 'express';
import {UserModel} from '../models/user';
export class UserController{
    helloUser(req:Request, res:Response){
      res.json({
                  message: 'Hello users from controller!'
                });
    }

    async registerUser(req:Request, res:Response){
      console.log(req.body);
      const {name,password,email,phoneNumber,ratePerCall,balance,pulse,address}=req.body;
      const user=await UserModel.create({
        name,password,email,phoneNumber,ratePerCall,balance,pulse,address,kycStatus:'pending',activeStatus:true,
        role:'user'
      });
      res.json(user);
    }
}