export const camelCaseConverterWithColon = (camelCaseString: string): string => {
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
  arrayToString.push(": "); // probably HTML will trim whitespace.  Eh.
  //return `===${arrayToString.join("")}===`; // check OK; no leading or trailing spaces.  Could have just used .trim.  Nah.
  return arrayToString.join("");
}
// console.log(camelCaseConverter("hamsterHueyAndTheGooeyKablooie"));

/**
 * to handle:
 * ["beauty","mascara"]
 * {"width":15.14,"height":13.08,"depth":22.99}
 * [{"rating":3,"comment":"Would not recommend!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Eleanor Collins","reviewerEmail":"eleanor.collins@x.dummyjson.com"},{"rating":4,"comment":"Very satisfied!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Lucas Gordon","reviewerEmail":"lucas.gordon@x.dummyjson.com"},{"rating":5,"comment":"Highly impressed!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Eleanor Collins","reviewerEmail":"eleanor.collins@x.dummyjson.com"}]
 * {"createdAt":"2025-04-30T09:41:02.053Z","updatedAt":"2025-04-30T09:41:02.053Z","barcode":"5784719087687","qrCode":"https://cdn.dummyjson.com/public/qr-code.png"}
 * 
 * exceptions
 * images["https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp"]
 * thumbnailhttps://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp
 * 
 * if object, make list of 'key: property, key: property . . . key: property'.
 * if array of strings, make list of strings 'string1, string2'.
 * if array of objects, make list of 'key: property, key: property . . . key: property' /n etc.  So best would be to return an array of strings to be used for separate <div>s.  As it is, this won't look good since the first line is 'key: property'; new divs would flow over.  But that could be handled with css styling to separate elements.  Hm.
 * So it returns a string or an array of strings and handles div creation at the other end.  Probably best to wrap each key/property in a containing div.  So it's a div container, a div with the key: property and/or other divs on the same level.
 * 
 * note again:  exception for images/thumbnail.  Probably ignore thumnbnail for this SBA.
 */
export const thingToString = (property: any): string => {
  // note:  Remember, maybe EVERYTHING is a string.  So then I'll have to look for brackets or something to identify the insides.  Hm.
  if (typeof property === "string") {
    return property;
  } else if (typeof property === "number") {
    return String(property);
  } else if (!property.length) {
    // it's an object, or someone sent something weird to this function, very naughty.
    return objectToString(property);
  } else {
    // it's not a string, it's not an object, it's an array of strings or an object.  Again, it's not null or void, and empty string is already handled.  I think "" has typeof 'string' anyways.
    if (typeof property[0] === "string") {
      return property.join(", ");
    } else {
      // else it's an array of objects.  But I didn't output an array of strings here.  Just map it?
      // ah yes it needs to be a string on the other end anyways.  Well I could handle it on that end, but nah.
      let returnString = "";
      for (let i = 0; i < property.length; i++) {
        returnString += `${objectToString(property[i])}, `;
      }
      return returnString.slice(0, -2); // chop trailing comma and space
    }
  }
}

export const objectToString = (property: any): string => {
  let returnString = "";
  for (const [key, value] of Object.entries(property)) {
    returnString += `${camelCaseConverterWithColon(key)}: ${value}, `;
  }
  return returnString.slice(0, -2); // chop trailing comma and space
}

// console.log(thingToString("hamster"));
// console.log(thingToString(["beauty","mascara"]));
// console.log(thingToString({"width":15.14,"height":13.08,"depth":22.99}));
// console.log(thingToString([{"rating":3,"comment":"Would not recommend!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Eleanor Collins","reviewerEmail":"eleanor.collins@x.dummyjson.com"},{"rating":4,"comment":"Very satisfied!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Lucas Gordon","reviewerEmail":"lucas.gordon@x.dummyjson.com"},{"rating":5,"comment":"Highly impressed!","date":"2025-04-30T09:41:02.053Z","reviewerName":"Eleanor Collins","reviewerEmail":"eleanor.collins@x.dummyjson.com"}]));
// console.log(thingToString({"createdAt":"2025-04-30T09:41:02.053Z","updatedAt":"2025-04-30T09:41:02.053Z","barcode":"5784719087687","qrCode":"https://cdn.dummyjson.com/public/qr-code.png"}));
// yeah okay it doesn't look great but whatever.

