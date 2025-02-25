const formButton = document.getElementById("submit");

formButton.onclick = function (){
    if (confirm("Click Ok if the details in the form are correct")){
        console.log("Message Sent Successfully");

        user = {
            firstname: document.getElementById("firstName").innerHTML,
            secondname: document.getElementById("secondName").innerHTML,
            email: document.getElementById("email").innerHTML
        };
        
        
       console.log(user);
    }
    else{
    }
}