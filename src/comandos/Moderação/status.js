module.exports = {
    config: {
      nome: 'status',                                                   // NOTA: Coloque o nome do comando SEMPRE em letras minúsculas!
      aliases: [],                               // Alternativas para o comando, para você poder usar o comando com vários nomes diferentes.
      descricao: 'Comando que define o status do bot.',     // Descrição do comando (OPCIONAL, porém é útil para organização ou para um comando de ver a informação de outros comandos).
      utilizacao: '!status',                                               // Modo de utilização do comando. Deixe em branco, ou seja, apenas com '', caso o comando não precise de argumentos para ser usado (OPCIONAL, porém é útil para organização ou para um comando de ver a informação de outros comandos).
      cooldown: 3                                                   // 3 segundos de tempo de espera até o usuário poder executar o comando de novo. Caso o comando não tenha tempo de espera, pode remover esta linha ou colocar     cooldown: 0
    },
    run: async (client, message, args) => {
        const status = [
    {
      type: 'PLAYING',
      message: 'cs go'
    },
    {
      type: 'WATCHING',
      message: 'coisa de nerd'
    },
  ],
    randomStatus = status[Math.floor(Math.random() * status.length)]; //pegando um index aleatorio da array de objetos
  
  setInterval(() => {//função que ira trocar o status do bot a cada 30s
    client.user.setActivity(randomStatus.message, { type: randomStatus.type });
  }, 30000); //1s = 1000ms 30000 = 30s;
}
}
