function solution(a,b){
    let answer = "";
    let day = ["FRI","SAT","SUN","MON","TUE","WED","THU"];
    let month = [31,29,31,30,31,30,31,31,30,31,30,31];
    
    let cnt = -1;
    
    for(let i = 0; i<a-1; i++){
        cnt += month[i];
    }
    
    answer = day[(cnt + b) % 7];
    return answer;
}