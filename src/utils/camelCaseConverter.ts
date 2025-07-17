const camelCaseConverter = (camelCaseString: string) => {
  const stringToArray: string[] = camelCaseString.split("");
  const arrayToString: string[] = [];
  // This doesn't check if input is empty string.  But then, the only invocations should be on keys which can't be empty strings.
  arrayToString.push(stringToArray[0].toUpperCase());
  for (let i = 1; i < stringToArray.length; i++) {
    if (stringToArray[i].toUpperCase() === stringToArray[i]) {
      arrayToString.push(` ${stringToArray[i]}`);
    } else {
      arrayToString.push(stringToArray[i]);
    }
  }
  return arrayToString.join("");
}

//console.log(camelCaseConverter("hamsterHueyAndTheGooeyKablooie"));
