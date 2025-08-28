
let coins = 100;
let availableCopy=0;
let availableHeart=0;
//function to get input value

/*function getInputValueNumber(id){
    const inputField=document.getElementById(id)
    const inputFieldValue= inputField.value
    //const inputFieldValueNumber= parseint(inputFieldValue)
}
function getInputValue(id){
    const inputField=document.getElementById(id)
    const inputFieldValue= inputField.value
    return inputFieldValue
}*/
//function to get innertext

/*function getInnerText(id){
    //const element=document.getElementById(available-coin)
    //const elementValue= element.Value
    //const elementValueNumber= parseint(elementValue)
*/

//function to set innertext

function setInnerText(value){
    const availableCoinElement= document.getElementById("available-coin")
    availableCoinElement.innerText =value
}

//call-button
function makeCall(serviceName, serviceNumber) {
    if (coins < 20) {
      alert("Not enough coins to make a call!");
      return;
    }
    coins -= 20;
    alert(`Calling ${serviceName} at ${serviceNumber}`);
    document.getElementById("available-coin").innerText = coins;
    // Add call history dynamically
    const historyContainer = document.getElementById("history-container");

    const historyItem = document.createElement("div");
    historyItem.className = "bg-gray-100 rounded-xl p-3 flex justify-between items-center my-2";

    historyItem.innerHTML = `
        <div>
            <h1 class="font-bold">${serviceName}</h1>
            <p>${serviceNumber}</p>
        </div>
        <p>${new Date().toLocaleTimeString()}</p>
    `;

    historyContainer.appendChild(historyItem);
}


//copy-button
function copyNumber(serviceNumber) {
    availableCopy++;
    document.getElementById("available-copy").innerText = availableCopy;
    alert("Hotline number " + serviceNumber + " copied!");
}

//heart-button
function makeFavorite() {
      availableHeart++;
      document.getElementById("available-heart").innerText =  availableHeart;
}

// Clear History function
function clearHistory() {
    document.getElementById("history-container").innerHTML = "";
}