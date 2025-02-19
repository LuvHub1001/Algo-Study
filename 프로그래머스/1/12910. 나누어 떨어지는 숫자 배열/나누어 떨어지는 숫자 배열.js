function solution(arr,divisor){
    let answer = [];
    const n = arr.length;
    
    for(let i of arr){
        if(i % divisor === 0) answer.push(i);
    }
    
    if(answer.length === 0) answer.push(-1);
    
    answer.sort((a,b) => a-b, 0);
    return answer;
}