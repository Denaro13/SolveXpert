import TipsAccordion from "../components/TipsAccordion";

const SolvingTips = () => {
  return (
    <section className="w-[75%] h-[calc(100vh-4rem)] mx-auto pt-10 pb-5">
      <h1 className="capitalize text-2xl font-bold mb-4">Tips for solving</h1>
      <TipsAccordion />
    </section>
  );
};

export default SolvingTips;
