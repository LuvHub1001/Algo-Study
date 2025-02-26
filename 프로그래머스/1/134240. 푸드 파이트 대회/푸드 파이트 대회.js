function solution(food) {
  let answer = "";

  for (let i = 1; i < food.length; i++) {
    if (food[i] % 2 !== 0) food[i] -= 1;
    answer += String(i).repeat(food[i] / 2);
  }

  return answer + "0" + answer.split("").reverse().join("");
}