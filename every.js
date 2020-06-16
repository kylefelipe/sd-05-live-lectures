const ages = [23, 32, 16, 19, 34];

const eighteenOrAbove = age => age >= 18;

const eighteenOrAboveWithEvery = ages => ages.every(eighteenOrAbove);

console.log(eighteenOrAboveWithEvery(ages));