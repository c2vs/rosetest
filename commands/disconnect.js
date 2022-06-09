const Command = require("../structures/command.js");

module.exports = new Command({
	name: "disconnect",
	aliases: ['dc', 'انجبي', 'stop'],
	description: "تطفي الاغاني وتطلع من الروم",
	permission: "SEND_MESSAGES",
	async run(message, args, client, slash) {
        const queue = client.player.getQueue(message.guild);
        if (queue) await queue.destroy(true);
		message.guild.me.voice.disconnect();
        slash ? message.reply({embeds: [{ description: `👋 طفيته, color: 0x44b868 }]}) : message.react('👋');
	}
});
