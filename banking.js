// banking page js script

document.getElementById('deposit-button').addEventListener('click', function(){
    // get the amount
    const depositInput = document.getElementById('deposit-amount'); 
    const depositTotal = document.getElementById('deposit-total');
    // total value
    const previousDepositAmount = parseFloat(depositTotal.innerText);
    const newDepositAmount = parseFloat(depositInput.value) + previousDepositAmount;
    depositTotal.innerText = newDepositAmount;

    // update balance 
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalAmount = parseFloat(balanceTotal.innerText);
    const newBalanceTotal = balanceTotalAmount + parseFloat(depositInput.value);
    balanceTotal.innerText = newBalanceTotal;

    // clear deposit value
    depositInput.value = '';
})

// withdraw part

document.getElementById('withdraw-button').addEventListener('click', function(){

    // get the amount
    const withdrawInput = document.getElementById('withdraw-amount');
    const withdrawTotal = document.getElementById('withdraw-total');

    // total value
    const previousWithdrawAmount = parseFloat(withdrawTotal.innerText);
    const newWithdrawAmount = parseFloat(withdrawInput.value) + previousWithdrawAmount;
    withdrawTotal.innerText = newWithdrawAmount;

    // update balance 
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalAmount = parseFloat(balanceTotal.innerText);
    const newBalanceTotal = balanceTotalAmount - parseFloat(withdrawInput.value);
    console.log(newBalanceTotal);
    balanceTotal.innerText = newBalanceTotal;

     // clear withdraw value
     withdrawInput.value = '';
     
     
})