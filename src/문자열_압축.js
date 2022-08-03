function solution(s) {
    if (s.length === 1) return 1;
    
    let answer = 0;
    let unit = 1;
    const resultContainer = [];
    
    while (unit <= Math.floor(s.length / 2)) {
        let count = 1;
        let compressedStr = "";
        
        for (let i = 0; i < s.length; i+=unit) {
            const current = s.substr(i, unit);
            const next = s.substr(i + unit, unit);

            if (current === next) {
                count++;
                continue;
            }
        
            compressedStr = count > 1 ? compressedStr + count + current : compressedStr + current;
            count = 1;
        }

        resultContainer.push(compressedStr.length);
        
        unit++;
    }
    
    answer = Math.min(...resultContainer);
    
    return answer;
}

console.log(solution("aabbacc"));