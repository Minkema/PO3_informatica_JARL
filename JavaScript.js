//defining variables
var BerekeningenContent = document.getElementsByClassName("")

//function to dropdown the contents of the dropdown menu
function DropDownBerekening(){
  console.log("Function called")
  if (BerekeningenContent.style.display == "none;"){
    BerekeningenContent.style.display = "initial;";
  }
  else{
    BerekeningenContent.style.display = "none;"
  }
}
//Function to define and use the 2 given variables for the formula
function BMIberekenFunction() {
  var length = document.getElementById("length").value;
  var weight = document.getElementById("weight").value;

  // Here we chose to give a fail message when an invalid length and/or weigth is given
  if (length < 65) {
    length=false
  }
  else if  (length > 251){
    length=false
  }
  else if (weight > 727){
    weight=false
  }
  else if (weight < 0.212){
    weight=false
  }

  //Function to calcualte result
  if (weight != false && length != false){
    var BMI = ((weight / (length*length))*10000)
    document.getElementById ("result").innerHTML = ("BMI = "+ String(BMI.toFixed(2)));
  }
  else{
    document.getElementById ("result").innerHTML = ("Voer geldige waardes in!");
  }
}
