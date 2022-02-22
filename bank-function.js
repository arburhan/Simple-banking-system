// common function
function choiceDWId(choiceId){
    // input amount
    const inputId = document.getElementById(choiceId+'-amount');
    const inputIdValue = inputId.value;
    // add amount deposit and withdraw
    let addDW = document.getElementById(choiceId+'-total');
    const addDWText = addDW.innerText;
    const addDWTotal = parseFloat(addDWText) + parseFloat(inputIdValue);
    addDW.innerText = addDWTotal;
    // clean input field
    inputId.value = '';
}

// withdraw
document.getElementById('deposit-button').addEventListener('click', function(){
    choiceDWId('deposit');
})
// deposit
document.getElementById('withdraw-button').addEventListener('click', function(){
    choiceDWId('withdraw');
})