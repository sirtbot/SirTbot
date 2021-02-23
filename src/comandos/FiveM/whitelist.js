    const Client = require('discord.js')
    const mysql = require('mysql'); 

  module.exports = {
    config: {
      nome: 'whitelist',                                                   // NOTA: Coloque o nome do comando SEMPRE em letras minúsculas!
      aliases: ['wl'],                               // Alternativas para o comando, para você poder usar o comando com vários nomes diferentes.
      descricao: 'Comando que faz a whitelist.',     // Descrição do comando (OPCIONAL, porém é útil para organização ou para um comando de ver a informação de outros comandos).
      utilizacao: '!whitelist',                                               // Modo de utilização do comando. Deixe em branco, ou seja, apenas com '', caso o comando não precise de argumentos para ser usado (OPCIONAL, porém é útil para organização ou para um comando de ver a informação de outros comandos).
      cooldown: 1200                                                 // 300 segundos de tempo de espera até o usuário poder executar o comando de novo. Caso o comando não tenha tempo de espera, pode remover esta linha ou colocar     cooldown: 0
    },

//      ___       _______  .______       __       ___      .__   __.     __    __  ____    ____ .______    _______    .______     ______   .___________.
//     /   \     |       \ |   _  \     |  |     /   \     |  \ |  |    |  |  |  | \   \  /   / |   _  \  |   ____|   |   _  \   /  __  \  |           |
//    /  ^  \    |  .--.  ||  |_)  |    |  |    /  ^  \    |   \|  |    |  |__|  |  \   \/   /  |  |_)  | |  |__      |  |_)  | |  |  |  | `---|  |----`
//   /  /_\  \   |  |  |  ||      /     |  |   /  /_\  \   |  . `  |    |   __   |   \_    _/   |   ___/  |   __|     |   _  <  |  |  |  |     |  |     
//  /  _____  \  |  '--'  ||  |\  \----.|  |  /  _____  \  |  |\   |    |  |  |  |     |  |     |  |      |  |____    |  |_)  | |  `--'  |     |  |     
// /__/     \__\ |_______/ | _| `._____||__| /__/     \__\ |__| \__|    |__|  |__|     |__|     | _|      |_______|   |______/   \______/      |__|     


    run: async (client, message, args) => {
      
      // CONFIGURAÇÃO DA WHITE-LIST!
      const margemdeacertos = 6; // MARGEM DE ACERTOS PARA ELE PASSAR
      const resultadowl = "780658035982336030"; // RESULTADO FINAL DA WHITELIST
      const resultadowlstaff = "780831886221115402" // RESULTADO DA WHITELIST PARA STAFF'S
      const iddacategoria = "780862883013460018"; // ID DA CATEGORIA DA WHITELIST
      const canaldewhitelist1 = "780849691834187827"; // CANAL DE FAZER WHITELIST
      const canaldeip = "780832971354538044"; // CANAL DE PEGAR IP (connect ip)
      const iddoservidor = "780154983936819262";
      const whitelistcargo = "780157509213487114";
      const nonwhitelistcargo = "780863894846701629";
      const imgwl = "https://i.pinimg.com/originals/cf/e6/f7/cfe6f7783653c5149e94c3519cf11467.png"; // EMBED IMG

      const userdb = "root"; // MYSQL USUÁRIO
      const senhadb = ""; // MYSQL SENHA
      const db = "vltrp"; // MYSQL DB

      if(message.channel.id !== canaldewhitelist1) return message.channel.send(message.author.toString() + ` Você não pode usar este comando nesse chat. Utilize: <#${canaldewhitelist1}>`)



        let guild = message.guild;


            const channel2 = await guild.channels.create(`whitelist-${message.author.username}`,{
            type: 'text',
            parent: iddacategoria,
            permissionOverwrites:[
                {
                    allow: ['VIEW_CHANNEL','READ_MESSAGE_HISTORY','EMBED_LINKS','ATTACH_FILES','SEND_MESSAGES'],
                    id: message.author.id
                },
                {
                    deny: 'VIEW_CHANNEL',
                    id: guild.id
                }
            ]
        }); 
        channel2.send(`<@${message.author.id}>`)
        async function createForm({ questions, channel, time, user }) {
    const { once } = require("events")
  
    const answers = []
  
    for (const question of questions) {

      const embed = new Client.MessageEmbed()
      .setColor("GREEN")//COR DA CAIXA DE DIALOGO
                        .setTitle(`Pergunta da WhiteList\n`)
                        .addField("Pergunta: ", `${question} \n\n\`Você têm ${time/1000} segundos para responder!\``)
                        .setTimestamp(new Date())
                        .setFooter(`Leia com atenção!`)

        channel2.send(embed)
  
      const filter = m => m.author.id === user.id && m.channel.id === channel2.id && m.content.length >= 1
      const options = { time: time, max: 1 }
  
      const collector = channel2.createMessageCollector(filter, options)
  
      const [collected, reason] = await once(collector, 'end')
  
      if (reason == 'limit') answers.push(collected.first().content)
      
      else if (reason == 'channelDelete') throw new Error('channelDelete')
      
      else if (reason == 'time') throw new Error('time')
  
    }
  
    return answers
  
  }


  createForm({ 
    questions: [
  "Qual seu nome e sua idade?",

  "Qual o ID apresentado no seu jogo?",
 
  "Qual o nome e idade do seu personagem?",

  "1. Roleplay significa...?\n\n 1⃣ Mata-Mata  \n\n 2⃣ Role com os Amigos \n\n 3⃣  Simular a vida real \n\n 4⃣ Simular a Fantasia",

  "2. O que é RDM? \n\n 1⃣ RDM é usada para quem abusou de bug. \n\n 2⃣ RDM é atropelar alguém sem motivos. \n\n 3⃣ RDM é matar alguém sem motivos. \n\n 4⃣ RDM é sacar uma arma e ameaçar alguém. ",
  
  "3. O que é considerado anti RP? \n\n 1⃣ Vender drogas em área safe \n\n 2⃣ É você quebrar as regras do servidor. \n\n 3⃣ E você cometer infrações de trânsito. \n\n 4⃣ É você fazer rp de bandido. ",
  
  "4. O que é AMOR A VIDA? \n\n 1⃣ Reagir a um assalto. \n\n 2⃣ É valorizar a sua vida como ela fosse única. \n\n 3⃣ É ter amor próprio. \n\n 4⃣ E pular de uma ponte para evitar não ser pego. ",
  
  "5. O que é PowerGaming? \n\n 1⃣ É você ter super forças no jogo. \n\n 2⃣ E você usar informação fora do jogo. \n\n 3⃣ É abusar da mecânica do jogo \n\n 4⃣ E você fazer um rp forçando com os players.",
  
  "6. O que é MetaGaming? \n\n 1⃣ É você usar algo do Discord dentro do Jogo. \n\n 2⃣ É você fazer RP baseado em metas de missões. \n\n 3⃣ É você pedir alguém em Casamento \n\n 4⃣ É você jogar usando Discord ",
  
  "7. O que é COMBAT LOGGING? \n\n 1⃣ É entrar em combate na ação. \n\n 2⃣ É chamar alguém para lutar. \n\n 3⃣ É deslogar do servidor para fugir de abordagem, prisão, roubo. \n\n 4⃣ É tentar fugir ao ser abordado. ",
  
  "8. Quais são as safe zones? \n\n 1⃣ Zonas Safes: Praça, Delegacia, Hospital, Concessionária \n\n 2⃣ Delegacia, Hospital, Concessionária, Areas de Farm Legal \n\n 3⃣ Aeroporto, Garagem, Areas de Farm Legal \n\n 4⃣ Praça, Areas de Farm Legal, Hospital, Delegacia. ",
  
  "9. O que é VDM? \n\n 1⃣ É usar um Veiculo para matar alguém \n\n 2⃣ É matar alguém sem motivo. \n\n 3⃣ É ato de abusar da mecânica do jogo \n\n 4⃣ VDM é subir uma montanha com carro de drift. ",
  
  "10. Ao entrar no servidor você concorda com todas as regras nele impostas? \n\n 1⃣ Discordo \n\n 2⃣ Que regras? \n\n 3⃣ Nulo \n\n 4⃣ Concordo   "
  
], 
    channel: message.channel2, 
    time: 50000, 
    user: message.author 
  })
.then(respostas => {

  var exp = 0;
      if(respostas[3] === "3"){
        exp += 1;
      }
      if(respostas[4] === "3"){
        exp += 1;
      }
      if(respostas[5] === "3"){
        exp += 1;
      }
      if(respostas[6] === "2"){
        exp += 1;
      }
      if(respostas[7] === "3"){
        exp += 1;
      }
      if(respostas[8] === "1"){
        exp += 1;
      }
      if(respostas[9] === "3"){
        exp += 1;
      }
      if(respostas[10] === "1"){
        exp += 1;
      }
      if(respostas[11] === "1"){
        exp += 1;
      }
      if(respostas[12] === "4"){
        exp += 1;
      }
      if(exp >= "6"){
        message.author.send(`Você foi aprovado, parabéns! Você teve ${exp}/10 de acertos!`)
        channel2.delete()
      }
      else{
        message.author.send(`Você reprovou com ${exp}/10 de acertos! Tente novamente.`)
        channel2.delete()
      }

      if(exp >= margemdeacertos){

        console.log(exp)

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
    
      
          connection.query(`UPDATE vrp_users SET whitelisted = '1' WHERE id = '${respostas[1]}'`, (err, rows) => { //atualizando a whitelist do servidor
          });
      
      const embedstaff = new Client.MessageEmbed()
      .setColor("#2b961f")//COR DA CAIXA DE DIALOGO
                        .setTitle(`Resultado da Whitelist\n`)
                        .addField('USUÁRIO:', `<@${message.author.id}>`)
                        .addField('ID:', `${respostas[1]}`)
                        .addField('NOME DO PERSONAGEM:', `${respostas[2]}`)
                        .addField('SITUAÇÃO:', `APROVADO`)
                        .addField('RESPOSTAS:', `${respostas}`)
                        .addField('PONTUAÇÃO:', `${exp}/10`)
                        .setAuthor('Whitelist - By Adrian', imgwl, 'https://discord.gg/lucashype')
                        .setThumbnail(imgwl)
                        .setTimestamp(new Date())
                        .setFooter(`Parabéns! Agora ele pode entrar no servidor.`)
      client.channels.cache.get(resultadowlstaff).send(embedstaff)



      // --------------------------------------------------------------- RESULTADO APROVADO PARA USUÁRIOS
      
      const embed2 = new Client.MessageEmbed()
      .setColor("#2b961f")//COR DA CAIXA DE DIALOGO
                        .setTitle(`Resultado da Whitelist\n`)
                        .addField('USUÁRIO:', `<@${message.author.id}>`)
                        .addField('ID:', `${respostas[1]}`)
                        .addField('NOME DO PERSONAGEM:', `${respostas[2]}`)
                        .addField('SITUAÇÃO:', `APROVADO`)
                        .addField('PONTUAÇÃO:', `${exp}/10`)
                        .setAuthor('Whitelist - By Adrian', imgwl, 'https://discord.gg/lucashype')
                        .setThumbnail(imgwl)
                        .setTimestamp(new Date())
                        .setFooter(`Parabéns! Agora você pode entrar no servidor. Pegue o IP de conexão no <#${canaldeip}>`)
      client.channels.cache.get(resultadowl).send(embed2)

      client.guilds.cache.get(iddoservidor).members.cache.get(message.author.id).roles.add(whitelistcargo)
      client.guilds.cache.get(iddoservidor).members.cache.get(message.author.id).roles.remove(nonwhitelistcargo)

      }else{
        console.log(exp)


      // ------------------------------------------------------- RESULTADO :REPROVADO: PARA STAFFS

        const embedstaff2 = new Client.MessageEmbed()
        .setColor("#ff0000")//COR DA CAIXA DE DIALOGO
                          .setTitle(`Resultado da Whitelist\n`)
                          .addField('USUÁRIO:', `<@${message.author.id}>`)
                          .addField('ID:', `${respostas[1]}`)
                          .addField('NOME DO PERSONAGEM:', `${respostas[2]}`)  
                          .addField('SITUAÇÃO:', `REPROVADO`)
                          .addField('RESPOSTAS:', `${respostas}`)
                          .addField('PONTUAÇÃO:', `${exp}/10`)
                          .setAuthor('Whitelist - By Adrian', imgwl, 'https://discord.gg/lucashype')
                          .setThumbnail(imgwl)
                          .setTimestamp(new Date())
                          .setFooter(`Infelizmente, o mesmo reprovou. Mas pode refazer a whitelist!`)
        client.channels.cache.get(resultadowlstaff).send(embedstaff2)



      // -------------------------------------------------------------- RESULTADO REPROVADO PARA STAFFS


        const embed3 = new Client.MessageEmbed()
        .setColor("#ff0000")//COR DA CAIXA DE DIALOGO
                          .setTitle(`Resultado da Whitelist\n`)
                          .addField('USUÁRIO:', `<@${message.author.id}>`)
                          .addField('ID:', `${respostas[1]}`)
                          .addField('NOME DO PERSONAGEM:', `${respostas[2]}`)  
                          .addField('SITUAÇÃO:', `REPROVADO`)
                          .addField('PONTUAÇÃO:', `${exp}/10`)
                          .setAuthor('Whitelist - By Adrian', imgwl, 'https://discord.gg/lucashype')
                          .setThumbnail(imgwl)
                          .setTimestamp(new Date())
                          .setFooter(`Infelizmente, o mesmo reprovou. Mas pode refazer a whitelist!`)
        client.channels.cache.get(resultadowl).send(embed3)
      }

    console.log(`O usuário terminou o formulário e estas foram as respostas: ${respostas} com a pontuação de ${exp}/10.`)
  })

  .catch(err => {
    if (err.message == 'time') {
      console.log(`O usuário ignorou o formulário e por isto foi cancelado.`)
      message.author.send(`Você reprovou pois o seu tempo acabou. Tente novamente.`)
      channel2.delete()
    } else if (err.message == 'channelDelete') {
      console.log(`O canal foi deletado e por isto o formulário foi cancelado.`)
      message.author.send(`Você reprovou pois o seu canal foi deletado. Tente novamente.`)
    } else {
      console.log(`Algo deu errado ao trabalhar o formulário!`, err)
      message.author.send(`Você reprovou pois aconteceu algo com o bot/servidor. Tente novamente.`, err)
      channel2.delete()
    }
})
}
    }