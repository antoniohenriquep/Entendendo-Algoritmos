let statesToCover = new Set(["mt", "wa", "or", "id", "nv", "ut", "ca", "az"]); //Conjunto de estados a serem cobertos

//Conjuntos de estados que cada estacao abrange
const stations = {}
stations['kum'] = new Set(['id','nv','ut'])
stations['kdois'] = new Set(['wa','id','mt'])
stations['ktres'] = new Set(['or','nv','ca'])
stations['kquatro'] = new Set(['nv','ut'])
stations['kcinco'] = new Set(['ca','az'])

const pickedStations = new Set() //Conjunto de estacoes utilizadas

//Enquanto houver estados descobertos
while(statesToCover.size)
{
    let betterStation = null //Melhor estacao, definida pela quantidade maxima de estados abrangidos
    let statesCovered = new Set() //Inicialza um conjunto de estados cobertos pela melhor estacao
    for(let station in stations)
    {
        const states = stations[station] //Estados que a estacao atual cobre
        const covered = new Set([...statesToCover].filter(state => states.has(state))) //Conjunto que armazena os estados cobertos pela estacao atual, que ainda nao haviam sido cobertos por outra.

        //Se os estados cobertos pela estacao atual for maior que anterior melhor estacao, ela sera a nova melhor estacao
        if(covered.size > statesCovered.size)
        {
            betterStation = station
            statesCovered = covered
        }
    }
    //Atualizara a lista de estados sem cobertura, filtrando apenas os estados que nao estao presentes na lista de estados cobertos pela melhor estacao
    statesToCover = new Set([...statesToCover].filter(state =>!statesCovered.has(state)))
    pickedStations.add(betterStation)
}

console.log(pickedStations)