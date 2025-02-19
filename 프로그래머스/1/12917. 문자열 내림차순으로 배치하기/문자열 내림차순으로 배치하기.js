function solution(str) {
    var answer = '';
    answer = str.split("").sort().reverse().join("")
    return answer;
}