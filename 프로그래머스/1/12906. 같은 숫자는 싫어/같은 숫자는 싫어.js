

function solution(arr){
    let answer = [];
    const n = arr.length;
    
    for(let i = 0; i<n; i++) if(arr[i] !== arr[i + 1]) answer.push(arr[i]);
    
    return answer;
}