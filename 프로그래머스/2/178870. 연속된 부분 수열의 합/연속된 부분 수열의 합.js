function solution(sequence, k) {
  const n = sequence.length;
  let answer = [-1, n];

  let sum = 0;
  let lt = 0;
  for (let rt = 0; rt < n; rt++) {
    sum += sequence[rt];

    while (sum > k) {
      sum -= sequence[lt];
      lt++;
    }

    if (sum === k) {
      if (rt - lt < answer[1] - answer[0]) {
        answer = [lt, rt];
      }
    }
  }

  return answer;
}