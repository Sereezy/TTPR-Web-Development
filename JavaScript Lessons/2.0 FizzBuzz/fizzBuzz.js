var num = 0;
var first = "Fizz"
var second = "Buzz"

while (num<100)
    {
        num++;
        if(num%3==0 && num%5==0)
        {
            console.log(first + second)
        }
        else if(num%3==0)
        {
            console.log(first)
        }
        else if(num%5==0)
            {
                console.log(second)
            }
        else
        {
            console.log(num)
        }
    }