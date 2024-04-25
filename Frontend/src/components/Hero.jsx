const Hero = () => {
  return (
    <section className="w-full h-[calc(100vh-4rem)] grid place-items-center bg-slate-300 ">
      <div className=" w-[90vw] mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="mb-16 md:mb-0 md:mr-10 text-center md:text-left">
          <h1 className="capitalize text-5xl sm:text-7xl md:text-5xl lg:text-7xl font-bold tracking-wider">
            solve<span className="text-red-700">Xpert</span>
          </h1>
          <h4 className="text-3xl sm:text-4xl md:text-2xl lg:text-4xl capitalize">
            educational services
          </h4>
          <p className="text-2xl sm:text-3xl md:text-2xl lg:text-3xl mt-4 ">
            Best solutions to any maths problem
          </p>
        </div>
        <div className="">
          <img src="solution-mindset.svg" alt="solution mindset" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
