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
      function BMIberekenFunction() {
        var length = document.getElementById("length").value;
        var weigth = document.getElementById("weigth").value;
            
        if (length < 65) {
                length=NaN
        }
        else if  (length > 252){
                length=NaN
        }
        else if (weigth > 595){
                weigth=NaN
        }
        else if (weigth < 0){
                weigth=NaN
        }
        else {
        document.getElementById ("result").value = ((weigth / (length*length))*10000);
        }
      }
