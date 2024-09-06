import "reflect-metadata";
import { DataSource } from "typeorm";
import { Users } from "./entities/Users";
import * as dotenv from 'dotenv';

dotenv.config();

const AppDataSource = new DataSource({
  type: process.env.TYPE_DATABASE as any, 
  host: process.env.HOST_DATABASE, 
  port: Number(process.env.PORT_DATABASE), 
  username: process.env.USERNAME_DATABASE, 
  password: process.env.PASSWORD_DATABASE, 
  database: process.env.DATABASE, 
  logging: process.env.NODE_ENV === 'development', 
  entities: [Users],
  migrations: [
      __dirname + '/migrations/*.ts'
  ],
  subscribers: [],
});

AppDataSource.initialize()
  .then(() => console.log('Conexão bem-sucedida'))
  .catch((error) => console.log(error));

export default AppDataSource;
