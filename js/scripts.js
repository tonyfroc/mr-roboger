//                User Interface Logic 

$(document).ready(function(){
  $("button").click(function(event){
    const numInputStr = $('#enter-num').val();
    const inputToNum = parseInt(numInputStr);
    const robotStr = beepBoop(inputToNum)
    if (inputToNum > 100 || inputToNum <= 0) {
      $("#robot-response").hide()
      $("#robot-error").show();
    } else {
      $("#robot-error").hide();
      $("#robot-response").show()
      $("#robot-response").text(`Calculating. . . 🤖 💬: ${robotStr}`); 
      $("form")[0].reset();
    }
    event.preventDefault();
  });
});

//                Business Logic 

function beepBoop(num) {
  let inputName = $('#enter-name').val()
  let numArray = [];
  for (let i = 0; i <= num; i++) {
    numArray.push(i);
    if (numArray.toString().includes(3)) {
      numArray[i] = `Won't you be my neighbor, ${inputName}?`
    }
    else if (numArray.toString().includes(2)) {
      numArray[i] = `Boop`
    }
    else if (numArray.toString().includes(1))
      numArray[i] = `Beep`
    }
    return numArray.join(', ').toString()
}