// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

// Additionally, if the number is negative, return 0.

// Note: If the number is a multiple of both 3 and 5, only count it once.

// solution:

function solution(number){
    let i = 0
    let sum = 0
    if (number >= 0) {
        while (i < number) {
            // если число делится и на 3, и на 5
            if (i % 3 === 0 && i % 5 === 0) {
                sum += i
                
            } else 
            if (i % 3 === 0 || i % 5 === 0) {
                sum += i
            }
            i += 1
        }
    return sum
    } else {
        return 0
    }
}

console.log(solution(10));
