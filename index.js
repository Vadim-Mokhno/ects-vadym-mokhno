class ECTS {
  convertingToECTSObjects = [
    { checkingFunction: isECTS_A, ectsScore: 'A' },
    { checkingFunction: isECTS_B, ectsScore: 'B' },
    { checkingFunction: isECTS_C, ectsScore: 'C' },
    { checkingFunction: isECTS_D, ectsScore: 'D' },
    { checkingFunction: isECTS_E, ectsScore: 'E' },
    { checkingFunction: isECTS_F, ectsScore: 'F' },
  ];
  constructor(score) {
    this.score = score;
  }
  ectsFromScore() {
    for (const { checkingFunction, ectsScore } of this
      .convertingToECTSObjects) {
      if (checkingFunction(this.score)) {
        return ectsScore;
      }
    }
    throw Error('Incorrect score!');
  }
}

const isECTS_A = score => score <= 100 && score >= 90;
const isECTS_B = score => score <= 89 && score >= 82;
const isECTS_C = score => score <= 81 && score >= 74;
const isECTS_D = score => score <= 73 && score >= 65;
const isECTS_E = score => score <= 64 && score >= 60;
const isECTS_F = score => score <= 59 && score >= 0;

module.exports = ECTS;
