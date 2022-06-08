const Command = require("../structures/command.js");
const {MessageEmbed} = require('discord.js');
const config = require("../config");

module.exports = new Command({
        name: "links",
        aliases: ["link"],
        description: "Displays associated links",
        permission: "SEND_MESSAGES",
        async run(message, args, client, slash) {
                const embed = new MessageEmbed();
                embed.setColor('#44b868');
                embed.setDescription(`**Links:**\n
                Want to support me?
                https://tiktok.com/@c2vs
                Online Web Player
                ${process.env.WEBPLAYER || config.webplayer}?guildID=${message.guild.id}\n`);
                
                return message.reply({embeds: [embed]});
        }
});
