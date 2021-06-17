function isLeap(year)
{
    /**
     * Write a program that works out whether if a given year is a leap one.
     * A normal year has 365 days, leap years have 366, with an extra day in February.
     * 
     * This is how to work out whether if a particular year is a leap one:
     *      On every year that is evenly divisible by 4
     *      Except every year that is evenly divisible by 100
     *      Unless the year is also divisible by 400
     * 
     * Example Input 1 : 2000
     * Example Output 1 : Leap year.
     * 
     * Example Input 2 : 1989
     * Example Output 2 : Not leap year.
     */

    if (year % 4 !== 0) 
        console.log("Not leap year.");
    else 
    {
        if (year % 100 !== 0) 
            console.log("Leap year.");    
        else 
        {
           if (year % 400 !== 0) 
                console.log("Not leap year.");    
           else 
                console.log("Leap year."); 
        }
    }
}

isLeap(2000);
isLeap(1989);