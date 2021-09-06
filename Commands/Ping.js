const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {
    message.channel.send(":timer: **|** Chargement ...").then(m =>{
        m.edit(`:ping_pong: **|** Hello, **${client.user.username}** ping is \`${m.createdTimestamp - message.createdTimestamp}ms\` !`)
      })
}
exports.conf = { commands: ["ping"], usage: "[p]ping", enabled: true, guildOnly: true};
