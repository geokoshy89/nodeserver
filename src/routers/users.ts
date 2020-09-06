import {Router} from 'express';
import {UserController} from '../controllers/user';

export class UserRouter{
    public router:Router;

    constructor(){
        this.router=Router();
        this.initUserRoutes();
    }

    private initUserRoutes(){
        let userController:UserController=new UserController();
        this.router.get('/',userController.helloUser);
    }

}