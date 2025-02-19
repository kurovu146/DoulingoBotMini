import bot from './bot';
import prisma from './database';

// Chạy bot
bot.launch().then(() => {
  console.log('🚀 Bot is running...');
});

// Đóng kết nối khi dừng
process.once('SIGINT', async () => {
  await prisma.$disconnect();
  bot.stop('SIGINT');
});

process.once('SIGTERM', async () => {
  await prisma.$disconnect();
  bot.stop('SIGTERM');
});
