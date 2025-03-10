-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "doulingoId" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "debt" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DailyExp" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "exp" INTEGER NOT NULL,

    CONSTRAINT "DailyExp_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_doulingoId_key" ON "User"("doulingoId");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- AddForeignKey
ALTER TABLE "DailyExp" ADD CONSTRAINT "DailyExp_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
