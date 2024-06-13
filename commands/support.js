const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: "support",
  description: "Get support server link",
  permissions: "0x0000000000000800",
  options: [],
  run: async (client, interaction) => {
    try {

      const supportServerLink = "https://discord.gg/muffinie";
        const embed = new EmbedBuilder()
            .setColor('#FFB6C1')
            .setAuthor({
              name: 'Support Server',
              iconURL: 'https://cdn.discordapp.com/attachments/1230824451990622299/1230824519220985896/6280-2.gif?ex=6638ae28&is=66375ca8&hm=13e4a1b91a95b2934a39de1876e66c11711c7b30ac1a91c2a158f2f2ed1c2fc6&', 
              url: 'https://discord.gg/muffinie'
          })
            .setDescription(`➡️ **Tham gia máy chủ Discord của chúng tôi để được hỗ trợ và cập nhật:**\n- Discord - ${supportServerLink}`)
            .setImage('https://media.discordapp.net/attachments/1248156331785850901/1250653963716399164/zzz.gif?ex=666bb9c4&is=666a6844&hm=bdaf72a3a266c9e22621fe11f98dbb75834818f3896ca27ddcefcbcd78dd80c2&=&width=1165&height=655')
            .setTimestamp();

      return interaction.reply({ embeds: [embed] });
    } catch (e) {
    console.error(e); 
  }
  },
};
