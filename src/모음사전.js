function solution(word) {
    const obj = {
        A: 1,
        E: 2,
        I: 3,
        O: 4,
        U: 5,
    }
    const arr = [10000, 11000, 11100, 11110, 11111];
    
    let wordInNumber = "";
    
    for (let i = 0; i < word.length; i++) {
        const item = word[i];
        
        wordInNumber += `${obj[item]}`;
    }
    
    wordInNumber = wordInNumber.padEnd(5, 0);

    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        
        while (item < wordInNumber) {
            
        }
    }
}