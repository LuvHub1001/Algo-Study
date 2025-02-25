function solution(spell, dic) {
  let temp = spell.sort().join("");

  for (let i of dic) {
    console.log([...i]);
    if ([...i].sort().join("") === temp) return 1;
  }

  return 2;
}