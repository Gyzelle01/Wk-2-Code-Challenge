//Write a JavaScript function that accepts two numbers to generate an array between them. For example, if the two numbers are 4 and 7, the output should be [4, 5, 6, 7] and -4 and 7 should return [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7].

//Generate an array that accepts two numbers to genrate an array between them.
function generateArray(char1,char2) {
    let generateArray = [];
    for(let a = char1; a <= char2; a++){ 

        generateArray.push(a);
    }
    //The return output will be 4 and 7 
    return generateArray;
}
console.log(generateArray(4,7));
console.log(generateArray(-4,7));
