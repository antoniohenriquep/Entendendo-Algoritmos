function binarySearch(array, item)
{
    var lower = 0
    var higher = array.length - 1

    while(lower <= higher)
    {
        var mid = Math.floor((lower+higher)/2)

        var guess = array[mid]

        if(guess == item)
            return mid
        
        if(guess > item)
            higher = mid - 1

        else
            lower = mid + 1
    }

    return null
}



const numbers = [1,3,7,9,22,31,33,45,65,78]

console.log('O indice do número procurado é: '+binarySearch(numbers,22))