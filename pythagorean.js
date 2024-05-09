/*
 *  by: Kurtis Heer
 *  last modified: 2024-05-08
 *
 *  javascript code for the Pythagorean Theorem Calculator
 */

// Finds the hypotenuse c given the two legs a and b
let side1 = "a";
let side2 = "a";

function setSide1(side) {
    side1 = side;
}

function setSide2(side) {
    side2 = side;
}
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
function Pythagorean(length1, length2) {
    if(side1 == side2) {
        return "Invalid input: the two sides should not be the same side (Both are '" + side1 + "')";
    } else if (side1 == "c") {
        document.getElementById("output").value = PythagoreanLC(length2, length1);
    }else if (side2 == "c") {
        document.getElementById("output").value = PythagoreanLC(length1, length2);
    } else {
        document.getElementById("output").value = PythagoreanAB(length1, length2);
    }
}