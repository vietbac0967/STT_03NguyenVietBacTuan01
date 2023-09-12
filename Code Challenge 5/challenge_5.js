const Dolphins = [97, 112, 101];
const Koalas = [109, 95, 106];

const calcAverage = (scores) => {
  let sum = 0;
  for (let i = 0; i < scores.length; i++) {
    sum += scores[i];
  }
  return sum / scores.length;
};
function checkWinner(dolphins, koalas) {
  if (calcAverage(dolphins) > 2 * calcAverage(koalas)) {
    console.log(
      `Dolphins win (${calcAverage(dolphins)} vs. ${calcAverage(koalas)})`
    );
  } else if (calcAverage(koalas) > 2 * calcAverage(dolphins)) {
    console.log(
      `Koalas win (${calcAverage(koalas)} vs. ${calcAverage(dolphins)})`
    );
  } else if (calcAverage(dolphins) === calcAverage(koalas)) {
    console.log(`Draw (${calcAverage(dolphins)} vs. ${calcAverage(koalas)})`);
  } else {
    console.log(`No team wins...`);
  }
}
checkWinner(Dolphins, Koalas);
