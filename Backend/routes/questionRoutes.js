const express = require("express");
const router = express.Router();
const {
  getAllQuestions,
  getSingleQuestion,
  updateQuestion,
} = require("../controllers/questionsControllers");

router.route("/").get(getAllQuestions);
router.route("/updateQuestion").get(updateQuestion);
router.route("/:id").get(getSingleQuestion);

module.exports = router;
