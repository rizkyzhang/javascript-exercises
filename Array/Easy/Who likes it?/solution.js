function whoLikesIt(names) {
  const totalPeoples = names.length;
  const totalOthers = names.length - 2;

  switch (totalPeoples) {
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

