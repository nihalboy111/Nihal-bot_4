const fs = require("fs");
module.exports.config = {
  name: "Rashid",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "𝙋𝙧𝙞𝙮𝙖𝙣𝙨𝙝 𝙍𝙖𝙟𝙥𝙪𝙩", 
  description: "hihihihi",
  commandCategory: "no prefix",
  usages: "admin",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  if (event.body.indexOf("admin")==0 || event.body.indexOf("Admin")==0 || event.body.indexOf("Rashid")==0 || event.body.indexOf("Rashid")==0) {
    var msg = {
        body: "🥀 🫅My Owner Rashid🫅 🥀",
        attachment: 
fs.createReadStream(__dirname + `/noprefix/1736612706499.jpg`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🫅", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
