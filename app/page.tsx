import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const dynamic = 'force-dynamic';

export default async function Home() {
  const questions = await prisma.pollsQuestion.findMany({
    include: {
      Choices: true,
    }
  });

  return (
    <div>
      <h2>Questions</h2>
      {questions.map((question: any) => (
        <div key={question.Id}>
          <h3>{question.QuestionText}</h3>
          {question.Choices.map((choice: any) => (
            <div key={choice.id}>
              <label htmlFor={choice.id}>
                {choice.ChoiceText}
              </label>
              <input type="radio" id={choice.id} name={question.Id} value={choice.id} />
            </div>
          ))}
        </div >
      ))
      }
    </div >
  );
};


