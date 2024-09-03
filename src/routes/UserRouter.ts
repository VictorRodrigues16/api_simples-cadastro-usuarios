import { Router } from 'express';
import UserController from '../controllers/UserController';

const userRoutes = Router();

userRoutes.get('/', UserController.findAll);
userRoutes.post('/', UserController.create);
userRoutes.put('/', UserController.edit);
userRoutes.delete('/:id', UserController.delete);
userRoutes.get('/:id', UserController.findId);

export default userRoutes;
