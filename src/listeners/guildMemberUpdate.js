const { Listener } = require('@sapphire/framework');
const { roles } = require('../../config.json');

class GuildMemberUpdateListener extends Listener {
    constructor(context, options) {
        super(context, {
            ...options,
            event: 'guildMemberUpdate'
        });
    }

    async run(oldMember, newMember) {
        if (oldMember.pending && !newMember.pending) {
            const survivorRole = await newMember.guild.roles.cache.get(roles.survivorRoleId);
            return newMember.roles.add(survivorRole);
        }
    }
}

module.exports = {
    GuildMemberUpdateListener
};
