const x = 3;

function func(bool) {
  if (bool) {
    x = 48;
  }

  return x;
}

console.log(func(true)); 
console.log(func(false)); 
