const { EmbedBuilder } = require('discord.js');


module.exports = {
  name: "help",
  description: "Get information about the bot",
  permissions: "0x0000000000000800",
  options: [],
  run: async (client, interaction) => {
    try {
     

      const embed = new EmbedBuilder()
         .setColor('#FFB6C1')
      .setTitle('<a:nhay:1246437179647856671> Bot của Bún')
      .setDescription('Chào mừng đến với Music Bot!\n\n<a:music:1246437360749641838> Dưới đây là các lệnh có sẵn:\n\n' +
        '**/play :** Bắt đầu phát các bài hát.\n' +
        '**/ping :** kiểm tra độ trễ của bot.\n' +
        '**/support :** Hiển thị thông tin máy chủ hỗ trợ');

      return interaction.reply({ embeds: [embed] });
    } catch (e) {
    console.error(e); 
  }
  },
};
