const Client = require('discord.js')

module.exports = {
    config: {
      nome: 'avatar',                                                   // NOTA: Coloque o nome do comando SEMPRE em letras minúsculas!
      aliases: [],                               // Alternativas para o comando, para você poder usar o comando com vários nomes diferentes.
      descricao: 'Comando que pega o avatar do user.',     // Descrição do comando (OPCIONAL, porém é útil para organização ou para um comando de ver a informação de outros comandos).
      utilizacao: '!avatar @user',                                               // Modo de utilização do comando. Deixe em branco, ou seja, apenas com '', caso o comando não precise de argumentos para ser usado (OPCIONAL, porém é útil para organização ou para um comando de ver a informação de outros comandos).
      cooldown: 3                                                   // 3 segundos de tempo de espera até o usuário poder executar o comando de novo. Caso o comando não tenha tempo de espera, pode remover esta linha ou colocar     cooldown: 0
    },
    run: async (client, message, args) => {
        let mlk = message.mentions.users.first()
if(!args[0]){
 mlk = message.author
}
const embed = new Client.MessageEmbed()
.setTitle(`🖼️ Imagem de ${mlk}`)
.setImage(mlk.displayAvatarURL())
.setURL(mlk.avatarURL({ format: 'png', dynamic: true, size: 1024 }))

message.channel.send(`${message.author}`)
message.channel.send(embed) 

    }
}