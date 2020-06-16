const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const multiplyByThreeFor = (array) => {
  const newArray = [];

  for(let i = 0; i < array.length; i += 1) {
    newArray.push(array[i] * 3);
  }

  return newArray;
};

const multiplyByThree = (array) => {

  const newArray = [];

  array.forEach((element, index) => {
    console.log(index, element);
    console.log('--------------');
    newArray.push(element * 3);
  });

  return newArray;
}




console.log(multiplyByThree(numbers));