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
