var x = 3;

function func(bool) {
  if (bool) {
    var x = 48; // (A) scope: whole function
  }

  return x; // accesses the x from line (A)
}

console.log(func(true)); // returns 48
console.log(func(false)); // returns undefined
