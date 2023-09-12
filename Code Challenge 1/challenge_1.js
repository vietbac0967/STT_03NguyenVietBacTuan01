const mark = {
    mass: 78,
    height: 1.69,
}
const john = {
    mass: 92,
    height: 1.95,
}
//. Create a Boolean variable 'markHigherBMI' containing information about 
//whether Mark has a higher BMI than John.
const markHigherBMI = mark.mass / mark.height ** 2 > john.mass / john.height ** 2;
console.log(markHigherBMI);

