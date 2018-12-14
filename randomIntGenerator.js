
/*
Note :

# Math.random() generates number between 0 (included) and 1 (excluded).

# (max - min + 1) ensure we get the right step of number we want including the max number, without "+ 1" max number will be excluded. 

# "+ min" ensure we at least get min number and max number at the most, if this is ommitted, the min number will start from 0, not from our min number. 
*/




/* How the function work :
1. (19 - 4 + 1) run first because it is in the parenthesis, we get 16.

2. Math.random() were multiplied by 16 so the range become    0  ====== 15.999999. 

3. For example if Math.random() generate 0.56767, Math.floor() will round it down to 0.
Our range now is 0 ====== 15.

4. After that the 0 number will be sum with the min number which is 4 so we get 4 at the least, if the number is 15 then after it get sum with the min number we get 19 which is the most we can get.
With the "+ min" our range become 4 ====== 19. 
*/




function randomInt(min, max) {
    console.log( Math.floor( Math.random() * (max - min + 1) ) + min );
}

randomInt(4, 19);
