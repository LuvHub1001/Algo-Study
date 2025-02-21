function solution(participant, completion) {
  let pH = new Map();

  for (let i of participant) {
    if (pH.has(i)) pH.set(i, pH.get(i) + 1);
    else pH.set(i, 1);
  }

  for (let i of completion) {
    pH.set(i, pH.get(i) - 1);
  }

  for (let [key, val] of pH) {
    if (val > 0) return key;
  }
}
