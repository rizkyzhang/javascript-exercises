/*
  Title:
    Mutations

  Description:
    Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
    For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.
    The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".
    Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".

  Examples:
    console.log(mutation(["hello", "hey"]));
    // -> false
    
    console.log(mutation(["hello", "Hello"]));
    // -> true

    console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));
    // -> true

    console.log(mutation(["Mary", "Army"]));
    // -> true

    console.log(mutation(["Mary", "Aarmy"]));
    // -> true

    console.log(mutation(["Alien", "line"]));
    // -> true

    console.log(mutation(["floor", "for"]));
    // -> true

    console.log(mutation(["hello", "neo"]));
    // -> false

    console.log(mutation(["voodoo", "no"]));
    // -> false

  Link:
    https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/mutations/
*/

