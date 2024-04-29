const Question = require("../models/Question");
const { StatusCodes } = require("http-status-codes");
const CustomError = require("../errors");
const path = require("path");

const createQuestion = async (req, res) => {
  const question = await Question.create(req.body);
  res.status(StatusCodes.CREATED).json({ question });
};
const getAllQuestions = async (req, res) => {
  const questions = await Question.find({});
  res.status(StatusCodes.OK).json({ questions, count: questions.length });
};

const getSingleQuestion = async (req, res) => {
  const question = await Question.findOne({ _id: req.params.id });
  if (!question) {
    throw new CustomError.NotFoundError(
      `There is no question with id: ${req.params.id}`
    );
  }
  res.status(StatusCodes.OK).json({ question });
};

const updateQuestion = async (req, res) => {
  const question = await Question.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true, runValidators: true }
  );
  if (!question) {
    throw new CustomError.NotFoundError(
      `There is no question with id: ${req.params.id}`
    );
  }
  res.status(StatusCodes.OK).json({ question });
};
const deleteQuestion = async (req, res) => {
  const question = await Question.findOne({ _id: req.params.id });
  if (!question) {
    throw new CustomError.NotFoundError(
      `There is no question with id: ${req.params.id}`
    );
  }
  await question.remove();
  res.status(StatusCodes.OK).json({ msg: "Success! Question Removed" });
};
const uploadImage = async (req, res) => {
  if (!req.files) {
    throw new CustomError.BadRequestError("No file uploaded");
  }
  const questionImage = req.files.image;
  if (!questionImage.mimetype.startsWith("image")) {
    throw new CustomError.BadRequestError("Please upload an image");
  }

  const maxSize = 1024 * 1024;
  if (questionImage.size > maxSize) {
    throw new CustomError.BadRequestError(
      "Please upload an image less than 1MB"
    );
  }

  const imagePath = path.join(
    __dirname,
    "../public/uploads/" + `${questionImage.name}`
  );

  await questionImage.mv(imagePath);

  res.status(StatusCodes.OK).json({ msg: `/uploads/${questionImage.name}` });
};

module.exports = {
  createQuestion,
  getAllQuestions,
  getSingleQuestion,
  updateQuestion,
  deleteQuestion,
  uploadImage,
};
