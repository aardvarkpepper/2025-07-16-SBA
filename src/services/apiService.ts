import { ConnectionError, errorHandler } from '../utils/errorHandler.ts';

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
    const response = await fetch('https://dummyjson.com/products');
    if (response.ok) {
    // if (true) { // == test
    //   const response = 34 // == test
      const responseJSON = await response.json();
      // if above doesn't work then an error gets thrown.  TypeError mostly for tests.  Could be other things though.
      return responseJSON.products;
    } else {
      throw new ConnectionError(`Response not OK.`, response.status);
    }
    // throw new ConnectionError(``, 404); // == test
  } catch (error) {
    errorHandler((error as Error));
    // console.error(`Error in getProducts`, error, (error as ConnectionError).status); // catches thrown error
    // throw new Error('this is a second generation error'); // passes error
  }
}

export const localInvocation = async () => {
  try {
    const data = await getProducts(); // have to catch the error.  so stick in a try catch block.
    console.log(data);
  } catch (error) {
    // There is only one await above.  Everything is local reference, apart from the invocation itself, which throws and catches an exception.  There really isn't any need to do another try/catch as there's nothing left that could be caught.  Unless console.log(data) can trigger an error.

    //The error catch in getProducts alread triggers 'ConnectionError at getProducts'.  That's really what's wanted.
    // Console.error here just adds errorHandler to the chain.  There isn't any error there.  Or is there?
    // There really isn't anything that could trigger an error apart from the single await in the try.
    // So in this case, as the error is already thrown and caught, technically the error should propagate up the chain
    // but . . . sigh.  Whatever.
    //console.error('localInvocation error', error);
    /**
     * Error in getProducts Error: the response is not okay (the catch prints, then the error caught prints)
     * localInvocation error Error: this is a second generation error (the catch prints, then the error caught prints)
     */
  }
}

//localInvocation();