function searchMinor(array)
{
    var minor = array[0]
    var minor_index = 0

    for(let i = 1; i < array.length; i++)
    {
        if(array[i] < minor)
        {
            minor = array[i]
            minor_index = i
        }      
    }
    return minor_index
}



function selectionSort(array)
{
    var newArray = []
    var copyArray = array.slice()

    for(let i = 0; i < array.length; i++)
    {
            let minor_Index =  searchMinor(copyArray)
            newArray.push(copyArray.splice(minor_Index,1)[0])    
    }
    return newArray
}

var array = [2,3,5,8,1,4]

console.log(selectionSort(array))
