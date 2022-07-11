const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["Not Started", "In Progress", "Completed"],
    required: true,
  },
  clientId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Client",
  },
});

module.exports = projectSchema;
