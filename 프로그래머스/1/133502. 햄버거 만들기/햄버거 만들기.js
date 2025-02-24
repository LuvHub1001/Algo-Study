function solution(arr) {
  // 1-2-3-1
  let answer = 0;
  let stack = [];

  for (let i of arr) {
    stack.push(i);

    if (
      stack.length >= 4 &&
      stack[stack.length - 4] === 1 &&
      stack[stack.length - 3] === 2 &&
      stack[stack.length - 2] === 3 &&
      stack[stack.length - 1] === 1
    ) {
      answer++;
      stack.splice(-4);
    }
  }

  return answer;
}