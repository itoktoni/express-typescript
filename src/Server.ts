// src/index.ts
import express, { Application } from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import LoginRoutes from './routes/LoginRoutes';
import UserRoutes from './routes/UserRoutes';
import { config as dotenv } from 'dotenv';

class Server{
  public app:Application;

  constructor(){
    this.app = express();
    this.plugins();
    this.routes();

    dotenv();
  }

  protected plugins(): void {
    this.app.use(bodyParser.json());
    this.app.use(morgan('dev'));
  }

  protected routes(): void{
    this.app.use('/api', LoginRoutes);
    this.app.use('/user', UserRoutes);
  }
}

const app = new Server().app
const port: number = 3000;

app.listen(port, () => {
  console.log(process.env.APP_ENV);
  console.log(`Server is running on http://localhost:${port}`);
});