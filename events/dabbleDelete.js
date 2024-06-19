const { Events } = require("discord.js");

module.exports = {
  name: Events.MessageCreate,
  execute(message) {
    if (!(message.channelId in global.messageHistory))
      global.messageHistory[message.channelId] = message.author.id;
    else {
      const randValue = 100 * Math.random();
      if (
        global.messageHistory[message.channelId] === message.author.id &&
        message.author.id === global.dabUserId &&
        randValue > 100 - global.dabbleRatio &&
        global.isDabbleEnabled
      ) {
        console.log(
          `Deleted Message: ${message.content} sent to channel: (${message.channelId})`
        );
        message.delete();
      } else global.messageHistory[message.channelId] = message.author.id;
    }
  },
};
