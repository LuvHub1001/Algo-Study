function solution(n) {
  let answer = 0;
  let temp = 0;
  while (n) {
    temp += n % 10;
    n = Math.floor(n / 10);
  }

  answer = temp;

  return answer;
}
