process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");    
    const a = Number(n[0]);
    const b = Number(n[1]);
    
    let answer = "";
    
    for(let i = 0; i < b; i++){
        answer += "*"
        answer += '*'.repeat(a - 1);
        answer += '\n'
    }
    
    console.log(answer);
});
