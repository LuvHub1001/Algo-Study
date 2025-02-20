function solution(num) {
  let answer = [];
  num = String(num).split("");
  num.sort((a, b) => Number(b - a), 0);
  for (let i of num) answer.push(Number(i));
  answer = Number(answer.join(""));
  return answer;
}