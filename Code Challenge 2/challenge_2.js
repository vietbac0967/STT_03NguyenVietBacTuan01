const mark = {
  mass: 78,
  height: 1.69,
};
const john = {
  mass: 92,
  height: 1.95,
};
const markHigherBMI =
  mark.mass / mark.height ** 2 > john.mass / john.height ** 2;
const test = (markHigherBMI) => {
  if (markHigherBMI) {
    console.log(
      // format to .2f

      `Mark's BMI (${(mark.mass / mark.height ** 2).toFixed(1)}) is higher than John's (${
        (john.mass / john.height ** 2).toFixed(1)
      })!`
    );
  } else {
    console.log(
      `John's BMI (${(john.mass / john.height ** 2).toFixed(1)}) is higher than Mark's (${
        (mark.mass / mark.height ** 2).toFixed(1)
      })!`
    );
  }
};
test(markHigherBMI);
