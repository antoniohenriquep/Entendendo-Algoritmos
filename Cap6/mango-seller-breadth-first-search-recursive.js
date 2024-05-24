/*
Escrever uma busca em largura, que procure em sua rede de vizinhos algum vendedor de manga.
A condicao para a pessoa ser vendedora de manga é que o nome dela acabe com a letra "m"
OBS: Implementacao recursiva
*/


//Mapeamento dos vizinhos
const graph = {}
graph["Me"] = ["Bob", "Claire", "Alice"]
graph["Bob"] = ["Anuj", "Peggy"]
graph["Claire"] = ["Jonny", "Thom"]
graph["Alice"] = ["Peggy"]
graph["Peggy"] = []
graph["Thom"] = []
graph["Jonny"] = []
graph["Anuj"] = []


//Função que verifica se a pessoa é vendedora
function isSeller(name)
{
    //Se a ultima letra do nome for 'm', a pessoa é vendedora
    return name[name.length - 1] === "m"
}

//Funcao que pesquisara o vendedor
function findSeller(name, graph = {})
{

    //Funcao recursiva que analisar as pessoas
    //Recebe a lista de pessoas a analisar, e uma lista com as pessoas analisadas
    function inner(toSearchQueue = [], searched)
    {
        console.log(toSearchQueue)
        //Se a lista de pessoas a serem verificadas for vazia, significa que nao tem vendedores na lista
        if(toSearchQueue.length == 0)
            return false

        const person = toSearchQueue[0] //Armazena em uma variavel a proxima pessoa a ser analisada
        const nextToSearchQueue = toSearchQueue.slice(1) //Cria uma copia da lista, removendo a pessoa a ser analisada na execucao atual.

        //Caso a pessoa ja tenha sido pesquisada, pular para a proxima da fila
        if(searched.indexOf(person) != -1)
            return inner(nextToSearchQueue, searched)

        //Verifica se a pessoa vende manga
        if(isSeller(person))
        {
            console.log(person + " vende mangas")
            return true
        }
        //Caso nenhuma das possibilidades anteriores seja verdadeira, adiciona os vizinhos da pessoa analisada na fila dee pesquisa
        return inner(nextToSearchQueue.concat(graph[person]), searched.concat(person))
    }

    //Chama a funcao inner pela primeira vez
    return inner(graph[name], [])
}

console.log(findSeller("Me", graph))