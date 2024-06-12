const { EmbedBuilder } = require('discord.js')

module.exports = {
  name: "ping",
  description: "check the bot latency",
  permissions: "0x0000000000000800",
  options: [],
  run: async (client, interaction) => {


    try {

      const start = Date.now();
      interaction.reply("Ping hiện tại của bot").then(msg => {
        const end = Date.now();
        const embed = new EmbedBuilder()
          .setColor(`#FFB6C1`)
          .setTitle(`Bot Latency`)
          .setDescription(`**Pong** : ${end - start}ms`)
        return interaction.editReply({ embeds: [embed] }).catch(e => { });
      }).catch(err => { })

    } catch (e) {
    console.error(e); 
  }
  },
};
