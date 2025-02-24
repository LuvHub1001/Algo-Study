function solution(num) {
  let answer = 0;
  let sum = 0;

  let lt = 1;
  for (let rt = 1; rt <= num; rt++) {
    sum += rt;
    if (sum === num) answer++;
    while (sum > num) {
      sum -= lt++;
      if (sum === num) answer++;
    }
  }

  return answer;
}