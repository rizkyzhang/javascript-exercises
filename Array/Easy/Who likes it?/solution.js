// Solution 1

function whoLikesIt(names) {
  const totalPeoples = names.length;
  const totalOthers = names.length - 2;

  switch(totalPeoples) {
    case 0:
      return "no one likes this";
    case 1:
      return `${names[0]} likes this`;
    case 2:
      return `${names[0]} and ${names[1]} like this`;
    case 3:
      return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    default:
      return `${names[0]}, ${names[1]} and ${totalOthers} others like this`;
  }
}

// Solution 2

function whoLikesIt(names) {
  const totalPeoples = names.length;
  const totalOthers = names.length - 2;

  return {
    0: 'no one likes this',
    1: `${names[0]} likes this`, 
    2: `${names[0]} and ${names[1]} like this`, 
    3: `${names[0]}, ${names[1]} and ${names[2]} like this`, 
    4: `${names[0]}, ${names[1]} and ${totalOthers} others like this`, 
  }[Math.min(4, totalPeoples)];
}
