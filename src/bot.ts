import { Telegraf } from 'telegraf';
import * as dotenv from 'dotenv';

dotenv.config();

const bot = new Telegraf(process.env.BOT_TOKEN || '');

// Lệnh /start
bot.start((ctx) => {
  ctx.reply('Chào mừng bạn! 🚀');
});

export function sendMessage(chatId: number | string, message: string) {
  return bot.telegram.sendMessage(chatId, message);
}

export default bot;
