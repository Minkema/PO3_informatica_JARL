//function to dropdown the contents of the dropdown menu
function ShowBerekening(){
  console.log("started showing berekeningen")
  document.getElementById("BMIDiv").style.display = "block"
  document.getElementById("HomePage").style.display = "none"
}
//Function to define and use the 2 given variables for the formula
function BMIberekenFunction() {
  console.log("BMI is being calculated")
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
  else{
    console.log("length and weight are valid")
  }

  //Function to calcualte result
  if (weight != false && length != false){
    console.log("Calculation started")
    var BMI = ((weight / (length*length))*10000)
    document.getElementById ("result").innerHTML = ("BMI = "+ String(BMI.toFixed(2)));
  }
  else{
    document.getElementById ("result").innerHTML = ("Voer geldige waardes in!");
  }
}
