const kick = require('../commands/kick')
const ping = require('../commands/ping')

module.exports = (client, msg) => {   // Ascolta il messaggio, ping/pong
    if (msg.content === 'ping') {
        return ping(msg)
    }
  
    if (msg.content.startsWith('!kick')) {    // Kick membri
        return kick(msg)
    }
}