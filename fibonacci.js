//Fibonacci in JS

//fibonacciGenarator(0) = 0 et fibonacciGenarator(1) = 1

function fibonacciGenerator(n) 
{
    let outputs = [], sum = 0, i = 0;
    if (n === 1) 
        outputs.push(0);
    else if (n === 2 ) 
        outputs.push(0, 1); 
    else
    {
        outputs.push(0, 1); 
        while ( n != outputs.length ) 
        {
            sum = outputs[i] + outputs[i+1];
            outputs.push(sum);
            i++;
        } 
    }
    return outputs;
}