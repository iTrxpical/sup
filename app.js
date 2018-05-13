const Discord = require('discord.js');
const client = new Discord.Client();
const db = require('quick.db');

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}! There are no apparent major bugs on my support bot.`);
    client.user.setActivity('over people. | =info', { type: 'WATCHING' });
    client.user.setStatus("online");
});


client.on('message', message => {

    let sender = message.author;

    if (sender.bot) return;
    if (message.channel.type === 'dm') {
        message.channel.send("**We can't read anything in DM's! Please go into a guild with me in and run the command `=info` for information about me!!!**")
        return;
    }
    
    var guildid = message.guild.id

    db.fetch(`guildPrefix_${guildid}`).then(i => {

        let prefix = i || '='

        let msg = message.content.toLowerCase();
        let args = message.content.slice(prefix.length).trim().split(" ");
        let cmd = args.shift().toLowerCase();            
        
    currentprefix = db.fetch(`guildPrefix_${guildid}`)

        if (message.content.toLowerCase() === 'prefix') {
           message.reply("**Current Prefix (for this guild): **" + currentprefix)
        }
        if (message.content.toLowerCase() === 'appeal') {
           message.author.send("THIS IS WIP. PLEASE WAIT.")
           message.delete()
        }

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
})

client.login(process.env.TOKEN);
