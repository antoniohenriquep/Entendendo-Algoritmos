/*
Escrever uma busca em largura, que procure em sua rede de vizinhos algum vendedor de manga.
A condicao para a pessoa ser vendedora de manga é que o nome dela acabe com a letra "m"
*/


//Mapeamento dos vizinhos
const graph = {}
graph["me"] = ["Bob", "Claire", "Alice"]
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

//Procura o vendedor
function findSeller(name)
{
    let searchQueue = []

    searchQueue = searchQueue.concat(graph[name]) // Adiciona o array de vizinhos da pessoa à fila de pesquisa

    const searched = [] //Armazena as pessoas ja pesquisadas

    while(searchQueue.length)
    {
        let person = searchQueue.shift() //Desenfileira a pessoa da fila de pesquisa e armazena seu nome em uma variavel
        
        //Verifica se a pessoa ja foi pesquisada
        if(searched.indexOf(person) == -1)
        {
            //Caso a pessoa seja vendedora, a função retornará true.
            if(isSeller(person))
            {
                console.log(person+ ' é um vendedor de manga')
                return true
            }

            //Caso não, seus vizinhos serão adicionados à fila de pesquisa
            searchQueue = searchQueue.concat(graph[person])

            //Adiciona a pessoa à lista de pessoas já pesquisadas
            searched.push(person)

        }
    }
    //Caso nenhum seja vendedor
    return false
}

findSeller("me")
