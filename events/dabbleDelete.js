const { Events } = require("discord.js");

module.exports = {
  name: Events.MessageCreate,
  execute(message) {
    if (!(message.channelId in global.messageHistory))
      global.messageHistory[message.channelId] = message.author.id;
    else {
      if (
        global.messageHistory[message.channelId] === message.author.id &&
        message.author.id === global.dabUserId &&
        global.isDabbleEnabled
      ) {
        console.log(`Deleting message: ${message.content}`);
        message.delete();
      } else global.messageHistory[message.channelId] = message.author.id;
    }
  },
};
