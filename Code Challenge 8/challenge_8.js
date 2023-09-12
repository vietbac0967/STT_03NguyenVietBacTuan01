const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];
const calcTip = (bills) => {
  bills.forEach((element) => {
    let tip = 0;
    if (element >= 50 && element <= 300) {
      tip = element * 0.15;
    } else {
      tip = element * 0.2;
    }
    tips.push(tip);
    totals.push(tip + element);
  });
};
calcTip(bills);
const calcAverage = (arr) => {
   return arr.reduce((a, b) => a + b, 0) / arr.length;
}    
console.log(tips);
console.log(totals);
console.log(calcAverage(totals));