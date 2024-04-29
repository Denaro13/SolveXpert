const mongoose = require("mongoose");

const QuestionSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide name"],
      maxLength: [20, "name cannot be more than 20 characters"],
    },
    field: {
      type: String,
      required: [true, "Please provide math field"],
      enum: ["Elementary", "Algebra", "Geometry", "Statistic"],
    },
    image: {
      type: String,
      required: [true, "Please provide question image"],
      default: "uploads/math01.jpeg",
    },
    solution: {
      type: String,
      default: "",
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
