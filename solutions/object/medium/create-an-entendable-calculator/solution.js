function Calculator() {
  const methods = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b
  };

  this.calculate = function(str) {
    const split = str.split(" ");
    const a = +split[0]; // left operand
    const op = split[1]; // operator
    const b = +split[2]; // right operand

    if (!methods[op] || Number.isNaN(a) || Number.isNaN(b)) {
      return NaN;
    }

    return methods[op](a, b);
  };

  this.addMethod = function(op, func) {
    methods[op] = func;
  };
}
