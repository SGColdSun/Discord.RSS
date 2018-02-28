const config = require('../config.json')
const commands = require('../util/commandList.json')
const log = require('../util/logger.js')

module.exports = (bot, message, command) => {
  let msg = `Arguments for commands are added after the command. For example: \`${config.botSettings.prefix}rsstest simple\`.\n\n`
  for (var name in commands) {
    const command = commands[name]
    if (!command.description) continue
    msg += `\`${config.botSettings.prefix}${name}\` - ${command.description}`
    const args = command.args
    if (args) {
      msg += `\n    **Arguments:**\n`
      for (var arg in args) {
        msg += `      \`${arg}\` - ${args[arg]}`
      }
    }
    msg += '\n\n'
  }
  message.channel.send(msg + '\nSupport can be found at https://discord.gg/WPWRyxK')
  .catch(err => log.command.warning(`Could not send help menu:`, message.guild, err))
}
