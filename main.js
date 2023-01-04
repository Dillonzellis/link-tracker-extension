myLeads = [1, 2, 3];

const inputBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
let ulEl = document.getElementById("ul-el");


inputBtn.addEventListener('click', getInput)


function getInput(){
    let inputVal = inputEl.value;
    myLeads.push(inputVal)
    console.log(myLeads);
}


myLeads.map(leads => ulEl.innerHTML += ("<li>" + leads + "</li>"))

// for(let i  = 0; i <myLeads.length; i++){
//     ulEl.innerHTML += "<li>" "</li>"
// }



