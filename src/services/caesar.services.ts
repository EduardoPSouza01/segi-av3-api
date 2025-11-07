const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

function positiveModulo(dividend: number, divisor: number): number {
  return ((dividend % divisor) + divisor) % divisor;
}

export const cipher = (textoClaro: string, deslocamento: number): string => {
  const textoCifrado = textoClaro
    .split("")
    .map((char) => {
      if (char == " ") return " ";

      const indexInAlphabet = alphabet.indexOf(char);
      const newIndex = positiveModulo(indexInAlphabet + deslocamento, 26);
      const newLetter = alphabet[newIndex];

      return newLetter;
    })
    .join("");

  return textoCifrado;
};

export const decipher = (
  textoCifrado: string,
  deslocamento: number
): string => {
  const textoClaro = textoCifrado
    .split("")
    .map((char) => {
      if (char == " ") return " ";

      const indexInAlphabet = alphabet.indexOf(char);
      const newIndex = positiveModulo(indexInAlphabet - deslocamento, 26);
      const newLetter = alphabet[newIndex];

      return newLetter;
    })
    .join("");

  return textoClaro;
};
