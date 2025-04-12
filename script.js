// const loanAmountE1=document.getElementById("loan-amount");
// const interestRateE1=document.getElementById("interest-rate");
// const monthsPayE1=document.getElementById("months-pay");

const loanCalculatorE1=document.querySelector(".loan-calculator-container");

function monthlyPayment(){
    const loanAmountE1=document.getElementById("loan-amount").value;
const interestRateE1=document.getElementById("interest-rate").value;
const monthsPayE1=document.getElementById("months-pay").value;
const monthlyPaymentt=document.getElementById("monthly-payment");

const loanCalculatorE1=document.querySelector(".loan-calculator-container");


interest = (loanAmountE1 * (interestRateE1 * 0.01)) / monthsPayE1;

monthlyPayment = (loanAmountE1 / monthsPayE1 + interest).toFixed(2);

console.log(monthlyPayment);
monthlyPaymentt.innerHTML=`Monthly payment: ${monthlyPayment}`


}
loanCalculatorE1.addEventListener("change",monthlyPayment);



