const Command = require("../structures/command.js");

module.exports = new Command({
	name: "lyrics",
	aliases: ['l'],
	description: "Displays the lyrics of the current or specified song",
	permission: "SEND_MESSAGES",
	async run(message, args, client) {
        const queue = client.player.getQueue(message.guild);
        if(args[1] || (queue && queue.playing)) {
            let query;
            if(args[1]) query = args.slice(1).join(" ");
            else query = queue.current.title;

            const result = await client.lyrics.search(query);
            if(!result) {
                message.channel.send({ content: "No lyrics found for `"+query+"`" });
            }
            else {
                let trimmedLyrics = result.lyrics.length > 4095 ? result.lyrics.substring(0, 4092) + "..." : result.lyrics;
                message.channel.send({ embeds: [{
                    title: `${result.title} - ${result.artist.name}`,
                    url: result.url,
                    thumbnail: {
                        url: result.thumbnail,
                    },
                    description: trimmedLyrics,
                }] });
            }
        }
	}
});