/*
 *  by: Kurtis Heer
 *  last modified: 2024-05-08
 *
 *  javascript code for the Pythagorean Theorem Calculator
 */

// Finds the hypotenuse c given the two legs a and b
function PythagoreanAB(a, b) {
    if(a <= 0 || b <= 0) {
        return "Invalid input: all inputs must be greater than 0"
    } else {
        return Math.hypot(a, b);
    }
}
// Finds the length of one of the legs given the other leg l and the hypotenuse c
function PythagoreanLC(l, c) {
    if(l <= 0 || c <= 0) {
        return "Invalid input: all inputs must be greater than 0"
    }
    else if(l >= c) {
        return "Invalid input: value of leg must be less than hypotenuse"
    }
    
    return Math.sqrt(Math.pow(c, 2) - Math.pow(l, 2));
}

// Find the length of one side of a right triangle given the other two side lengths
function Pythagorean(side1, side2, length1, length2) {
    if(side1 == side2) {
        return "Invalid input: the two sides should not be the same side (Both are '" + side1 + "')";
    } else if (side1 == "c") {
        return PythagoreanLC(length2, length1);
    }else if (side2 == "c") {
        return PythagoreanLC(length1, length2);
    } else {
        return PythagoreanAB(length1, length2);
    }
}
// Tests
console.log(Pythagorean("c", "a", 5, 3)); // Expect 4
console.log(Pythagorean("a", "b", 3, 4)); // Expect 5
console.log(Pythagorean("b", "c", 4, 5)); // Expect 3
console.log(Pythagorean("c", "a", 4, 5)); // Expect input to be invalid (a > c)
console.log(Pythagorean("a", "b", 5, -5)); // Expect input to be invalid (contains nonpositive value)
console.log(Pythagorean("b", "c", 5, 0)); // Expect input to be invalid (contains nonpositive value)
console.log(Pythagorean("a", "a", 5, 10)); // Expect input to be invalid (both sides are "a")