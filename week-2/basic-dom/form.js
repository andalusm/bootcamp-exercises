const validate  = function(){
    const name = document.getElementById("name").value;
    const salary = document.getElementById("salary").value;
    const date = document.getElementById("date").value;
    const tel = document.getElementById("tel").value;
    const answer = document.getElementById("answer")
    answer.innerHTML = ""
    if(name && name.length >2 && date && salary && salary>10000 && salary<16000 && tel&& tel.length == 10)
    {

       document.getElementById("form").style.display ="none";
       document.getElementById("success").innerHTML = "Welcome "+name;
    }
    else{
        if(name.length <=2)
        {
            answer.innerHTML += "Name should be longer than 2 letters."
        }
        if(!date){
            answer.innerHTML += "Add birthday."
        }
        if(!(salary>10000 && salary<16000)){
            answer.innerHTML += "Salary should be more than 10K and less than 16K."
        }
        if(!(tel.length == 10)){
            answer.innerHTML += "Phone number should be 10."
        }
    }

}