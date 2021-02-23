module.exports = {
    config: {
      nome: 'ban',                                                   // NOTA: Coloque o nome do comando SEMPRE em letras minúsculas!
      aliases: ['banir'],                               // Alternativas para o comando, para você poder usar o comando com vários nomes diferentes.
      descricao: 'Comando que bane o usuário.',     // Descrição do comando (OPCIONAL, porém é útil para organização ou para um comando de ver a informação de outros comandos).
      utilizacao: '!ban [USUARIO] [MOTIVO]',                                               // Modo de utilização do comando. Deixe em branco, ou seja, apenas com '', caso o comando não precise de argumentos para ser usado (OPCIONAL, porém é útil para organização ou para um comando de ver a informação de outros comandos).
      cooldown: 3                                                   // 3 segundos de tempo de espera até o usuário poder executar o comando de novo. Caso o comando não tenha tempo de espera, pode remover esta linha ou colocar     cooldown: 0
    },
    run: async (client, message, args) => {

        if(!message.member.hasPermission("BAN_MEMBERS")) return; //verifica se o autor do cmd te perm para banir
            if(!args[0]) return; //verificar se há um argumento após o cmd
            let banMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]); //pega o usuário por menção ou ID
            if(!banMember) return message.reply("não foi possível encontrar este usuário!"); //retorna uma mensagem caso não seja informado um usuário válido
            let banReason = args.slice(1); //rasão do ban
            if(!banReason) return message.reply("você não informou um motivo!"); //retorna casso não tenha sido informado um motivo
            
            message.delete({timeout:1000})
            if(banMember == message.member) return message.reply("você não pode se banir!"); //se o autor da mensagem tentar banir ele mesmo
            if (message.member.roles.highest.position <= banMember.roles.highest.position) return message.reply("você não tem permissão para banir esse membro, ele tem um cargo superior ao seu!"); //caso a posição do maior cargo do usuário mencionado seja maior que a do autor da mensagem
            if (message.guild.me.roles.highest.position <= banMember.roles.highest.position) return message.reply("não tenho permissão para banir esse membro, ele tem um cargo superior ao meu!"); //caso a posição do maior cargo do usuário mencionado seja maior que a do bot
            
              message.reply("`" + banMember.user.tag + "` banido com sucesso! Motivo:" + banReason); //mensagem de confirmação
              message.guild.members.ban(banReason); //bane o membro informado no comando
        //o comando pode ser personalizado para ficar melhor, como, enviar a mensagem de ban a um canal específico, embed, etc. Mas devido a limitação de 2000 caracteres tive que diminuir o code
    }
}