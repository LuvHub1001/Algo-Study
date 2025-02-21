function solution(arr1, arr2) {
  let answer = 0;
  for (let i = 0; i < arr1.length; i++) answer += arr1[i] * arr2[i];
  return answer;
}