function solution(str){
    let answer = "";
    const n = str.length;
    
    if(n % 2 !== 0){
        answer += str[Math.floor(n / 2)];
    }else{
        answer += str[Math.floor(n / 2) - 1] ;
        answer += str[Math.floor(n / 2)];
    }
    return answer;
}