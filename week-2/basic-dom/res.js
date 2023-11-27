const reservations = {
    Bob: { claimed: false },
    Ted: { claimed: true }
  }
  const checkRes = function(){
    const answer =  document.getElementById("answer");
    const input = document.getElementById("input");
    if(reservations[input.value]){
        if(!reservations[input.value].claimed)
        {
            answer.innerHTML = "Welcome, "+input.value
        }
        else{
            answer.innerHTML = "Hmm, someone already claimed this reservation"
        }

    }
    else{
        answer.innerHTML = "You have no reservation"
    }
  }