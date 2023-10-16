function createPerformanceCalculator(aPerformance, aPlay) {
  return new PerformanceCalculator(aPerformance, aPlay);
}

function enrichPerformance(aPerformance) {
  const calculator = createPerformanceCalculator(
    aPerformance,
    playFor(aPerformance)
  );
  const result = Object.assign({}, aPerformance);
  result.play = calculator.play;
  result.amount = calculator.amount;
  result.volumeCredits = calculator.volumeCredits;
  return result;
}

function playFor(aPerformance) {
  return plays[aPerformance.playID];
  /**
   * plays = {
   *    1: {
   *     _id: 1,
   *     type: "tragedy"
   *   },
   *    2: {
   *     _id: 2,
   *     type: "comedy"
   *   }
   * }
   *
   * */
}

function amountFor(aPerformance) {
  return new PerformanceCalculator(aPerformance, playFor(aPerformance)).amount;
}

//적립포인트
function volumeCreditsFor(aPerformance) {
  return new PerformanceCalculator(aPerformance, playFor(aPerformance))
    .volumeCredits;
}

function totalAmounut(data) {
  return data.performances.reduce((total, p) => total + p.amount, 0);
}
function totalVolumeCredits(data) {
  return data.performances.reduce((total, p) => total + p.volumeCredits, 0);
}
