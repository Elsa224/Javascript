let count = 99, i = 99;
function bottlesBeer()
{
    while (i >= 1) 
    {
        if( i === 1)
            console.log(count + " bottle of beer on the wall, " + count + " bottle of beer. Take 1 down and pass it around, no more bottles of beer on the wall.");
        else
            console.log(count + " bottles of beer on the wall, " + count + " bottles of beer. Take 1 down and pass it around, " + --count + " bottles of beer on the wall.");
        i--;  
    }
    console.log("No more bottles of beer on the wall, no more bottles of beer. " + 
                "Go to the store and buy some more, " + 99 + " bottles of beer on the wall.");
}