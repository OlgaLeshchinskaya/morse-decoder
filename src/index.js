const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};


function decode(expr) {

    let find = expr.match(/.{1,10}/g)

    let reverse = '';

        for (let i = 0; i < find.length; i++){

            let reverseStr = find[i];   

            if (reverseStr  == "**********"){
            reverse += ' ';
            } else  if (reverseStr == "0000001011"){
                reverse += 'a';
            } else if (reverseStr == "0011101010"){
                reverse += 'b';
            } else if (reverseStr == "0011101110"){
                reverse += 'c';                    
            } else if (reverseStr == "0000111010"){
                reverse += 'd';
            } else if (reverseStr== "0000000010"){
                reverse += 'e';
            } else if (reverseStr == "0010101110"){
                reverse += 'f';                    
            } else if (reverseStr == "0000111110"){
                reverse += 'g';
            } else if (reverseStr== "0010101010"){
                reverse += 'h';
            } else if (reverseStr  == "0000001010"){
                reverse += 'i';                    
            } else if (reverseStr  == "0010111111"){
                reverse += 'j';
            } else if (reverseStr  == "0000111011"){
                reverse += 'k';
            } else if (reverseStr  == "0010111010"){
                reverse += 'l';                    
            } else if (reverseStr  == "0000001111"){
                reverse += 'm';
            } else if (reverseStr  == "0000001110"){
                reverse += 'n';
            } else if (reverseStr  == "0000111111"){
                reverse += 'o';                    
            } else if (reverseStr  == "0010111110"){
                reverse += 'p';
            } else if (reverseStr  == "0011111011"){
                reverse += 'q';
            } else if (reverseStr  == "0000101110"){
                reverse += 'r';                    
            } else if (reverseStr  == "0000101010"){
                reverse += 's';
            } else if (reverseStr  == "0000000011"){
                reverse += 't';
            } else if (reverseStr  == "0000101011"){
                reverse += 'u';                    
            } else if (reverseStr  == "0010101011"){
                reverse += 'v';                    
            } else if (reverseStr  == "0000101111"){
                reverse += 'w';
            } else if (reverseStr  == "0011101011"){
                reverse += 'x';
            } else if (reverseStr  == "0011101111"){
                reverse += 'y';                    
            } else if (reverseStr  == "0011111010"){
                reverse+= 'z';
           
            } else if (reverseStr  == "1111111111"){
                reverse += '0';                    
            } else if (reverseStr  == "1011111111"){
                reverse += '1';
            } else if (reverseStr  == "1010111111"){
                reverse += '2';
            } else if (reverseStr  == "1010101111"){
                reverse += '3';                    
            } else if (reverseStr  == "1010101011"){
                reverse += '4';
            } else if (reverseStr  == "1010101010"){
                reverse += '5';
            } else if (reverseStr  == "1110101010"){
                reverse += '6';                    
            } else if (reverseStr  == "1111101010"){
                reverse += '7';
            } else if (reverseStr  == "1111111010"){
                reverse += '8';
            } else if (reverseStr  == "1111111110"){
                reverse += '9';                    
            } 
           
             else {
                reverse += reverseStr ;
            };
        };
        return reverse 

}

    
module.exports = {
    decode
}