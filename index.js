const discord = require("discord.js-selfbot-v11")
const stevedore = require("fs")

const client = new discord.Client()
const server = require('./server.js')

const config = require("./config.json")

const traits = stevedore.readdirSync("./traits/")
traits.forEach(file => {
  const traitname = file.split(".")[0]
  const event = require(`./traits/${file}`);
  client.on(traitname, event.bind(null,  client));
})

client.login(process.env.token)