const Question = require("../models/Question");
const { StatusCodes } = require("http-status-codes");
const CustomError = require("../errors");
const cloudinary = require("cloudinary").v2;
const fs = require("fs");

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
  const result = await cloudinary.uploader.upload(
    req.files.image.tempFilePath,
    {
      use_filename: true,
      folder: "math-questions",
    }
  );
  fs.unlinkSync(req.files.image.tempFilePath);
  res.status(StatusCodes.OK).json({ msg: { src: result.secure_url } });
};
const uploadSolutionImage = async (req, res) => {
  const result = await cloudinary.uploader.upload(
    req.files.image.tempFilePath,
    {
      use_filename: true,
      folder: "solution-images",
    }
  );
  fs.unlinkSync(req.files.image.tempFilePath);
  console.log(result.secure_url);
  res.status(StatusCodes.OK).json({ msg: { src: result.secure_url } });
};

module.exports = {
  createQuestion,
  getAllQuestions,
  getSingleQuestion,
  updateQuestion,
  deleteQuestion,
  uploadImage,
  uploadSolutionImage,
};
