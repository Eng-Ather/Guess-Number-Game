var i = 0;
// this variable is used here as a counter which would not allow to run function more then 10 time

var win = 0; // to count win condition

//this function is invoke by user when user click on button
function generateNumber() {
  var input = document.getElementById("input_field"); // getting the complete element
  var inputNumber = input.value; // to get actual value inserted by user in input field
  var winer = document.getElementById("winner");
  var losser = document.getElementById("losser")
  var result = document.getElementById("result"); // to upadate result on webpage
  var lable = document.getElementById ("lable")
  var box = document.getElementsByClassName("box"); // get small box to show attempt

  if (win < 3)
   {
    if (i < 10)
     {
      var random = Math.random(); // to generate random number with math method
      random = random * 10; // to get 1 digit value
      random = Math.floor(random); // to ignor value after decimale

      if (random == inputNumber)
       {
        result.innerText ="Congratulation\n System generated no is : " + random;
        box[i].innerText = "win";
        box[i].style.backgroundColor = "green";
        box[i].style.color = "white";
        win = win + 1;
        console.log("win = " + win + " i = " + i);
      }
       else
        {
        result.innerText = "try again\n  System generated no is : " + random;
        box[i].innerText = "loos";
        box[i].style.backgroundColor = "red";
        box[i].style.color = "white";
        console.log("win = " + win + " i = " + i);
      }
      i = i + 1; // incresing counter or attempt

    } //end of attempt condition //else statment of attempt condition
    
    else
     {
      // document.write("you loos Game"); // after 10 attempt

    losser.style.display = "block";
    losser.style.color = "green"
    losser.style.background = " skyblue"
    result.style.display = " none";
    input.style.display = " none"
    lable.style.display = "none"
    }
  }
   
   else  // else statment of winner condition
   {
    winer.style.display = "block";
    winer.style.color = "green"
    winer.style.background = " skyblue"
    result.style.display = " none";
    input.style.display = " none"
    lable.style.display = "none"
  }
} // end of function
