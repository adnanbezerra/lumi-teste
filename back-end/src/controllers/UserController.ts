import { Request, Response } from 'express';
import * as userService from '../services/UserService';
import { INewUser } from '../types/UserTypes';

export async function postSignin(req: Request, res: Response) {
  const login: INewUser = req.body;

  const user = await userService.userLogin(login);

  res.status(200).send(user);
}

export async function postSignup(req: Request, res: Response) {
  const newUser: INewUser = req.body;

  await userService.createNewUser(newUser);

  res.sendStatus(201);
}
