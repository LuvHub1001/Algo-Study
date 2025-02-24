function solution(players, callings) {
  const hashMap = new Map();
  for (let i = 0; i < players.length; i++) {
    hashMap.set(players[i], i);
  }

  for (let i of callings) {
    const currentIndex = hashMap.get(i);
    const temp = players[currentIndex - 1];

    players[currentIndex - 1] = players[currentIndex];
    players[currentIndex] = temp;

    hashMap.set(players[currentIndex - 1], currentIndex - 1);
    hashMap.set(players[currentIndex], currentIndex);
  }

  return players;
}
