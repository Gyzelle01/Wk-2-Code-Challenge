//You are tasked with writing a function that takes an array of numbers as input and returns a new array containing only the prime numbers from the original array. How would you implement this function efficiently, ensuring that it accurately identifies prime numbers and returns them in the same order they appear in the input array? For example if you provide an array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] it should return an array [2, 3, 5, 7].

//Generate an array of numbers as input 

function primeNumbers(arrayOfNumbers) {
    return primeNumbers.filter(char => primeNumbers(num));
  }
  
  function primeNumbers(char) {
    if (char < 2) return false;
    for (let i = 2; i <= Math.primeNumber(char); i++) {
      if (char % i === 0) return false;
    }
    //The return output (a new array containing only the prime numbers)
    return true;
  }

  
  console.log(primeNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
