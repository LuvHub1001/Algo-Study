function solution(str){
    let answer = false;
    
    let pCnt = 0;
    let yCnt = 0;
    
    for(let i of str){
        if(i.toLowerCase() === "p") pCnt++;
        else if(i.toLowerCase() === "y") yCnt++;
    }
    
    answer = pCnt === yCnt ? true : false;
    
    return answer;
}