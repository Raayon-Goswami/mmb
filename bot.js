console.log("initializing");
require("dotenv").config();
const Discord = require("discord.js");
const client = new Discord.Client({
  intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES],
});
client.login(process.env.BOTTOKEN);
client.on("ready", () => {
  console.log("bot is online");
  client.user.setActivity("/help for help (bot in progress)");
  const guildId = "870667753009319986";
  const guild = client.guilds.cache.get(guildId);
  let commands;
  if (guild) {
    commands = guild.commands;
  } else {
    commands = client.application?.commands;
  }
  commands?.create({
    name: "tp",
    description: "teleports obviously",
    options: [
      {
        name: "player",
        description: "username of the player",
        required: true,
        type: 3,
      },
      {
        name: "location",
        description: "location/player2",
        required: true,
        type: 3,
      },
    ],
  });
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand) {
    return;
  }
  const { commandName, options } = interaction;
});
