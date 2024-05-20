function quicksort(array)
{
    if(array.length< 2)
        return array

    //O pivo nesse caso sera o primeiro elemento do array
    let pivot = array[0]
    
    //Cria um array apenas com os elementos menores que o pivo
    //Lembrete o metodo filter cria um array filtrando os elementos com base na condicao fornecida.
    let lesser = array.slice(1).filter((element)=>{
        return element <= pivot
    })
    //Cria um array apenas com os elementos maiores que o pivo
    let greater = array.slice(1).filter((element)=>{
        return element > pivot
    })
    //Chama a recursao para do quicksort dos subarrays ate que eles cheguem no caso recursivo. Ao final os subarrays serao organizados e concatenados com o primeiro pivo
    return quicksort(lesser).concat(pivot, quicksort(greater))
}

console.log(quicksort([1,2,3,5,2,10,15,4,6]))