let x = 3;

function func(bool) {
  if (bool) {
    x = 48;
  }

  return x; // accesses the x from line (A)
}

console.log(func(true)); // returns 3
console.log(func(false)); // returns 3
