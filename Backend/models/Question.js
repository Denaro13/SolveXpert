const mongoose = require("mongoose");

const QuestionSchema = mongoose.Schema(
  {
    field: {
      type: String,
      required: [true, "Please provide math field"],
      enum: ["Elementary", "Algebra", "Geometry", "Statistic", "Calculus"],
    },
    image: {
      type: String,
      required: [true, "Please provide question image"],
    },
    solution: {
      type: [],
      default: [],
    },
    solved: {
      type: Boolean,
      default: false,
    },
    price: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Question", QuestionSchema);
