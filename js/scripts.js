$(document).ready(function(){
  $("#dating-form").submit(function(event) {
    var name = $("#name").val();
    var gender = $("#gender").val();
    var activity = $('input[name=activity]:checked').val();
    var color = $("#color").val();
    var snack = $("#snack").val();

    if (name==="" || color === "Select" || snack === "Select"){
      alert("Please enter in all information")
      }
      else if (gender === "Male" && snack==="Swamp Rats"){
        $("#answer2").show();}
      else if (color === "Yellow" && color != "Green"|| activity==="ash" && color != "Green"){
        $("#answer3").show();
      }
      else if (gender === "Male" && activity === "treasure" || snack === "National Treasure" || snack === "The Declaration of Independence") {
        $("#answer1").show();
      }
      else if(gender !="Female"){
        $("#answer4").show();
      }
      else if (gender === "Female" && color === "Green" || snack==="Swamp Rats" ){
        $("#answer5").show();
      }
      else if (gender === "Female" && activity === "treasure" || snack === "National Treasure" || snack === "The Declaration of Independence") {
        $("#answer6").show();
      }
      else if(gender !="Male"){
        $("#answer7").show();
      }

     event.preventDefault();
  });
  });
