function solution(left, right) {
  let answer = 0;

  for (let i = left; i <= right; i++) {
    let cnt = 1;
    let temp = [];
    while (cnt <= i / 2) {
      if (i % cnt === 0) temp.push(cnt);
      cnt++;
    }
    temp = [...temp, i];
    answer = temp.length % 2 === 0 ? answer + i : answer - i;
  }

  return answer;
}