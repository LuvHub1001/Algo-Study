function solution(num) {
  let answer = 0;
  let temp = Math.sqrt(num);
  answer = temp === parseInt(temp) ? Math.pow(temp + 1, 2) : -1;
  return answer;
}
