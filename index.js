const Discord = require('discord.js');
const client = new Discord.Client();
const express = require('express');
const app = express();
const http = require('http');
const config = require('./config.json')
const yt = require('ytdl-core');
app.get("/", (request, response) => {
    console.log(Date.now() + " Ping Received");
    response.sendStatus(200);
      });
     app.listen(process.env.PORT);
      setInterval(() => {
        http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
      }, 280000);
// Join
client.on("guildMemberAdd", (member) => {
    member.guild.channels.find("name",
"general").send(`${member.user}, Welcome to this server!`);
 console.log(`${member.user} Joined`);
});
// Leave
 client.on("guildMemberRemove", (member) => {
     const membertag = member.user.tag
    member.guild.channels.find("name",
"general").send(`${membertag} left the server! What a meanie...`);
   console.log(`${membertag} left`);
 });
var mRespond = {
    "ayy": "Ayy lmao!",
    "Who made Proton?": "Proton was made by <@?260415308169347083>"
};

function getResponse(message) {mRespond[message.content.toLowerCase()];
}

client.on('message', (message) => {
    var response =
    getResponse(message);
    if (response) {

        message.channel.sendMessage(response);
    }
});
