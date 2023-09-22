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
function BMIberekenFunction() {
    var length = document.getElementById("length").value;
    var weigth = document.getElementById("weigth").value;

    if (length < 65) {
        length = NaN
    }
    else if (length > 252) {
        length = NaN
    }
    else if (weigth > 595) {
        weigth = NaN
    }
    else if (weigth < 0) {
        weigth = NaN
    }
    else {
        document.getElementById("result").value = ((weigth / (length * length)) * 10000);
    }
}

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


function unhide(activity) {
    activity = document.getElementById(activity);
    if (activity.style.display === "none") {
        activity.style.display = "block";
    } else {
        activity.style.display = "none";
    }
}

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
