function solution(s) {
  let answer = true;
  const n = s.length;

  if (n !== 4 && n !== 6) return false;
  for (let i of s) {
    if (isNaN(Number(i))) return false;
  }

  return answer;
}
