function solution(str) {
  let answer = "";
  let splitStr = str.split(" ");

  answer = splitStr
    .map((item) => item.charAt(0).toUpperCase() + item.slice(1).toLowerCase())
    .join(" ");

  return answer;
}