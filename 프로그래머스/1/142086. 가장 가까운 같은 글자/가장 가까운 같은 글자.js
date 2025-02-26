function solution(str) {
  let answer = [];
  let map = new Map();

  for (let i = 0; i < str.length; i++) {
    if (map.has(str[i])) {
      answer.push(i - map.get(str[i]));
    } else answer.push(-1);

    map.set(str[i], i);
  }

  return answer;
}
