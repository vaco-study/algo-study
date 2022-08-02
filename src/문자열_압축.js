function solution(s) {
    if (s.length === 1) {
        return 1;
    }
    
    let answer = 0;
    let unit = 1;
    const stringLength = s.length;
    const resultContainer = [];
    
    while (unit <= Math.ceil(stringLength / 2)) {
        const array = [];
        
        for (let i = 0; i < stringLength; i+=unit) {
            array.push(s.substring(i, i + unit));
        }
        
        let str = "";
        let temp = array[0];
        let count = 1;

        for (let i = 1; i < array.length; i++) {
            const item = array[i];

            if (temp === item) {
                count++;
            } else {
                if (count < 2) {
                    str += temp;
                } else {
                    str += `${count}${temp}`;
                }
                count = 1;
            }
            temp = array[i];
        }
        
        unit++;
    }
        
    return answer;
}