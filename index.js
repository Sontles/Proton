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
 client.on("message", (message) => {
    var YUGOAPI = message.content.toLowerCase();
if(message.content.startsWith('whats a proton?') || message.content.startsWith('whats a proton?')) {
    message.author.send('wow, read this you dumb fuck')
    message.author.send('https://en.wikipedia.org/wiki/Proton')
 }
    if(YUGOAPI == "i dont like protons") {
    message.channel.send(`wow, you are so fucking mean`)
    }
    
        if(YUGOAPI == "fbi") {
        message.channel.send(`https://twitter.com/WindyC0ck/status/1031790769345052672`)
        }
    if(YUGOAPI == "yeet") {
        message.channel.sendFile ("https://cdn.discordapp.com/attachments/463351454590042115/482238072113856522/Yeet_Sound_Effect.mp3", "yeet.mp3")
        }
})

client.login(config.token)

 client.on('ready', () => {
    console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
    client.user.setStatus('Online')
    client.user.setActivity('Playing with Reality')
});
