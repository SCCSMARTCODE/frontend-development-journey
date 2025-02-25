const myForm = document.querySelector("form");
const myButton = document.getElementById("myBotton")

myButton.onclick = function(){
    const new_input_field = document.createElement("input");
    new_input_field.setAttribute("type", "text");

    myForm.prepend(new_input_field);
}