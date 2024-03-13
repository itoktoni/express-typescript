import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client'

export const registerUser = async (req: Request, res: Response) => {

  const prisma = new PrismaClient();
  const { username, email, password } = req.body
  const body = await prisma.user.create({
    data: {
      username, email, password
    }
  })

  res.json({ message: 'User registered successfully', data: body });

};

export const loginUser = async (req: Request, res: Response) => {

  const prisma = new PrismaClient();
  const { username, email, password } = req.body
  const data = await prisma.user.findFirst({
    where: {
      username, password
    }
  })

  if (data != null) {
    res.json({ message: 'User logged in successfully', data: req.body });
  } else {
    res.json({ message: 'User Not Found' });
  }

};