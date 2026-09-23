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
    .setAssetsLargeImage("https://cdn.discordapp.com/attachments/1381140647322583195/1552388329620897822/download.webp?ex=6ab56dcb&is=6ab41c4b&hm=a88f8592b26b0648f3b61e6b66e383e352f91c3cc72ec7d11c6a18c10e766e2a&")
    .addButton("Join Server", "https://discord.gg/CvbBtrpCc4");
          
  client.user.setActivity(r);
});

const mySecret = process.env["TOKEN"];
client.login(mySecret);
