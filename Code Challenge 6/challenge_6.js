const bills = [125, 555, 44];
let tips = [];
let totals = [];
function calculateTip(bills){
    let tip = 0;
    if(bills >= 50 && bills <= 300){
       tip = bills * 0.15;
    }else{
        tip = bills * 0.2;
    }
    return tip;
}
for(let i = 0; i < bills.length; i++){
    tips.push(calculateTip(bills[i]));
    totals.push(bills[i] + tips[i]);
}
console.log(bills);
console.log(tips);
console.log(totals);