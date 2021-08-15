// banking.html area // -no1
document.getElementById('deposit-button').addEventListener('click', function(){
    //get the amount deposited -no 2
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);
    // update deposite total -no 3
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);
    // 4
    const newDepositTotal = previousDepositAmount + newDepositAmount;
    // 5
    depositTotal.innerText = newDepositTotal;

    //update account Balance 1
   const balanceTotal = document.getElementById('balance-total');
   const balanceTotalText = balanceTotal.innerText;
   const previousBalanceTotal = parseFloat(balanceTotalText);
   const newBalanceTotal = previousBalanceTotal + newDepositAmount;
   balanceTotal.innerText = newBalanceTotal;
    //clear the deposit input 
    depositInput.value = '';
})


//the area of withdraw//
document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);
    // set withdraw total
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawText);
    const newWithdrawTotal = previousWithdrawAmount + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;
    //update withdraw balance
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    const totalUpdateBalance = previousBalanceTotal - newWithdrawAmount;
    balanceTotal.innerText = totalUpdateBalance;
    // clear withdraw input
    withdrawInput.value = '';
})