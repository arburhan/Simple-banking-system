// common function
function choiceDWId(choiceId, isAdd){
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
    // balance section
    let balanceId = document.getElementById('balance-total');
    const balanceIdText = balanceId.innerText;
    if(isAdd){
        const withdrawBalance = parseFloat(inputIdValue) + parseFloat(balanceIdText);
        balanceId.innerText = withdrawBalance;
    }
    else{
        const withdrawBalance = parseFloat(balanceIdText) - parseFloat(inputIdValue);
        balanceId.innerText = withdrawBalance;
    }
    
}

// withdraw
document.getElementById('deposit-button').addEventListener('click', function(){
    choiceDWId('deposit', true);
})
// deposit
document.getElementById('withdraw-button').addEventListener('click', function(){
    choiceDWId('withdraw', false);
})