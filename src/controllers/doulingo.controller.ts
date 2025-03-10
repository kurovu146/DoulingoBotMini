import { Request, Response } from 'express';
import axios from 'axios';
import { prisma } from '../database/prisma.js';

export class DoulingoController {

    static async GetExpToday(req: Request, res: Response): Promise<void> {
        try {
            const { userID } = req.query;

            if (!userID) {
                res.status(400).json({ message: 'userID is required' });
            }

            const response = await axios.get(`https://www.duolingo.com/2017-06-30/users/${userID}/xp_summaries`, {
              headers: {
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
                'Accept-Encoding': 'gzip, deflate, br, zstd',
                'User-Agent': 'Mozilla/5.0 (compatible; DuolingoStreakChecker/1.0)'
              }
            });
      
            res.status(200).json(response.data?.summaries.slice(0, 2));
        } catch (error) {
            res.status(500).json({ error: "Lỗi server!" });
        }
    }
}