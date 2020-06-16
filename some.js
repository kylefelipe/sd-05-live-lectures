const ages = [23, 32, 18, 19, 34];

const lessThan18 = (age, index) =>  age < 18;

// console.log('Menor de 18?', lessThan18(ages[0]));
// console.log('Menor de 18?', lessThan18(ages[2]));

const anyLessThen18 = ages => ages.some(lessThan18);

console.log(anyLessThen18(ages));