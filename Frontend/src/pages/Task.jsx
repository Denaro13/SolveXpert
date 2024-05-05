import QuestionsList from "../components/QuestionsList";

const Task = () => {
  return (
    <section className="py-8">
      <div className="w-[75%] mx-auto">
        <p className="sm:text-xl md:text-2xl mb-4">
          At <span className="text-red-700 font-bold italic">solveXpert</span>,
          our goal is to provide unique and clear step-by-step solutions to
          students to enhance swift understanding of every mathematical concept
          from basic to complex level.
        </p>
        <p className="text-[0.75rem] sm:text-sm md:text-base mb-5">
          When providing solutions, it is of top importance that you provide a
          solution to a question you feel competent to solve.
        </p>
      </div>
      <QuestionsList />
    </section>
  );
};

export default Task;
