module.exports = {
    config: {
      nome: 'clear',                                                   // NOTA: Coloque o nome do comando SEMPRE em letras minúsculas!
      aliases: ['cl', 'limparchat'],                               // Alternativas para o comando, para você poder usar o comando com vários nomes diferentes.
      descricao: 'Comando que limpa o chat.',     // Descrição do comando (OPCIONAL, porém é útil para organização ou para um comando de ver a informação de outros comandos).
      utilizacao: '!clear [quantidade de mensagens]',                                               // Modo de utilização do comando. Deixe em branco, ou seja, apenas com '', caso o comando não precise de argumentos para ser usado (OPCIONAL, porém é útil para organização ou para um comando de ver a informação de outros comandos).
      cooldown: 3                                                   // 3 segundos de tempo de espera até o usuário poder executar o comando de novo. Caso o comando não tenha tempo de espera, pode remover esta linha ou colocar     cooldown: 0
    },
    run: async (client, message, args) => {
if(!message.channel.permissionsFor(message.member.id).has('MANAGE_MESSAGES')) return message.reply('você não tem permissão para apagar mensagens neste canal!') 
    if(!message.channel.permissionsFor(client.user.id).has('MANAGE_MESSAGES')) return message.reply('eu não tenho permissão para apagar mensagens neste canal!') 
    // acima verificamos se o bot e o membro tem permissão para apagar mensagens no canal
    
    if(!args[0]) return message.reply(`informe a quantidade`)
    if(isNaN(args[0])) return message.reply('informe uma quantidade numérica!') // verificamos se o argumento é numérico

    const quantidade = Number(args[0]);
    if(quantidade < 2 || quantidade > 100) return message.reply('você deve informar um número de 2 a 100!') // a quantidade é limitada entre 2 e 100 pela API do Discord

    const channelMessages = await message.channel.messages.fetch({ limit: quantidade }),
    oldMessages = channelMessages.filter(m => Date.now() - m.createdTimestamp >= (14 * 24 * 60 * 60 * 1000)).size,
    messagesToClear = quantidade - oldMessages;

    // filtramos as mensagens que tem 14 ou mais dias de criação, pois o bot não consegue apagar estas mensagens atraves do bulkDelete    

    message.channel.bulkDelete(messagesToClear).then(() => {
        // nas duas mensagens abaixo, utilizei ternário para verificar se a quantidade é maior que 1 ou nao, para decidir entre escrever no plural ou singular
        if(oldMessages < 1) message.reply(`${quantidade} ${(quantidade > 1) ? "mensagens foram apagadas" : "foi apagada"} deste canal por ${message.author}!`)
        else message.reply(`${quantidade} ${(quantidade > 1) ? "mensagens foram apagadas" : "foi apagada"} deste canal por ${message.author}! ${oldMessages} ${(oldMessages > 1) ? "não puderam ser apagadas, pois foram enviadas" : "não pôde ser apagada, pois foi enviada"} há mais de 14 dias!`)
    }).catch((err) => console.log(err))
    }
}