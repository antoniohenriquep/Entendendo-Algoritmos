/*
Para usarmos o algoritmo de Dijkstra, precisamos de 3 hash tables:
-Grafo
-Tabela relativas aos custos das arestas
-Tabelas de pais 
*/

//Inicializando grafo
const graph = {} 
graph['inicio'] = {} //Inicializando grafo de inicio (Grafo dentro de um)
graph['inicio']['a'] = 10

graph['a'] = {} //Inicializando grafo de A (Grafo dentro de um)
graph['a']['b'] = 20

graph['b']={} //Inicializando grafo de B (Grafo dentro de um)
graph['b']['c'] = 1
graph['b']['fim']= 30

graph['c'] = {}
graph['c']['a'] = 1

graph['fim'] = {}

//Tabela de custos
const costs = {}
costs['a'] = 10
costs['b'] = Infinity
costs['c'] = Infinity
costs['fim'] = Infinity

//Tabela de pais
const parents = {}
parents['a'] = 'inicio'
parents['b'] = null
parents['c'] = null
parents['fim'] = null

let processed = [] //Lista dos vertices processados

function findLowestCostNode(costs)
{
    let lowestCost = Infinity //Se nao sabemos qual o menor custo, colocamos como infinito
    let lowestCostNode = null //Iniciamos o vertice de menor custo como nulo

    //Para cada vertice na tabela de custos...
    for(let node in costs)
    {
        const cost = costs[node] //Custo do vertice em questao

        //Se o custo do vertice for menor que o menor custo atual e o vertice ainda nao foi processado
        if(cost < lowestCost && !processed.includes(node))
        {
            lowestCost = cost 
            lowestCostNode = node
        }
    }
    return lowestCostNode
}

let node = findLowestCostNode(costs)

while(node !== null)
{
    const cost = costs[node] //Custo do vertice
    const neighbors = graph[node] //Armazena um array com todos os vizinhos do vertice

    //Percorre todos os vizinhos do vertice 
    Object.keys(neighbors).forEach((neighbor) => {
        const newCost = cost + neighbors[neighbor] //Novo custo para chegar a um determinado vertice vizinho

        //Se o custo do vertice na situacao atual for menor que a original, seu custo na tabela sera atualizada, e a tabela de pais tambem
        if(costs[neighbor] > newCost)
        {
            costs[neighbor] = newCost
            parents[neighbor] = node
        }
    })
    processed = processed.concat(node)
    node = findLowestCostNode(costs)
}
console.log(parents)
console.log(costs)
console.log('O menor custo ate o fim e: '+costs['fim'])
