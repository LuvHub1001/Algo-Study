function solution(answers) {
  let answer = [];
  const n = answers.length;

  const arr1Pattern = [1, 2, 3, 4, 5];
  const arr2Pattern = [2, 1, 2, 3, 2, 4, 2, 5];
  const arr3Pattern = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let arr1 = Array(n)
    .fill(0)
    .map((_, i) => arr1Pattern[i % arr1Pattern.length]);
  let arr2 = Array(n)
    .fill(0)
    .map((_, i) => arr2Pattern[i % arr2Pattern.length]);
  let arr3 = Array(n)
    .fill(0)
    .map((_, i) => arr3Pattern[i % arr3Pattern.length]);

  let cnt1 = 0,
    cnt2 = 0,
    cnt3 = 0;
  for (let i = 0; i < n; i++) {
    if (answers[i] === arr1[i]) cnt1++;
    if (answers[i] === arr2[i]) cnt2++;
    if (answers[i] === arr3[i]) cnt3++;
  }

  const maxScore = Math.max(cnt1, cnt2, cnt3);
  if (cnt1 === maxScore) answer.push(1);
  if (cnt2 === maxScore) answer.push(2);
  if (cnt3 === maxScore) answer.push(3);

  return answer;
}