//Write a function that accepts a string as input and swaps the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.

function swapCase(string){
    return string.split('').map(function(letter){
        if(letter === letter.toUpperCase()){
            return letter.toLowerCase();
        }else{
            return letter.toUpperCase();
        }
    }).join('');
}
let input = 'The Quick Brown Fox';
let output = swapCase(input);
console.log(output);