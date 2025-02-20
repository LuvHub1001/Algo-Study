function solution(s) {
  var answer = "";
  s = s.split(" ");

  answer = s
    .map((word) =>
      [...word]
        .map((char, idx) =>
          idx % 2 === 0 ? char.toUpperCase() : char.toLowerCase()
        )
        .join("")
    )
    .join(" ");

  return answer;
}
