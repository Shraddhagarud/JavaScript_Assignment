//Write a JavaScript program that iterates integers from 1 to 100. 
//But for multiples of three print "Fizz" instead of the number and for multiples of five print "Bizz".
// For numbers multiples of both three and five print "FizzBizz".

for(var i=1;i<=100;i++){
    if(i%3===0 && i%5===0)
        {
        document.write("FizzBuzz<br>");
        
    }

    else if(i%3===0)
    {
        document.write("Fizz<br>");
    }
    else if(i%5===0)
    {
        document.write("Bizz<br>");
    }
   else
   {
     document.write(i+" <br>" );

   }
}