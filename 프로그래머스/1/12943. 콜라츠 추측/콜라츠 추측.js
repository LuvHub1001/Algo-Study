function solution(num) {
  let answer = 0;

  while (num !== 1) {
    if (num % 2 === 0) num = num / 2;
    else num = num * 3 + 1;
    answer++;
  }

  answer = answer > 500 ? -1 : answer;

  return answer;
}
