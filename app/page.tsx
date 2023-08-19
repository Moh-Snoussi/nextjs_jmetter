import { PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

export default async function Home() {
  const questions = await prisma.pollsQuestion.findMany({
    include: {
      Choices: true,
  }});

  return (
      <div>
      <h1>questions</h1>
      <ul>
        {questions.map((question : any) => (
          <li key={question.Id}>
            <h2>{question.QuestionText}</h2>
            <h3>Choices:</h3>
            <ul>
              {question.Choices.map((choice: prisma.PollsChoice) => (
                <li key={choice.id}>{choice.ChoiceText}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};


