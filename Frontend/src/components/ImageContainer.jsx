import ImageModal from "./ImageModal";

const ImageContainer = ({ id, field, image }) => {
  return (
    <div className=" bg-white w-[40%] h-fit pt-4 px-2 pb-8">
      <div className="mb-4">
        <h1 className="capitalize mb-2">{field} task</h1>
        <h4 className="capitalize text-sm">task id : {id}</h4>
      </div>

      <img src={image} alt="question image" className="" />
      <ImageModal image={image} />
    </div>
  );
};

export default ImageContainer;
