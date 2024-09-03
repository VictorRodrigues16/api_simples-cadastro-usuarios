import "reflect-metadata"
import { DataSource } from "typeorm";
import { Users } from "./entities/Users";

const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres", 
  password: "123",
  database: "cadastro_user",
  logging: true,
  entities: [Users],
  migrations: [
      __dirname + '/migrations/*.ts'
  ],
  subscribers: [],

})
AppDataSource.initialize()
              .then(() => console.log('connected success'))
              .catch((error) => console.log(error))
              
export default AppDataSource