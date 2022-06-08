const Command = require("../structures/command.js");
const { MessageEmbed } = require('discord.js');

module.exports = new Command({
	name: "ping",
	aliases: ['البنق'],
	description: "Shows the ping of the bot",
	permission: "SEND_MESSAGES",
	async run(message, args, client, slash) {
		const embed = new MessageEmbed()
			.setDescription(` <a:emoji_107:974808429816324166> | البنگ: **${client.ws.ping} ms**`).setColor('#b84e44');
		const m = await message.reply({ embeds: [embed] });
		const msg = slash ? await message.fetchReply() : m;
		embed.setDescription(` <a:emoji_107:974808429816324166> | البنگ **${client.ws.ping} ms**\n <a:emoji_107:974808429816324166> | استجابه الرساله: **${msg.createdTimestamp - message.createdTimestamp} ms**\n`).setColor('#44b868');
		msg.edit(
			{ embeds: [embed] }
		);
	}
});
