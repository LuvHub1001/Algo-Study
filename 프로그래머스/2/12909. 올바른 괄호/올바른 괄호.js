function solution(s){
    let answer = true;
    let stack = [];
    
    for(let i of s){
        if(i === "(") stack.push(i);
        else{
            if(stack.length === 0) return false;
            stack.pop();
        }
    }
    
    answer = stack.length === 0 ? true : false;
    
    return answer;
}