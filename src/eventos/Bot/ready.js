/*
  O evento "ready" é o evento que é ativado quando o bot é ligado.
*/

module.exports = async (client) => { // NOTA: Todos os eventos necessitam de passar o parâmetro "client" antes de passar os outros parâmetros, caso existam.
  console.log(`\nO bot ${client.user.tag} foi ligado com sucesso!\n`)
}