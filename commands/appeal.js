    exports.run = (Discord, client, message, args) => {

let sender = message.author;
let blacklistedRole = message.guild.roles.find("name", "MUTED/SUSPENDED");

       if(!message.member.roles.has(blacklistedRole.id)) {
	        var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    		var embedping = new Discord.RichEmbed()
        .setColor(randomColor)
	.setTitle(":x: Angry Appeal Angel")
	.setDescription("You are not muted. Stay away from those bad people.")
	.setImage("https://media.giphy.com/media/g69ZPJfLy7hD2/giphy.gif")
    message.author.send(embedping)
    .then(m=>m.delete(10000))
	return;
        
       } else {
         if (message.channel.id === '445297657145982976') {
	message.delete()
	} else {
	message.reply("unfortunately we can't book in this channel! Please go to <#445297657145982976> to book appeal.")	
	.then(m=>m.delete(10000))
	return;
	}
	
var type = "";	
	
	message.author.send('Please write your appeal to be un-muted. There must be serveral points which are stated in detail. Grammar is also appreciated. (This message will be deleted shortly)')
	.then(m=>m.delete(10000))
      .then(function(){
        message.channel.awaitMessages(response => message.content, {
          max: 1,
          time: 300000,
          errors: ['time'],
        })
        .then((collected) => {
        let appeal = collected.first().content;
	message.delete()
          })
          .catch(function(){
            message.channel.send('Time expired. Please try again.');
	    .then(m=>m.delete(10000))
          });
      });
  }
	       
	       
const collected = await message.channel.awaitMessages(answer => item.a.includes(answer.content.toLowerCase()));
    const winnerMessage = collected.first();
    return message.channel.send({embed: new Discord.RichEmbed()
                                 .setAuthor(`Winner: ${winnerMessage.author.tag}`, winnerMessage.author.displayAvatarURL)
                                 .setTitle(`Correct Answer: \`${winnerMessage.content}\``)
                                 .setFooter(`Appeal Included | Top Confidential`)
                                 .setColor(message.guild.me.displayHexColor)
                                })
	       
const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 60000 });
           message.channel.send("What plan do you wish to book? (`Gold`, `Silver` or `Bronze`)");
	        collector.on('collect', message => {
            if (message.content == "Gold") {
		type = 'Gold'
                    var embedgold = new Discord.RichEmbed()
		.addField("Gold:", ":white_check_mark:")
		.addField("Silver:", ":negative_squared_cross_mark:")
		.setColor("#FFD700")
		.addField("Bronze:", ":negative_squared_cross_mark:");
		message.channel.send(embedgold)
            } else if (message.content == "Silver") {
                    var embedsilver = new Discord.RichEmbed()
		.addField("Gold:", ":negative_squared_cross_mark:")
		.addField("Silver:", ":white_check_mark:")
		.setColor("#C0C0C0")
		.addField("Bronze:", ":negative_squared_cross_mark:");
		message.channel.send(embedsilver)
		type = 'Silver'
            } else if (message.content == "Bronze") {
                    var embedbronze = new Discord.RichEmbed()
		.addField("Gold:", ":negative_squared_cross_mark:")
		.addField("Silver:", ":negative_squared_cross_mark:")
		.setColor("#CD7F32")
		.addField("Bronze:", ":white_check_mark:");
		message.channel.send(embedbronze)
		type = 'Bronze'
	    }
		})
        
			     
        let bookname = message.author;
    
function embedBook() {
    var bookEmbed = new Discord.RichEmbed()
    .setTitle("Go Karting Xtreme")
    .setDescription("Private Booking")
    .setColor("#15f153")
    .addField("Booker", `${bookname} with the ID: ${bookname.id}`)
    .addField("Type", `${type}`)
    .addField("Booked At", message.createdAt)
    .setFooter("Private Booking V1.0");

    let bookingchannel = message.guild.channels.find(`name`, "private-hire");
    if(!bookingchannel) return message.channel.send("There has been an error with our system, contact TheReal_CatCrafter to check the problem out.");
    bookingchannel.send(bookEmbed);
    message.reply("Your booking has been placed! Expect a DM from our team shortly!")
}
setTimeout(embedBook,2e4)
       }
}
