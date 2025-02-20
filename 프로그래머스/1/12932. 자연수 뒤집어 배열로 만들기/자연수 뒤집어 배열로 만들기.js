function solution(num) {
  let answer = [];
  let temp = String(num).split("").reverse();

  for (let i = 0; i < temp.length; i++) {
    answer.push(Number(temp[i]));
  }

  return answer;
}
