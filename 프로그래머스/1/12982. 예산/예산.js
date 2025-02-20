function solution(arr, budget) {
  let answer = 0;

  arr.sort((a, b) => a - b, 0);

  for (let i = 0; i < arr.length; i++) {
    let lastMoney = budget - arr[i];
    let cnt = 1;
    for (let j = 0; j < arr.length; j++) {
      if (j !== i && arr[j] > lastMoney) break;
      if (j !== i && arr[j] <= lastMoney) {
        lastMoney -= arr[j];
        cnt++;
      }
    cnt = arr[j] > budget ? 0 : cnt;

    }
    answer = Math.max(cnt, answer);
  }

  return answer;
}
