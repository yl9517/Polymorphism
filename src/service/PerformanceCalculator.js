class PerformanceCalculator {
  constructor(aPerformance, aPlay) {
    this.performance = aPerformance;
    this.play = aPlay;
  }

  get amount() {
    throw new Error("서브 클래스에서 처리하도록 설계되었습니다.");
  }

  get volumeCredits() {
    //일반적인 경우
    return Math.mac(this.performance.audience - 30, 0);
  }
}
