import { Link } from "react-router-dom";

const QuestionCard = () => {
  return (
    <div>
      <h1>Question 1</h1>
      <Link to="/solve/123">Provide Solution</Link>
    </div>
  );
};

export default QuestionCard;
