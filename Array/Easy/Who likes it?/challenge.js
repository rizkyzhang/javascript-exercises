/*
  Title:
    Who likes it?

  Description:
    You probably know the "like" system from Facebook and other pages. 
    People can "like" blog posts, pictures or other items. 
    We want to create the text that should be displayed next to such an item.

    Implement a function likes :: [String] -> String, which must take in input array, containing the names of people who like an item.
    It must return the display text as shown in the examples.

  Examples:
    console.log(whoLikesIt([])); 
    // -> "no one likes this"

    console.log(whoLikesIt(["Peter"])); 
    // -> "Peter likes this"

    console.log(whoLikesIt(["Jacob", "Alex"]));
    // -> "Jacob and Alex like this"
      

    console.log(whoLikesIt(["Max", "John", "Mark"]));
    // -> "Max, John and Mark like this"


    console.log(whoLikesIt(["Alex", "Jacob", "Mark", "Max"]));
    // -> "Alex, Jacob and 2 others like this"

    For 4 or more names, the number in and 2 others simply increases.

  Link:
    https://www.codewars.com/kata/who-likes-it/javascript
*/
