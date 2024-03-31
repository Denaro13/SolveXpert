const Hero = () => {
  return (
    <section className="w-full h-[calc(60vh-4rem)] flex items-center justify-center bg-slate-600 ">
      <div className="w-[95%] mx-auto flex gap-4 items-center justify-between">
        <div className="bg-red-400">
          <h1 className="capitalize text-7xl font-bold tracking-wider">
            solveXpert
          </h1>
          <h4 className="text-4xl capitalize">education services</h4>
          <p className="text-3xl mt-8 ">Best solutions to any maths problem</p>
        </div>
        <div className="hidden md:block">
          <img
            src="solution-mindset.svg"
            alt="solution mindset"
            className="hidden md:block"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
