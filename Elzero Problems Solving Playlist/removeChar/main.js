const removeChar = (str, charToDel) => {
  const arrOfChars = str.split("");
  let result = [];
  for (let char of arrOfChars) {
    if (char.toLowerCase() !== charToDel.toLowerCase()) {
      result.push(char);
    }
  }
  return result.join("");
};

const removeChar2 = (str, charToDel) => {
  return str
    .split("")
    .filter((x) => x.toLowerCase() !== charToDel.toLowerCase())
    .join("");
};

const removeChar3 = (str, charToDel) => {
  return str.replace(/s/gi, "");
};

console.log(removeChar3("hassan mostafa hassan", "s"));
