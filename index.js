const Discord = require("discord.js-selfbot-v13");
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false,
});

const keepAlive = require("./server.js");
keepAlive();

const SERVER_INVITE_URL = "https://discord.com/invite/CvbBtrpCc4";
// The environment variable can override this value when configured in Replit.
const APPLICATION_ID = process.env["APPLICATION_ID"] || "104450756649373696";
// Discord presence timestamps must stay after the Unix epoch (1970).
const ACTIVITY_YEARS_AGO = 50;
const ACTIVITY_STARTED_AT =
  Date.now() - ACTIVITY_YEARS_AGO * 365.2425 * 24 * 60 * 60 * 1000;

client.on("ready", async () => {
  console.clear();
  console.log(`${client.user.tag} - rich presence started!`);

  if (!APPLICATION_ID) {
    console.error(
      "Missing APPLICATION_ID. Set it to the Discord Developer Application ID used for this Rich Presence.",
    );
    return;
  }

  const r = new Discord.RichPresence(client)
    .setApplicationId("1044509756649373696")
    .setType("PLAYING")
    .setName("INCHEON CORNER")
    .setDetails("Join Server Anti Circle↴")
    .setStartTimestamp(ACTIVITY_STARTED_AT)
    .setAssetsLargeImage("https://cdn.discordapp.com/attachments/1381140647322583195/1552517992372371536/IMG-20260705-WA0110.jpg?ex=6ac1c40d&is=6ac0728d&hm=8160a95079920803180543f3fc988271396eb25a4fd20c8ec606ba4b2ba03772&")
    .addButton("Join Server", "https://discord.gg/CvbBtrpCc4");
          
  client.user.setActivity(r);
});

const mySecret = process.env["TOKEN"];
client.login(mySecret);
