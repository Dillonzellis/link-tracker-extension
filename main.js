let myLeads = [];


const inputBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
let ulEl = document.getElementById("ul-el");


inputBtn.addEventListener('click', getInput)


function getInput(){
    myLeads.push(inputEl.value)
    inputEl.value = "";
    renderLeads()
}


// myLeads.map(leads => ulEl.innerHTML += ("<li>" + leads + "</li>"))

function renderLeads() {
    let listItems = "";
    myLeads.map(leads => listItems += (`<li><a href="${leads}" target="_blank"> ${leads} </a></li>`) )
    ulEl.innerHTML = listItems;
    
}


// for(let i  = 0; i <myLeads.length; i++){
//     ulEl.innerHTML += "<li>" "</li>"
// }





