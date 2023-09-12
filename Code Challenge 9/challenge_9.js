const arr = [17,21,23];
const printForecast = (arr) => {
   for(let i = 0;i<arr.length;i++){
      console.log(`... ${arr[i]}oC in ${i+1} days `);
   }
}
printForecast(arr);
