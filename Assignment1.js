
//write a javascript conditional statement to find the largest of five numbers.display alert box to show the results
var  num1=30;
var num2=45;
var num3=32;
var num4=11;
var num5=98;
var largest;

if(num1>=num2 &&num1>=num3 &&num1>=num4 &&num1>=num5){
   largest=num1;

}
else if(num2>=num1&&num2>=num3&&num2>=num4 &&num2>=num5)
{
    largest=num2;
}
else if(num3>=num1&& num3>=num2 && num3>=num4 && num3>=num5){
    largest=num3;
}
else if(num4>=num1&& num4>=num2 && num4>=num4 && num4>=num5){
    largest=num4;
}
else{
    largest=num5;
}
document.write(`Largest Number is:-${largest}`);
