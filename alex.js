require('dotenv').config()  

const Discord = require("discord.js")
const client = new Discord.Client()//({
    //partials: ["MESSAGE"]
//})
const BOT_PREFIX = "~"
const DEV_ME_COMMAND = "dev"
const MOD_ME_COMMAND = "mod"
client.on("ready", () => {
    console.log("Alex is rdy 0w0")
})

//client.on('messageDelete', msg => {
    //msg.channel.send("Could you not delete messages 0w0?")
//})

client.on('message', msg => {
    if (msg.content === "Lil sis is awesome 0w0") {
        msg.react("🤍")
    }

   if (msg.content == `${BOT_PREFIX}${MOD_ME_COMMAND}`) {
    modUser(msg.member)
    }
    if (msg.content == `${BOT_PREFIX}${DEV_ME_COMMAND}`) {
    devUser(msg.member)
    }
})

function modUser(member) {
    member.roles.add("796395670240100412")
}
function devUser(member) {
    member.roles.add("796394018187247626")
}

client.login(process.env.ALEX_TOKEN)
