const Command = require("../structures/command.js");
const { MessageEmbed } = require('discord.js');
const maxVolume = 100;

module.exports = new Command({
    name: "volume",
    aliases: ["الصوت"],
    description: "يغيرلك صوت الاغنيه",
    permission: "SEND_MESSAGES",
    options: [
        { description: 'الصوت من 1 الى 99999999999999999999999999999999999999999999 ', name: 'level', type: 4 }
    ],
    async run(message, args, client, slash) {
        const queue = client.player.getQueue(message.guild);
        if (!queue || !queue.playing) {
            const embed = new MessageEmbed();
            embed.setColor('#b84e44');
            embed.setDescription(`ترا ماكو شي مشغله بالسيرفر⁉️`);
            return message.reply({ embeds: [embed], ephemeral: true });
        }

        // returns the current volume, instructions for adjusting the volume if theres no args
        const vol = parseInt(args);
        if (!vol) {
            const embed = new MessageEmbed();
            embed.setColor('#44b868');
            embed.setDescription(`الصوت صار <a:emoji_107:974808429816324166>${queue.volume} \n*↳ لازم تسوي الصوت من **1** الى **${maxVolume}** to change the volume.*`);
            return message.reply({ embeds: [embed], ephemeral: true });
        }

        // checks if the volume has already set on the requested value
        if (queue.volume === vol) {
            const embed = new MessageEmbed();
            embed.setColor('#b84e44');
            embed.setDescription(` 🗿الصوت الغيرته هو نفسه \n*↳ Please try again with a different number.*`);
            return message.reply({ embeds: [embed] });
        }

        // checks the requested value is valid
        if (vol < 0 || vol > maxVolume) {
            const embed = new MessageEmbed();
            embed.setColor('#b84e44');
            embed.setDescription(`ماكو هيج رقم خيه. \n*↳ Please enter between **1** and **${maxVolume}** to change the volume.*`);
            return message.reply({ embeds: [embed] });
        }

        const success = queue.setVolume(vol);
        if(success)
            slash ? message.reply({embeds: [{ description: `<a:emoji_107:974808429816324> الصوت صار: ${vol}`, color: 0x44b868 }]}) : message.react(`✅`);
    },
});
