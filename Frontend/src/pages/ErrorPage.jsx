import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <section className="w-screen h-screen flex place-items-center">
      <div className="w-[95%] mx-auto flex flex-col justify-center items-center">
        <h1 className="font-bold text-4xl">Oops!</h1>
        <img
          src="/404-notFound.svg"
          alt="not found"
          className="w-[30rem] h-[30rem]"
        />
        <h2 className="font-bold capitalize text-3xl mb-2">page not found!</h2>
        <p className="text-xl mb-4">
          The page you are looking for is not available.
        </p>
        <Link
          to={"/"}
          className="capitalize bg-red-700 hover:bg-red-600 rounded-full text-white px-4 py-2"
        >
          Go Home
        </Link>
      </div>
    </section>
  );
};

export default ErrorPage;
