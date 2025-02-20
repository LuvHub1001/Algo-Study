
function solution(str) {
  let answer = "";
  const n = str.length;

  for (let i = 0; i < n; i++) {
    if (str[0] === "-" || str[0] === "+") answer += str[i];
    else if (!isNaN(str[i])) answer += str[i];
  }

  return Number(answer);
}