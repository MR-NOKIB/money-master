function getInputValueById(inputId){
    const inputFieldElement = document.getElementById(inputId);
    const inputFieldValueString = inputFieldElement.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    return inputFieldValue;
}

function getInnerValueById (elementId){
    const textElement = document.getElementById(elementId);
    const textString = textElement.innerText;
    const textNum = parseFloat(textString);
    return textNum;  
}

function clearInputFieldById(inputId){
    const inputFieldElement = document.getElementById(inputId);
    inputFieldElement.value = '';
}