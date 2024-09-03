import { Request, Response } from "express";
import AppDataSource from "../data-source";
import { Users } from "../entities/Users";
import { Any, Repository } from "typeorm";
import { validate } from "class-validator";

class UserController {
  private usersRepository: Repository<Users>;

  constructor() {
    this.usersRepository = AppDataSource.getRepository(Users);
  }

  async findAll(req: Request, res: Response): Promise<Response> {
    const usersRepository = AppDataSource.getRepository(Users);
    const users = await usersRepository.find();

    return res.status(200).send({
      status: true,
      data: users,
    });
  }

  async create(req: Request, res: Response): Promise<Response> {
    const usersRepository2 = AppDataSource.getRepository(Users);
    const { name, password, email } = req.body;

    const createUser = new Users();
    createUser.name = name;
    createUser.email = email;
    createUser.password = password;

    const errors = await validate(createUser);
    if (errors.length > 0) {
      return res.status(422).send({
        errors: errors,
      });
    }

    if(name === '' || email === '' || password === ''){
      return res.status(404).send({
        status: false,
        data: "Preencha todos os Campos"
      })
    }

    const validation = await usersRepository2.find({
      where: { email: createUser.email },
    });
    console.log(validation);
    if (validation.length > 0) {
      return res.status(400).send({
        data: `ERRO O EMAIL${createUser.email} JA EXISTE`,
      });
    }

    const newUser = await usersRepository2.save(createUser);

    return res.status(201).send({
      status: true,
      data: newUser,
    });
  }

  async delete(req: Request, res: Response): Promise<Response> {
    const id: number = Number(req.params.id);
    const usersRepository2 = AppDataSource.getRepository(Users);
    const user = await usersRepository2.findOneBy({ id });

    if(!user){
      return res.status(404).send({
        status: false,
        data: "Usuário não Encontrado."
      })
    }
    await usersRepository2.remove(user);

    return res.status(422).send({
      status: true,
      data: "Usuario deletado com sucesso",
    });
  }

  async edit(req: Request, res: Response): Promise<Response> {
    const usersRepository2 = AppDataSource.getRepository(Users);
    const { name, password, email } = req.body;

    const createUser = new Users();
    createUser.name = name;
    createUser.email = email;
    createUser.password = password;

    const errors = await validate(createUser);
    if (errors.length > 0) {
      return res.status(422).send({
        status: false,
        errors: errors,
      });
    }

    const validation = await usersRepository2.findOneBy({ email });
    console.log(validation);
    if (validation) {
      if (name) validation.name = name;
      if (password) validation.password = password;
      if (email) validation.email = email;

      const newUser = await usersRepository2.save(validation);

      return res.status(201).send({
        status: true,
        data: newUser,
      });
    } else {
      return res.status(404).send({
        data: "Usuário não encontrado. ",
      });
    }
  }

  async findId(req: Request, res: Response): Promise<Response> {
    const id: number = Number(req.params.id);
    const usersRepository2 = AppDataSource.getRepository(Users);
    const user = await usersRepository2.findOneBy({id});

    if(!user){
      return res.status(404).send({
        status: false,
        data: "Usuário não Encontrado."
      })
    }

    return res.status(422).send({
      status: true,
      data: user,
    });
  }
}

export default new UserController();
