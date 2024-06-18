const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("dabble")
    .setDescription("Replies with dabble"),
  async execute(interaction) {
    if (interaction.user.id === global.dabUserId) {
      await interaction.reply("You can't use that command lol");
      return;
    }

    if (global.isDabbleEnabled) {
      await interaction.reply("dabble has been turned off.");
      global.isDabbleEnabled = false;
    } else {
      await interaction.reply("dabble has been turned on.");
      global.isDabbleEnabled = true;
    }
  },
};
