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
  var weigth = document.getElementById("weigth").value;

  // Here we chose to give a fail message when an invalid length of weigth is given
  if (length < 65) {
    length=false
  }
  else if  (length > 252){
    length=false
  }
  else if (weigth > 595){
    weigth=false
  }
  else if (weigth < 0){
    weigth=false
  }

  //Function to calcualte result
  if (weigth != false && length != false){
    var BMI = ((weigth / (length*length))*10000)
    document.getElementById ("result").innerHTML = ("BMI = "+ String(BMI.toFixed(2)));
  }
  else{
    document.getElementById ("result").innerHTML = ("Voer geldige waardes in!");
  }
}
