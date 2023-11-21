const { Command } = require('@sapphire/framework');

class SayCommand extends Command {
    constructor(context, options) {
        super(context, {
            ...options,
            name: 'say',
            aliases: ['s'],
            description: 'Make M0NK1 BOT say something!',
            preconditions: ['OwnerOnly']
        });
    }

    async messageRun(message, args) {
        const messageToRepeat = args.finished ? '' : await args.rest('string');

        await message.delete();

        if (messageToRepeat.length < 1 && message.attachments.size < 1) {
            return;
        } else {
            if (message.attachments.size < 1) return message.channel.send(messageToRepeat);
            return message.channel.send({ content: messageToRepeat, files: [message.attachments.first().proxyURL] });
        }
    }
}

module.exports = {
    SayCommand
};
