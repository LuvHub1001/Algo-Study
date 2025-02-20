function solution(x, n) {
  let answer = [];
  let temp = x;
  answer.push(x);

  for (let i = 1; i < n; i++) {
    temp = temp + x;
    answer.push(temp);
  }

  return answer;
}
