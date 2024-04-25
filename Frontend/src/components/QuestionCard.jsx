import { Link } from "react-router-dom";

const QuestionCard = ({ id, src, field }) => {
  // console.log(id);
  return (
    <article className=" h-auto w-[20rem] bg-white rounded-md">
      <img
        src={src}
        alt="maths question"
        className="rounded-t-lg h-64 w-full object-fill"
      />
      <div className="flex items-center justify-between px-2 py-4">
        <h4 className="capitalize">field: {field}</h4>
        <Link
          to={`/solve/${id}`}
          className="bg-red-700 text-white capitalize text-sm py-1 px-2 rounded-lg hover:bg-red-800"
        >
          provide solution
        </Link>
      </div>
    </article>
  );
};

export default QuestionCard;