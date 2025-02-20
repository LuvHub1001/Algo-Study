function solution(arr) {
  let answer = 0;
  const n = arr.length;
  let sum = arr.reduce((a, b) => a + b, 0);
  answer = sum / n;
  return answer;
}