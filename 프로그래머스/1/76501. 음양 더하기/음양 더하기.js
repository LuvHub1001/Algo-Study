function solution(arr1, arr2) {
  let answer = 0;
  for (let i = 0; i < arr1.length; i++) {
    if (!arr2[i]) arr1[i] = 0 - arr1[i];
    answer += arr1[i];
  }
  return answer;
}