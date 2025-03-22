const { default: Channel } = require("./models/ChannelModel.js");
const { default: Message } = require("./models/MessagesModel.js");
const { default: User } = require("./models/UserModel.js");

module.exports = {
    User: require("./models/UserModel.js"),
    Channel: require("./models/ChannelModel.js"),
    Message: require("./models/MessagesModel.js")

  };