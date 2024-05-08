import ImageModal from "./ImageModal";

const ImageContainer = ({ id, field, image }) => {
  return (
    <div className=" bg-white w-[40%] h-fit pt-4 px-2 pb-8">
      <div className="mb-4">
        <h1 className="capitalize text-sm sm:text-base md:text-lg mb-2 font-bold">
          {field} task
        </h1>
        <h4 className="capitalize text-xs sm:text-base mb-2">
          task id :{" "}
          <span className="text-[7px] md:text-[12px] lg:text-lg ">{id}</span>
        </h4>
      </div>

      <img src={image} alt="question image" className="w-full" />
      <ImageModal image={image} />
    </div>
  );
};

export default ImageContainer;
