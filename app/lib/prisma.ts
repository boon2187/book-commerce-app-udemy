import { PrismaClient } from "@prisma/client";

let prisma: PrismaClient;

// シングルトンパターンでPrismaClientを初期化
// globalオブジェクトを作成して、PrismaClientを初期化
const globalForPrisma = global as unknown as {
  prisma: PrismaClient | undefined;
};

// PrismaClientが初期化されていない場合、初期化する
if (!globalForPrisma.prisma) {
  globalForPrisma.prisma = new PrismaClient();
}

prisma = globalForPrisma.prisma;

export default prisma;
