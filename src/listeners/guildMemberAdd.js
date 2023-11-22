const { Listener } = require('@sapphire/framework');
const { channels } = require('../../config.json');

class GuildMemberAddListener extends Listener {
    constructor(context, options) {
        super(context, {
            ...options,
            event: 'guildMemberAdd'
        });
    }

    async run(member) {
        const welcomeChannel = await member.guild.channels.cache.get(channels.welcomeChannelId);
        await welcomeChannel.send(`Welcome Survivor ${member} to the FNSG Discord! 🏹`);
    }
}

module.exports = {
    GuildMemberAddListener
};
