const numbers = [1, 2, 3, 4, 5];

const filterOddWithFor = (array) => {
  const oddNumbers = [];

  for(let i = 0; i < array.length; i += 1) {
    if(array[i] % 2 !== 0) {
      oddNumbers.push(array[i]);
    }
  }
  return oddNumbers;
}

console.log(filterOddWithFor(numbers));