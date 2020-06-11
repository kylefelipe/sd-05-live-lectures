// 1 = I 5 = V 10 = X 50 = L 100 = C 500 = D 1000 = M
// 4 => IV => IIII

// Função criada aqui;

//1256
function convertToRoman(numero) {
  const digits = [...numero.toString()];
  // ["3", "2", "3", "3"] 
  if(digits.length === 1) return convertDigit(Number(digits[0]), "I", "V");
  else if(digits.length === 2) return `${convertDigit(Number(digits[0]), "X", "L")}${convertDigit(Number(digits[1]), "I", "V")}`
  else if(digits.length === 3) return `${convertDigit(Number(digits[0]), "C", "D")}${convertDigit(Number(digits[1]), "X", "L")}${convertDigit(Number(digits[2]), "I", "V")}`
  else if(digits.length === 4) return `${"M".repeat(Number(digits[0]))}${convertDigit(Number(digits[1]), "C", "D")}${convertDigit(Number(digits[2]), "X", "L")}${convertDigit(Number(digits[3]), "I", "V")}`
}

function convertDigit(digit, romanNumber, prefix) {
  if(digit >= 5) return `${prefix}${romanNumber.repeat(digit - 5)}`
  return romanNumber.repeat(digit);
}

convertToRoman(124);

module.exports = convertToRoman;
