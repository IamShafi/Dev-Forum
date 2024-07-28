import Question from "@/components/forms/Question";
import { auth } from '@clerk/nextjs/server';
import { ParamsProps } from "@/types";
import { getUserById } from "@/lib/actions/user.action";
import { getQuestionById } from "@/lib/actions/question.action";

const Page = async ({ params }: ParamsProps) => {
  const { userId } : { userId: string | null } = auth();
  
  if (!userId) return null;

  const mongoUser = await getUserById({ userId });
  // console.log(mongoUser);
  const result = await getQuestionById({ questionId: params.id });

  return (
    <>
      <h1 className="h1-bold text-dark100_light900">Edit Question</h1>

      <div className="mt-9">
        <Question
          mongoUserId={mongoUser?._id}
          type="Edit"
          questionDetails={JSON.stringify(result)}
        />
      </div>
    </>
  );
};

export default Page;
