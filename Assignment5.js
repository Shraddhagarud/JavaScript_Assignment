//Design Half Faulty Calculator-

//Design a calculator which will correctly solve all the problems except
//# the following ones:
//# 45 * 3 = 555, 56+9 = 77, 56/6 = 4   
//# Your program should take operator  and the two numbers as input from the user
//# and then return the result
var num1 =parseFloat(prompt("Enter a First Number"));
var operator=prompt("Enter a Second Number");
var num3 =parseFloatprompt ("Enter the operator(+,-,* ,/):");
var result;


if(num1===45 && operator==='*' && num2===3)
{
    result=555;
}
else if(num1===56 && operator==='+' && num2===9)
{
    result=77;
}
else if(num1===56 && operator==='/' && num2===6)
{
    result=4;
}
else{
    switch(operator)
    {
        case '+':
            result=num1+num2;
            break;
        case '-':
            result=num1-num2;
            break;
        case'*':
            result=num1*num2;
            break;
        case '/':
            result=num1/num2;
            break;
        default:
            alert("Invalid Operator");
            return;
    }
}
 alert("The result is:"+result);


    


