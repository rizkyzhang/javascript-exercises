/*
Given a 32-bit signed integer, reverse digits of an integer.
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
*/

function reverseInt(int) {
	  if (!Number.isInteger(int)) return `${int} is not an integer`;
	
    let abs = Math.abs(int);
    let str = String(abs);
    const reversedInt = +(str.split('').reverse().join(''));
    
    return reversedInt < 0x7FFFFFFF ? reversedInt * Math.sign(int) : 0;
}


