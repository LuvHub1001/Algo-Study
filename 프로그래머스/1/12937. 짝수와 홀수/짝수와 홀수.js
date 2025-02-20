function solution(num) {
  let answer = num % 2 === 0 || num === 0 ? "Even" : "Odd";
  return answer;
}