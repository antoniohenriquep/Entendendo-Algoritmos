//Pilha de chamada
function greetings(name)
{
    console.log(`Ola ${name}!`)
    greetings2(name)
    goodbye(name)

}

function greetings2(name)
{
    console.log(`Como se sente ${name}?`);
}

function goodbye(name)
{
    console.log(`Tchau`);
}