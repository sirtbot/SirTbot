module.exports = {
    config: {
      nome: 'dc',                                                   // NOTA: Coloque o nome do comando SEMPRE em letras minúsculas!
      aliases: ['deletarcanal'],                               // Alternativas para o comando, para você poder usar o comando com vários nomes diferentes.
      descricao: 'Comando que deleta o canal.',     // Descrição do comando (OPCIONAL, porém é útil para organização ou para um comando de ver a informação de outros comandos).
      utilizacao: '!dc',                                               // Modo de utilização do comando. Deixe em branco, ou seja, apenas com '', caso o comando não precise de argumentos para ser usado (OPCIONAL, porém é útil para organização ou para um comando de ver a informação de outros comandos).
      cooldown: 0                                                   // 3 segundos de tempo de espera até o usuário poder executar o comando de novo. Caso o comando não tenha tempo de espera, pode remover esta linha ou colocar     cooldown: 0
    },
    run: async (client, message, args) => {
      if(!message.channel.permissionsFor(message.member.id).has('MANAGE_CHANNELS')) return message.reply('você não tem permissão para apagar mensagens neste canal!') 
      if(!message.channel.permissionsFor(client.user.id).has('MANAGE_CHANNELS')) return message.reply('eu não tenho permissão para apagar mensagens neste canal!') 
        message.channel.delete()
    }
  }
  