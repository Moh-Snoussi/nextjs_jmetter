-- CreateTable
CREATE TABLE "PollsQuestion" (
    "id" SERIAL NOT NULL,
    "questionText" TEXT NOT NULL,
    "pubDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PollsQuestion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PollsChoice" (
    "id" SERIAL NOT NULL,
    "choiceText" TEXT NOT NULL,
    "votes" INTEGER NOT NULL,
    "questionId" INTEGER NOT NULL,

    CONSTRAINT "PollsChoice_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PollsChoice" ADD CONSTRAINT "PollsChoice_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "PollsQuestion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

