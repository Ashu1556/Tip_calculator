let inputBox = document.getElementById("input_box");
let selectBox = document.getElementById("select_box");
let PeopleBox = document.getElementById("People_Box");
let buttonBox = document.getElementById("button_Box");
let calculateAmount = document.getElementById("calculate_id");



init();

function init(){
    buttonBox.addEventListener("click", calculateTip)
}

function calculateTip(){
    let people = parseInt(PeopleBox.value) * 100;
    let tip = parseInt(inputBox.value) * parseInt(selectBox.value);
    let amount = tip/people ;
    console.log(amount);
    calculateAmount.innerText = amount;
}
