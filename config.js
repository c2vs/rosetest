module.exports = {

	//	These values will be ignored if you have set the environment variables (must be in uppercase)
	
		prefix: "1", // required, command prefix
		botToken: "OTg0MzgyMjA3MTMxMDA5MDM0.Gs9qbC.96c8KmFOoWJHHZXS8shP3Rh212WcnEro3m3UnY", // required, https://discordjs.guide/preparations/setting-up-a-bot-application.html#your-token
		clientId: "984382207131009034", // optional, the bot's client ID, leave empty to disable slash commands
		geniusApiToken: "3Ge9xQ_4DagRBC1UpgtYymghdqZTbz6Y-7i-5_fHsXv-l84yYVJjhr812ZkEr3tk", // optional, but recommended for lyrics search - https://genius.com/api-clients

		
		// still under development, so you should leave these empty
		webplayer: "", // optional
		cors: "*", // optional - stored in an array for multiple socket connections in the future. Set to "*" to accept all
};
