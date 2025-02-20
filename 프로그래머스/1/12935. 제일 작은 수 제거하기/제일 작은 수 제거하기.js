function solution(arr) {
  let answer = arr;

  const min = Math.min(...arr);
  answer = arr.filter((el) => el !== min);

  if (answer.length === 0) answer.push(-1);
  return answer;
}