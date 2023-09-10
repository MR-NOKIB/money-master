document.getElementById('btn-calculate').addEventListener('click', function(){
    const incomeAmount = getInputValueById('income-field');
    const foodAmount = getInputValueById('food-field')
    const rentAmount = getInputValueById('rent-field')
    const clothesAmount = getInputValueById('clothes-field')

    const totalExpence = foodAmount + rentAmount + clothesAmount;
    const textElement = document.getElementById('expenses-total');
    const totalExpenceAmount = textElement.innerText = totalExpence;

    const balanceElement = document.getElementById('balance');
    const Balance = incomeAmount - getInnerValueById('expenses-total');
    balanceElement.innerText = Balance;  

    const savingElement = document.getElementById('btn-savings');
    const savings20 = incomeAmount * 0.2;
    savingElement.innerText = savings20;

    const remainingElement = document.getElementById('btn-remaining');
    const totalSpend = totalExpence + savings20;
    const remainingTotal =incomeAmount - totalSpend;
    remainingElement.innerText = remainingTotal;
})


document.getElementById('btn-save').addEventListener('click', function(){
    clearInputFieldById('income-field');
    clearInputFieldById('food-field');
    clearInputFieldById('rent-field');
    clearInputFieldById('clothes-field');
})

