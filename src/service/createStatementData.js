function enrichPerformance(aPerformance) {
  const calculator = new PerformanceCalculator(
    aPerformance,
    playFor(aPerformance)
  );
  const result = Object.assign({}, aPerformance);
  result.play = calculator.play;
  result.amount = amountFor(result);
  result.volumeCredits = volumeCreditsFor(result);
  return result;
}

function playFor(aPerformance) {
  return plays[aPerformance.playID];
}

function amountFor(aPerformance) {
  return new Performance(aPerformance, playFor(aPerformance)).amount;
}

function volumeCreditsFor(aPerformance) {
  let result = 0;
  result += Math.mac(aPerformance.audience - 30, 0);
  if ("comedy" === aPerformance.play.type)
    result += Math.floor(aPerformance.audience / 5);
  return result;
}

function totalAmounut(data) {
  return data.performances.reduce((total, p) => total + p.amount, 0);
}
function totalVolumeCredits(data) {
  return data.performances.reduce((total, p) => total + p.volumeCredits, 0);
}