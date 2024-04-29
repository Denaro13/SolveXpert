const express = require("express");
const router = express.Router();
const {
  createQuestion,
  getAllQuestions,
  getSingleQuestion,
  updateQuestion,
  deleteQuestion,
  uploadImage,
} = require("../controllers/questionsControllers");

router.route("/").get(getAllQuestions).post(createQuestion);
router.route("/uploadImage").post(uploadImage);
router
  .route("/:id")
  .get(getSingleQuestion)
  .patch(updateQuestion)
  .delete(deleteQuestion);

module.exports = router;
