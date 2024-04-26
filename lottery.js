var i = 0; 
// this variable is used here as a counter which would not allow to run function more then 10 time

//this function is invoke by user when user click on button
function generateNumber() 
{
  if (i < 10) { // checking how many attempt have been done

    var input = document.getElementById("input_field"); // getting the complete element
    var inputNumber = input.value; // to get actual value inserted by user in input field
    console.log(inputNumber);

    var result = document.getElementById("result"); // to upadate result on webpage

    var box = document.getElementsByClassName("box"); // get small box to show attempt
   
    var random = Math.random(); // to generate random number with math method

    random = random * 10; // to get 1 digit value

    random = Math.floor(random); // to ignor value after decimale

    console.log(random);

    if (random == inputNumber) {
      result.innerText = "Congratulation\n System generated no is : " + random;
      box[i].innerText = "win";
      box[i].style.backgroundColor = "green";
      box[i].style.color = "white";
    } else {
      result.innerText = "try again\n  System generated no is : " + random;
      box[i].innerText = "loos";
      box[i].style.backgroundColor = "red";
      box[i].style.color = "white";
    }

    i = i + 1;// incresing counter or attempt
    
  } //end of if condition

  else {
    document.write("you have been done your all attempt")// after 10 attempt
  }
}
