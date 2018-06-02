const Discord = require('discord.js');
const client = new Discord.Client();
const db = require('quick.db');
const prefix = "[]";

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}! There are no apparent major bugs on my support bot.`);
    client.user.setActivity('over people. | =info', { type: 'WATCHING' });
    client.user.setStatus("online");
});

client.on('message', message => {

    let sender = message.author;

    if (sender.bot) return;
    if (message.channel.type === 'dm') {
        
    //const name = message.guild.name
    //const owner = message.guild.owner
    //let invitechannel = client.channels.get("id", "449182354507038720")
    //const invitechannel = client.channels.find("id", "449182354507038720")
    //const randomchannel = message.guild.channels.first()
    //const randomchannelid = randomchannel.id
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    //var channel = client.channels.get("449182354507038720")
  
    var joinEmbed = new Discord.RichEmbed()
    .setTitle("New Guild")
    .setColor(randomColor)
    .setFooter("iBot | New Guild")
    .setTimestamp()
    .setThumbnail('https://cdn.discordapp.com/attachments/379006942875746306/451309167127560193/circle.png')
    //.setDescription("iBot has joined a new guild called, " + name + "! It is owned by " + owner + ".")
    //.addFild("Invite:", `https://discord.gg/${invite.code}`)
   //.addFild("Random Channel ID", randomchannelid)
  
    let c = client.channels.get("449182354507038720")
    c.send(joinEmbed)
        message.channel.send("**We can't read anything in DM's! Please go into a guild with me in and run the command `=info` for information about me!!!**")
        return;
    }
    
    var guildid = message.guild.id
    
    let msg = message.content.toLowerCase();
    let args = message.content.slice(prefix.length).trim().split(" ");
    let cmd = args.shift().toLowerCase();  

     if (!message.content.startsWith(prefix)) return;

        try {

            let commandFile = require(`./commands/${cmd}.js`);
            commandFile.run(Discord, client, message, args);

        } catch (e) {

            console.log(e);

        } finally {

            console.log(`${message.author.username} ran the command: ${cmd} and is being passed onto the handler...!`);

        }
})

client.login(process.env.TOKEN);
