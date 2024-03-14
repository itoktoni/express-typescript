import { Router, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import Password from '../utils/Password';

class AuthController {

  public async register(req: Request, res: Response): Promise<Response> {

    const prisma = new PrismaClient();
    const { username, email, password } = req.body

    const user = await prisma.user.findFirst({
      where: {
        username
      }
    })

    if (user) {
      return res.status(421).send({
        "message": "Username sudah Ada !",
        "code": 421
      });
    }

    const password_hash = await Password.hash(password);

    const body = await prisma.user.create({
      data: {
        username,
        email,
        password: password_hash
      }
    })

    return res.json({ message: "User Register Successfully !", data: body });
  }

  public async login(req: Request, res: Response): Promise<Response> {

    const prisma = new PrismaClient();
    const { username, password } = req.body
    const user = await prisma.user.findFirst({
      where: {
        username
      }
    })

    if (!user) {
      return res.status(421).send({
        "message": "Data tidak ditemukan !",
      });
    }

    let compare = await Password.compare(password, user.password);
    if (!compare) {
      return res.send({
        "message": "Data tidak ditemukan !",
        "code": 400
      });
    }

    return res.send(Password.token(user.id, user.username, user.password));

  }
}

export default new AuthController();


