const express = require("express");
const router = express.Router();
const {
  createQuestion,
  getAllQuestions,
  getSingleQuestion,
  updateQuestion,
  deleteQuestion,
  uploadImage,
  uploadSolutionImage,
} = require("../controllers/questionsControllers");

router.route("/").get(getAllQuestions).post(createQuestion);
router.route("/uploadImage").post(uploadImage);
router.route("/uploadSolutionImage").post(uploadSolutionImage);
router
  .route("/:id")
  .get(getSingleQuestion)
  .patch(updateQuestion)
  .delete(deleteQuestion);

module.exports = router;
