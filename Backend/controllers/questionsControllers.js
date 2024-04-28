const getAllQuestions = async (req, res) => {
  res.send("All maths questions");
};
const getSingleQuestion = async (req, res) => {
  res.send("Single maths question");
};
const updateQuestion = async (req, res) => {
  res.send("Update maths question");
};

module.exports = {
  getAllQuestions,
  getSingleQuestion,
  updateQuestion,
};
