//function to show the calculations page
function ShowBerekening(){
  document.getElementById("Calculations").style.display = "grid"
  document.getElementById("HomePage").style.display = "none"
  document.getElementById("OverOns").style.display = "none"
  document.getElementById("Gezondheid").style.display = "none"
}

//function to show the health page
function ShowGezondheid(){
  document.getElementById("Calculations").style.display = "none"
  document.getElementById("HomePage").style.display = "none"
  document.getElementById("OverOns").style.display = "none"
  document.getElementById("Gezondheid").style.display = "grid"
}

//function to show the about us page
function ShowOverOns(){
  document.getElementById("Calculations").style.display = "none"
  document.getElementById("HomePage").style.display = "none"
  document.getElementById("OverOns").style.display = "block"
  document.getElementById("Gezondheid").style.display = "none"
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

//function to calculate Calories
function CALcalcFunction() {

    var total = 0;
    var elements = document.getElementsByClassName("calcValue");
/* makes array (variable elements) and */
    Array.from(elements).forEach((htmlElement) => {
        total += CalcValue(htmlElement.value, htmlElement.alt);
    });
    
    document.getElementById("resultCAL").value = (String(total.toFixed(2)));
}

function CalcValue(time, burnrate)
{
    if (time > 0)
        return time * burnrate;
    else   
        return 0;
}

//function to show activities that are selected
function unhide(activity) {
    activity = document.getElementById(activity);
    if (activity.style.display === "none") {
        activity.style.display = "block";
    } else {
        activity.style.display = "none";
    }
}

//function to slect activity
function selAct() {
    var subActivity = document.getElementById("selAct").value;
    var elements = document.getElementsByClassName("divActivity");

    Array.from(elements).forEach((element) => {
        element.style.display = "none";
    });

    if (document.getElementById(subActivity).style.display === "none") {
        document.getElementById(subActivity).style.display = "block";
    }
}

//function to go to calculator
function goCalculator() {
  var ingredient = document.getElementById("CalorieGain")
  var calc = document.getElementById("GainCalculator")
  if (calc.style.display === "none") {
      calc.style.display = "block";
      ingredient.style.display = "none";
  } else {
    calc.style.display = "none";
    ingredient.style.display = "block";
  }
}

//function to calculate the amount of calories gained
function CalcGain() {
  let total = 0;
  let elements = document.getElementsByClassName("calcGain");
  Array.from(elements).forEach((htmlElement) => {
    total += CalcValue(htmlElement.value, htmlElement.alt)
  })
  document.getElementById("resultGAIN").value = (String(total.toFixed(2)));
}
