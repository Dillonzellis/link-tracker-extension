let myLeads = []

const inputBtn = document.getElementById("input-btn");
const tabBtn = document.getElementById("tab-btn");
const delBtn = document.getElementById("del-btn");
const inputEl = document.getElementById("input-el");
let ulEl = document.getElementById("ul-el");

const leadsFromLocalStorage = JSON.parse(localStorage.getItem('myLeads'));

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}



inputBtn.addEventListener('click', getInput)
tabBtn.addEventListener('click', saveTab)
delBtn.addEventListener('click', clearData)



function getInput() {
    if (inputEl.value != "") {
        myLeads.push(inputEl.value)
        inputEl.value = "";

        localStorage.setItem('myLeads', JSON.stringify(myLeads))
        render(myLeads)
    }
}

function saveTab() {
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function (tabs) {
        myLeads.push(tabs[0].url)
        localStorage.setItem('myLeads', JSON.stringify(myLeads))
        render(myLeads)
    })


}

function clearData() {
    localStorage.clear()
    myLeads = [];
    render(myLeads)
}


function render(list) {
    let listItems = "";
    list.map(items => listItems += (`<li><a href="${items}" target="_blank"> ${items} </a></li>`))
    ulEl.innerHTML = listItems;
}