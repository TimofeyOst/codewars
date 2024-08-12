// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
    
    let vowelsCount = 0
    let vowels = ['a', 'e', 'i', 'o', 'u']

    // while (i <= str.length) {
    //     if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
    //         vowels += 1
    //     }
    //     i += 1
    // }
    
    for (let i = 0; i <= str.length; i++) {
        for (let j = 0; j < 5; j++) {
            if (str[i] === vowels[j]) {
                vowelsCount ++
            }
        }
        
    }

    return vowelsCount
    
}

console.log(getCount('asfljlsnlgaaansdfgl'));
