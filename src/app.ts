import * as express from 'express';
import {UserRouter} from './routers/users';

class App {
  public express

  constructor () {
    this.express = express()
    this.mountRoutes()
  }

  private mountRoutes (): void {
    const router = express.Router();
    this.express.use('/users', new UserRouter().router);
  }
}

export default new App().express