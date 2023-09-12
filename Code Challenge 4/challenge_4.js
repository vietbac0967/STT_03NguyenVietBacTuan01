const bill = 275;

const calculateTip = (bill) =>{
    console.log(`Price of bill is ${bill}`);
    let tip = 0;
    if(bill >= 50 && bill <= 300){
       tip = bill * 0.15;
    }else{
        tip = bill * 0.2;
    }
    console.log(`The tip is ${tip}`);
    console.log(`The total value is ${bill + tip}`);
}
calculateTip(bill);
calculateTip(40);
calculateTip(430);