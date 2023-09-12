const Dolphins = [97, 112, 101];
const Koalas = [109, 95, 106];

const avgDolphins = (Dolphins[0] + Dolphins[1] + Dolphins[2]) / 3;
console.log(avgDolphins);
const avgKoalas = (Koalas[0] + Koalas[1] + Koalas[2]) / 3;
console.log(avgKoalas);
const compare = (avgDolphins, avgKoalas) => {
  if (avgDolphins > avgDolphins && avgDolphins >= 100) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas > avgDolphins && avgKoalas >= 100) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else if (
    avgDolphins === avgDolphins &&
    avgDolphins >= 100 &&
    avgKoalas >= 100
  ) {
    console.log(`Draw (${avgDolphins} vs. ${avgKoalas})`);
  } else {
    console.log(`No team wins...`);
  }
};
compare(avgDolphins, avgKoalas);
