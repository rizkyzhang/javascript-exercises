// Long solution

function outputTriangle(n) {
  let triangle = "#";

  for (let i = 1; i <= n; i++) {
    console.log(triangle);
    triangle += "#";
  }
}

// Short solution

function outputTriangle(n) {
  for (let line = "#"; line.length <= n; line += "#") {
    console.log(line);
  }
}
