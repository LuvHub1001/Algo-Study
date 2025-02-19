function solution(n) {
    let count = 0;
    let isPrime = new Array(n + 1).fill(true);
    
    for (let i = 2; i <= n; i++) {
        if (isPrime[i]) {
            count++;
            for (let j = i; j <= n; j += i) {
            isPrime[j] = false;
            }
        }
    }
    return count;
}
