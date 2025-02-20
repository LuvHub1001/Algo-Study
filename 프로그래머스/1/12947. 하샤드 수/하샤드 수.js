function solution(num) {
  let answer = true;
  let temp = 0;
  let temp2 = num;

  while (temp2) {
    temp += temp2 % 10;
    temp2 = Math.floor(temp2 / 10);
  }

  answer = num % temp === 0 ? true : false;
  return answer;
}