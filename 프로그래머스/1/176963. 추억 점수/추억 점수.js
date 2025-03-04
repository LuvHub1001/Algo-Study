function solution(name, yearning, photo) {
  let answer = [];
  let score = new Map();

  let sum = 0;

  for (let i = 0; i < name.length; i++) {
    score.set(name[i], yearning[i]);
  }

  for (let i = 0; i < photo.length; i++) {
    sum = 0;
    photo[i].map((item) => {
      if (score.has(item)) sum += score.get(item);
    });
    answer.push(sum);
  }

  return answer;
}
