// export const getProducts = async () => {
//   return fetch('https://dummyjson.com/products')
//     .then(response => {
//       if (response.ok) {
//         return response.json();
//       } else {
//         throw new Error('the response is not okay')
//       }
//     })
//     .then(responseJSON => responseJSON.products)
//     .catch(error => {
//       console.error('console message', error);
//     })
//   }

export const getProducts = async () => {
  try {
    //const response = await fetch('https://dummyjson.com/products');
    if (false) {
      //const responseJSON = await response.json();
      //return responseJSON.products;
    } else {
      throw new Error ('the response is not okay');
    }
  } catch (error) {
    console.error('Error in getProducts', error); // catches thrown error
    throw new Error ('this is a second generation error'); // passes error
  }
}

export const localInvocation = async () => {
  try {
    const data = await getProducts(); // have to catch the error.  so stick in a try catch block.
    console.log(data);
  } catch (error) {
    console.error('localInvocation error', error);
    /**
     * Error in getProducts Error: the response is not okay
     * localInvocation error Error: this is a second generation error
     */
  }

}

localInvocation();