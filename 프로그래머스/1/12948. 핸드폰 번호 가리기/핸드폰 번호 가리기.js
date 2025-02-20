function solution(str) {
  let answer = "";
  let sliceStr1 = str.slice(0, -4);
  let sliceStr2 = str.slice(-4);

  sliceStr1 = sliceStr1.replaceAll(/[0-9]/g, "*");
  answer = sliceStr1 + sliceStr2;
  return answer;
}