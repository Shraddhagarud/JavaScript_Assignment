// Q. To ask user that how many days in a leap year. 
//a. if user will get correct ans -
 //then print "You have cleared the first level" and ask again another que "What month has an extra day in leap year?" 
 //if user will	get correct answer then display message "Congratulations !!You have cleared the test" otherwise "You have failed the test".
//b.otherwise print following msg-
   //"Your input is wrong, please try again."


 
 var daysInLeapYear =prompt("How many days are in a leap year");
 if(daysInLeapYear==366)
 {
    alert("You have cleared the first level");
 

 var monthWithExtraDay=prompt("What month has an extra day in a leap year")
 if(monthWithExtraDay.toLowerCase()=="february")
 {
    alert("Congratulations !! you have cleared the test");
 }
 else{
    alert("You have failed the test");
 }
}

 else{
   alert("Your input is wrong, please try again");
 }

