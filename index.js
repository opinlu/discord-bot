const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
require("dotenv").config()

const prefix = "-";

const client = new Discord.Client({
  allowedMentions: {
    parse: [`users`, `roles`, `everyone`],
    replieduser: true,
  },
  intents: [
    "GUILDS",
    "GUILD_MESSAGES",
    "GUILD_PRESENCES",
    "GUILD_MEMBERS",
    "GUILD_MESSAGE_REACTIONS",
  ],
});

client.on("ready", () => {
  console.log("Getting Cold");

  client.user.setActivity("Alaskan Polar Bears", { type: "WATCHING" });

  
});

client.on("messageCreate", (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  //message array var 

  const messageArray = message.content.split(" ");
  const argument = messageArray.slice(1);
  const cmd = messageArray[0];

    //test command

    if (command === "ekitten") {
      message.channel.send("im a uwu kitten");
    }

    //purge command 

    if (command === 'purge') {
      const amount = parseInt(args[0]);
      if (!amount) return Discord.Message.channel.send("Please specify the number of messages You want to delete.");
      if (amount > 100 || amount < 1) return message.channel.send("Please select a message **Between** 100 & 1!");

      message.channel.bulkDelete(amount).catch((err) => {
        message.channel.send("Due to Discord Limits, I cannot delte messages older thrn 14 days.");
      });

      const embed = new MessageEmbed()
      .setColor("#000000")
      .setDescription(`<a:check_yes:1016128563151372349> | Successfully Purged **${amount}** messages.`)
    

      message.channel.send({ embeds: [embed] });
    message.delete();
      
    }

     //MEMBER COUNT

  if (cmd === `${prefix}membercount`) {
    const embed = new MessageEmbed()

      .setColor("#990000")
      .addField(`MemberCount`, `${message.guild.memberCount}`, true)
      .setTimestamp();

    message.channel.send({ embeds: [embed] });
    message.delete();
  }

    //ssvote command 

    if (command === 'ssuvote') {
      const embed = new MessageEmbed()
      .setColor('#000000')
      .setTitle(`Server Start Up Vote`)
      .setDescription(`<:asrp:1016192762057601114>*| A Server Start Up Vote ahs just been called out by <@${message.author.id}>! React with the <a:check_yes:1016128563151372349> If You can join!* **Votes needed: 7+**`)
      .setTimestamp()
      .setImage(`https://media.discordapp.net/attachments/1010671199812075551/1012392189713711154/blue_alaska.jpg`)
      .setThumbnail(`https://cdn.discordapp.com/emojis/1012028493934116884.webp?size=96&quality=lossless`)

      message.channel.send({content: '@here / <@&1016132066083078144>', embeds: [embed]}).then(msg => {
        msg.react("<a:check_yes:1016128563151372349>");
    });
    }

    //ssu command 

    if (command === 'ssu') {
      const embed = new MessageEmbed()
      .setColor('#00FF00')
      .setTitle(`Server Start Up!`)
      .setDescription(`<:asrp:1016192762057601114> | <@${message.author.id}> has just started up the In-Game server! Thank to them, we can now Enojy our roleplays!* **If You voted you must join within 10 minutes of our SSU!`)
      .setTimestamp()
      .setImage(`https://media.discordapp.net/attachments/1010671199812075551/1012392207229136916/green_alaska.jpg`)

      message.channel.send({ embeds: [embed] });
      message.delete()
    }

    if (command === 'slave') {
      const embed = new MessageEmbed()
      .setColor(`RED`)
      .setTitle(`Nigga`)
      .setDescription(`NIOGGER NIOGGERNIOGGERNIOGGERNIOGGERNIOGGERNIOGGERNIOGGER`)

      message.channel.send({ embeds: [embed] });
      message.delete()
    }

    if (command === 'appeal') {
      const embed = new MessageEmbed()
      .setColor(`#000000`)
      .setTitle(`Ban Appeal`)
      .setDescription(`<:c_ban:1016129488263843871> | **The Ban appeal can be found [Here!](https://forms.gle/MGZkxpeJ6wDnBo1S7)**`)

      message.channel.send({ embeds: [embed] })
      message.delete()
    }

    if (command === 'promo') {
      const embed = new MessageEmbed()
      .setColor(`#000000`)
      .setTitle(`Staff Promotion Format`)
      .setDescription(`<:c_education:1016129366486437908> | **Staff Team Promotions Wave (wave)!**
      *The following people listed below have shown great activity and respoect for the server and they have been promoted. Give them a congrats!*
      
      (Staff:)(rank)
      
      *As always, congrats!*`)

      message.channel.send({ embeds: [embed] })
      message.delete()
    }

     //ssufull cmd

     if (command === 'ssufull') {
      const embed = new MessageEmbed()
      .setColor('#80080')
      .setTitle(`Server Start Up Full`)
      .setDescription(`<:asrp:1016192762057601114> | Our In-Game Sessions is now full in Players, Keep trying to join!`)
      .setImage(`https://media.discordapp.net/attachments/1010671199812075551/1012396082472435733/purple_alaska.jpg`)
      .setTimestamp()

      message.channel.send({ embeds: [embed]}).then(msg => {
        msg.react("<a:duck:1012396477672337498>");
        message.delete()
    });
    }

    //ssd command 

    if (command === 'ssd') {
      const embed = new MessageEmbed()
      .setColor('#FFA500')
      .setTitle('Server Shut Down')
      .setDescription(`<a:wave:1016359100214411324> | Our In-Game Server has just been shut down by <@${message.author.id}>. Please **do not** join our In-Game server until we open it back up some time tomorrow.`)
      .setImage(`https://media.discordapp.net/attachments/1010671199812075551/1012392229681246400/orange_alaska.jpg`)
      .setTimestamp()
      .setFooter('See You tomorrow!')

      message.channel.send({ embeds: [embed] })
      message.delete()

    }

    //punishment command usage

    if (command === 'plog') {
      const embed = new MessageEmbed()
      .setColor('DARK_GREY')
      .setTitle('Staff Infraction Commands')
      .setDescription('Welcome Internal Affairs Members. The goal of a IA Member is to keep all Staff Professional and handle Staff punishments. There are a few commands for Staff punishments. They can be found below.')
      .addFields(
        { name: 'Notice', value: '`-notice (Staff) (Reason)`', inline: true },
        { name: 'Warning', value: '`-warning (Staff) (Reason)`', inline: true },
        { name: 'Strike', value: '`-strike (Staff) (Reason)`', inline: true },
        { name: 'Demotion', value: '`-demotion (Staff) (Reason)`', inline: true },
        { name: 'Termination', value: '`-termination` (Staff) (Reason)`', inline: true },
      )

      message.channel.send({ embeds: [embed] })
      message.delete()
    }

    if (command === 's') {
      const embed = new MessageEmbed()
      .setColor('#000000')
      .setTitle(`How to SSD`)
      .setDescription(`When you shut down the server, there is a few steps that you must follow. First, you just use the command "-ssd" in the <#1016138267504148570> channel. Then, once you have done that use this m command, "Our in-game has just shut down for today or a while. Please leave the game or you will be kicked!". After you have done that simply kick all. If you want you can say in the sessions channel, "Thanks for joining today! 🍪". `)

      message.channel.send({ embeds: [embed] })
      message.delete()
    }

    if (cmd === 'bolo') {
      const embed = new MessageEmbed()
      .setColor(`#000000`)
      .setTitle(`Ban bolo format!`)
      .setDescription(`<:information:1016189421390942309> | **Use this format for Ban bolos only!** **User:** **Reason:**`)

      message.channel.send({ embeds: [embed] })
      message.delete()
    }

    if (command === 'help') {
      const embed = new MessageEmbed()

      .setColor(`#000000`)
      .setTitle(`<:asrp:1016192762057601114> Help Needed`)
      .setDescription(`<:redline:1016128887949889606><:redline:1016128887949889606><:redline:1016128887949889606><:redline:1016128887949889606><:redline:1016128887949889606><:redline:1016128887949889606><:redline:1016128887949889606>
      <:asrp:1016192762057601114> <@${message.author.id}> needs help in-game!
      <a:bell:1016389329813262418> **Please join in-game so we can keep the server up!**`)

      message.channel.send({content: '@here', embeds: [embed]}).then(msg => {
        msg.react("<a:check_yes:1016128563151372349>");
        message.delete()
    });
    }
    
});

client.login(
  "MTAxMjAyODQzODg5NjQ1MTYzNQ.Gw_WXL.OJEUyGkaXxrrLc7HLgSBDyURKJvywwM4F8o-vA"
);