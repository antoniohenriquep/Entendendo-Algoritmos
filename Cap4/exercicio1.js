/*Voce deve somaar todos os numeros de um array e retornar o valor total.
OBS: Isso deve ser feito com uma funcao recursiva.
*/
const array = [1,2,3,4]

function arrayElementSum(array)
{
    //Caso o array tenha so um elemento, retornar esse elemento (Caso-base)
    if(array.length == 1)
        return array[0]
    
    
    let lastItem = array.pop() //Remove o ultimo elemento do array e o armazena em uma variavel
    let sum = lastItem+ arrayElementSum(array) //Soma o elementor removido nessa execucao e chama a recursao

    return sum //Retorna a soma dos elementos
} 

console.log(arrayElementSum(array))
