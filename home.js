
//add money
 const validPin=1234;

function getValueNumber(id) {
    return parseInt(document.getElementById(id).value);
}
function getValue(id) {
    return document.getElementById(id).value;
}
function getInnerText(id){
    return parseInt(document.getElementById(id).innerText);
}
function setInnerText(value) {
document.getElementById("available-balance").innerText=value;
}
function handleToggle(id) {
      const forms=document.getElementsByClassName("form");
    for(const form of forms) {
        form.style.display="none";
    }
    document.getElementById(id).style.display="block";
}
function handleButtonToggle(id) {
     const formBtns= document.getElementsByClassName("form-btn");
   for(const btn of formBtns) {
        btn.classList.remove("border-[#0874f2]","bg-[#0874f20d]");
        btn.classList.add("border-gray-300");
    }
    document.getElementById(id).classList.remove("border-gray-300");
    document.getElementById(id).classList.add("border-[#0874f2]","bg-[#0874f20d]")
}
document.getElementById("add-money-btn").addEventListener('click',function(e){
    e.preventDefault();
   
    const bank=getValue("bank");
    const accountNumber=document.getElementById("account-number").value;
    const amount=getValueNumber("add-amount");
    const pin=getValueNumber("add-pin");
    const availableBalance=getInnerText("available-balance");
   

    if(accountNumber.length!=11){
        alert("Please Provide valid account number")
        return;
    } if(validPin!==pin){
        alert("Please Provide valid pin number");
    } else {
    const totalNewAvailableBalance=amount+availableBalance;

     setInnerText(totalNewAvailableBalance);
    }
})

//cashout

document.getElementById("withdraw-button").addEventListener('click',function(e) {
    e.preventDefault();
    const amount=getValueNumber("withdraw-amount");
    const availableBalance=getInnerText("available-balance");
    const agentNumber=getValue("agent-number");
    const pin=getValueNumber("withdrawal-pin");
    
    if(agentNumber.length!=11){
        alert("Please Provide valid agent number")
        return;
    } if(validPin!==pin){
        alert("Please Provide valid pin number");
    } else {
    const totalNewAvailableBalance=availableBalance-amount;

    setInnerText(totalNewAvailableBalance);
    }

})



//toggle
document.getElementById("add-button").addEventListener('click', function(e){

 
    
    handleToggle("add-money-parent");

    handleButtonToggle("add-button");
}) 

document.getElementById("cashout-button").addEventListener('click', function(e){

 handleToggle("cashout-parent");
   handleButtonToggle("cashout-button");
}) 

document.getElementById("transfer-button").addEventListener('click', function(e){

    handleToggle("transfer-parent");
    handleButtonToggle("transfer-button");
   
}) 

document.getElementById("bonus-button").addEventListener('click', function(e){

   handleToggle("bonus-parent");
   handleButtonToggle("bonus-button");
 
}) 

document.getElementById("payBill-button").addEventListener('click', function(e){

   handleToggle("payBill-parent");
   handleButtonToggle("payBill-button");

}) 

document.getElementById("transaction-button").addEventListener('click', function(e){

    handleToggle("transaction-parent");
    handleButtonToggle("transaction-button");
}) 