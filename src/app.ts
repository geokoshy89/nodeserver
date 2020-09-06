import * as express from 'express';
import {UserRouter} from './routers/users';
import * as bodyParser from 'body-parser';

class App {
  public express

  constructor () {
    this.express = express()
    this.mountRoutes()
  }

  private mountRoutes (): void {
    const router = express.Router();
    this.express.use(bodyParser.json());
    this.express.use('/users', new UserRouter().router);
  }
}

export default new App().express