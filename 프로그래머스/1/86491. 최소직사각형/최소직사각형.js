function solution(sizes) {
    let widthArr = [];
    let heightArr = [];
    
    sizes.map((el,idx) => {
        widthArr[idx] = Math.max(...el);
        heightArr[idx] = Math.min(...el);
    })
    
    answer = Math.max(...widthArr) * Math.max(...heightArr);
    return answer;
}