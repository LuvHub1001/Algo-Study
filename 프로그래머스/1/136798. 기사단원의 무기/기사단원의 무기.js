function temp(n) {
  let count = 0;
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      count++;
      if (i !== n / i) count++;
    }
  }
  return count;
}

function solution(number, limit, power) {
  let sum = 0;

  for (let i = 1; i <= number; i++) {
    let count = temp(i);
    sum += count > limit ? power : count;
  }

  return sum;
}