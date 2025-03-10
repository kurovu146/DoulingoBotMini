import { prisma } from "../database/prisma.js";
import { Request, Response } from 'express';

export class UserController {
    static async getAllUsers(req: Request, res: Response) {
      try {
        const users = await prisma.user.findMany();
        res.json(users);
      } catch (error) {
        res.status(500).json({ error: "Lỗi server!" });
      }
    }
}