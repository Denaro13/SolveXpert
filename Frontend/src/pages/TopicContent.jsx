import { useParams } from "react-router-dom";
import { contents } from "../assets/utils/data";

const TopicContent = () => {
  const { topic } = useParams();
  const topicContent = contents.filter((content) => content.topic === topic);
  const { overview } = topicContent[0];
  return (
    <section className="py-4 px-6">
      <h1 className="capitalize text-3xl mb-4">{topic}</h1>
      {/* <p>{overview}</p> */}
      <p>
        Our maths experts are working to provide you with the best maths content
        to help improve your understanding of mathematics.{" "}
      </p>
      <p className="text-3xl mt-4">Stay tuned!</p>
    </section>
  );
};

export default TopicContent;
