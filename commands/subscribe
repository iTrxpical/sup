const Discord = require('discord.js');

exports.run = async (Discord, client, message, args) => {
let giveRole = message.guild.roles.find("name", "TGS Subscriber");
if(message.author.roles.has(giveRole.id)) return message.channel.send("You already have the role!");
await (message.author.addRole(giveRole.id))
message.channel.send("Role Added")

}
