function solution(seoul) {
    const n = seoul.length;
    for(let i = 0 ; i<n; i++){
        if(seoul[i] === "Kim") return `김서방은 ${i}에 있다`
    }
}