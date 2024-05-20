/*
Escreva uma funcao recursiva que conte o numero de itens de uma lista
*/

function countElements(array)
{
    //Caso o array tenha so um elemento, retornar 1 (Caso-base)
    if(array.length == 1)
        return 1
    
    array.pop() //Remove o ultimo elemento do array
    let sum = 1 + countElements(array)//Soma o elementor removido nessa execucao e chama a recursao

    return sum
}

console.log(countElements([0, 1, 2, 3, 4, 5, 6]))