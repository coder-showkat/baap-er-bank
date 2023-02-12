const deposit = document.getElementById('deposit');
const withdraw = document.getElementById('withdraw');
const balance = document.getElementById('balance');
const formDeposit = document.querySelector('.form-deposit');
const formWithdraw = document.querySelector('.form-withdraw');
const inpDeposit = document.getElementById('inp-deposit');
const inpWithdraw = document.getElementById('inp-withdraw');

formDeposit.addEventListener('submit', (e)=> {
    e.preventDefault();
    if (!Number(inpDeposit.value)) {
        alert('Please provide valid amount');
    } else {
    let newDeposit = Number(deposit.innerText) + Number(inpDeposit.value);
    let newBalance = Number(balance.innerText) + Number(inpDeposit.value);
    deposit.innerText = newDeposit;
    balance.innerText = newBalance;
    inpDeposit.value = '';
    }
})

formWithdraw.addEventListener('submit', (e)=> {
    e.preventDefault();
    if (!Number(inpWithdraw.value)) {
        alert('Please provide valid amount');
    } else {
        if (Number(inpWithdraw.value) > Number(balance.innerText)) {
            alert('Not enough balance. Please deposit.')
        } else {
            let newWithdraw = Number(withdraw.innerText) + Number(inpWithdraw.value);
            let newBalance = Number(balance.innerText) - Number(inpWithdraw.value);
            withdraw.innerText = newWithdraw;
            balance.innerText = newBalance;
            inpWithdraw.value = '';
            }
    }
});