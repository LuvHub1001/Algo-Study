function solution(arr, commands) {
  let answer = [];
  let temp = [];
  const n = arr.length;

  commands.map((item, idx) => {
    temp.push(arr.slice(item[0] - 1, item[1]));
    temp[idx].sort((a, b) => a - b, 0);
    answer.push(temp[idx][item[2] - 1]);
  });

  return answer;
}
