function regressiveCount(num)
{
    console.log(num)

    if(num <= 1)
        return;
    else
        regressiveCount(num-1)
}

regressiveCount(10) 