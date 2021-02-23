const { Channel } = require('discord.js');
const mysql = require('mysql'); 

const userdb = "root"; // MYSQL USUÁRIO
const senhadb = ""; // MYSQL SENHA
const db = "vltrp"; // MYSQL DB
//      ___       _______  .______       __       ___      .__   __.     __    __  ____    ____ .______    _______    .______     ______   .___________.
//     /   \     |       \ |   _  \     |  |     /   \     |  \ |  |    |  |  |  | \   \  /   / |   _  \  |   ____|   |   _  \   /  __  \  |           |
//    /  ^  \    |  .--.  ||  |_)  |    |  |    /  ^  \    |   \|  |    |  |__|  |  \   \/   /  |  |_)  | |  |__      |  |_)  | |  |  |  | `---|  |----`
//   /  /_\  \   |  |  |  ||      /     |  |   /  /_\  \   |  . `  |    |   __   |   \_    _/   |   ___/  |   __|     |   _  <  |  |  |  |     |  |     
//  /  _____  \  |  '--'  ||  |\  \----.|  |  /  _____  \  |  |\   |    |  |  |  |     |  |     |  |      |  |____    |  |_)  | |  `--'  |     |  |     
// /__/     \__\ |_______/ | _| `._____||__| /__/     \__\ |__| \__|    |__|  |__|     |__|     | _|      |_______|   |______/   \______/      |__|     
module.exports = {
    config: {
      nome: 'banuser',                                                   // NOTA: Coloque o nome do comando SEMPRE em letras minúsculas!
      aliases: ['baniruser'],                               // Alternativas para o comando, para você poder usar o comando com vários nomes diferentes.
      descricao: 'Comando que bane o usuário do servidor.',     // Descrição do comando (OPCIONAL, porém é útil para organização ou para um comando de ver a informação de outros comandos).
      utilizacao: '!banuser',                                               // Modo de utilização do comando. Deixe em branco, ou seja, apenas com '', caso o comando não precise de argumentos para ser usado (OPCIONAL, porém é útil para organização ou para um comando de ver a informação de outros comandos).
      cooldown: 0                                                   // 3 segundos de tempo de espera até o usuário poder executar o comando de novo. Caso o comando não tenha tempo de espera, pode remover esta linha ou colocar     cooldown: 0
    },
    run: async (client, message, args) => {
        const canaldeban = "780832971354538044";

        let banReason = args.slice(1); //razão do ban
        if(message.channel.id !== canaldeban) return message.channel.send(message.author.toString() + ` Você não pode usar este comando nesse chat. Utilize: <#${canaldeban}>`)

        if(!banReason) return message.reply("você não informou um motivo!"); //retorna casso não tenha sido informado um motivo
        if(!message.member.hasPermission("BAN_MEMBERS")) return; //verifica se o autor do cmd te perm para banir

        const connection = mysql.createConnection({ //Info da database, para conectar
            host: '127.0.0.1',
            user: userdb,
            password: senhadb,
            database: db
          });
          connection.connect((err) => {
          });
  
          setInterval(function () {
            connection.query('SELECT 1');
          }, 5000);
      
        
            connection.query(`UPDATE vrp_users SET banned = '1' WHERE id = '${args[0]}'`, (err, rows) => { //atualizando a whitelist do servidor
            });
            message.reply(`O usuário do ID **${args[0]}** foi banido pelo motivo **${banReason}**.`);


    }
  }