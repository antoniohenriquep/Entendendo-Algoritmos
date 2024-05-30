let statesToCover = new Set(["mt", "wa", "or", "id", "nv", "ut", "ca", "az"]); //Conjunto de estados a serem cobertos

//Conjuntos de estados que cada estacao abrange
const stations = {}
stations['kum'] = new Set(['id','nv','ut'])
stations['kdois'] = new Set(['wa','id','mt'])
stations['ktres'] = new Set(['or','nv','ca'])
stations['kquatro'] = new Set(['nv','ut'])
stations['kcinco'] = new Set(['ca','az'])

const pickedStations = new Set() //Conjunto de estacoes utilizadas


function findRadioStations(statesToCover,stations, pickedStations)
{
    let betterStation = null //Melhor estacao, definida pela quantidade maxima de estados abrangidos
    let statesCovered = new Set() //Inicialza um conjunto de estados cobertos pela melhor estacao
    if(!statesToCover.size)
    {
        console.log(pickedStations)
        return
    }
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
    statesToCover = new Set([...statesToCover].filter(state =>!statesCovered.has(state)))
    pickedStations.add(betterStation)
    findRadioStations(statesToCover,stations, pickedStations)
}

findRadioStations(statesToCover,stations,pickedStations)