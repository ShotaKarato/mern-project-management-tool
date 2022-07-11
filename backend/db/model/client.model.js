const mongoose = require("mongoose");
const clientSchema = require("../schema/client.schema");

const Client = mongoose.model("Client", clientSchema);
module.exports = Client;
