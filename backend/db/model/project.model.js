const mongoose = require("mongoose");
const projectSchema = require("../schema/project.schema");

const Project = mongoose.model("Project", projectSchema);
module.exports = Project;
