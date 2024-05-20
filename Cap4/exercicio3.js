/*
Encontre o valor mais alto de uma lista
*/


//Funciona com arrays com mais de um elemento
function findMaxValue(array)
{
    //Caso-base
    if(array.length == 2)
        //Se o primeiro elemento for maior que o segundo, retorne o primeiro. E vice-versa
        return array[0] > array[1] ? array[0] : array[1]
    
    //Chama a recursao, sempre retirando o primeiro elemento do array, ate chegar ao caso-base
    let currentMax = findMaxValue(array.slice(1))
    
    //Compara o primeiro elemento do array atual com o valor maximo obtido nas outras recursoes, e retorna o maior.
    return array[0] > currentMax ? array[0]: currentMax
    
}

//Funciona com qualquer array
function findMaxValue2(array, maxValue = 0)
{
    if(array.length === 0)
        return maxValue;


    return findMaxValue2(array.slice(1), array[0] > maxValue ? array[0]: maxValue)
}

console.log(findMaxValue([1,5,7,3,2]))
console.log(findMaxValue2([1,5,7,3,2]))