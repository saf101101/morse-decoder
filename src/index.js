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
    let L = expr.length;
    let letters = [];
      for (let i = 0; i < L; i += 10) {
        letters.push(expr.slice(i, i + 10));
      }
    //const lettersNew = letters.map(x => x.replace(/00*/, ''));
      let arrStr = [];
      for (let i = 0; i < letters.length; i++) {
        let codedStr = '';
          for (let j = 0; j < letters[i].length; j += 2) {
            if (letters[i].slice(j, j + 10) ==='**********') {
              codedStr += ' ';
            } else if (letters[i].slice(j, j + 2) === '00') {
              codedStr += '';
            } else if (letters[i].slice(j, j + 2) === '10') {
              codedStr += '.';
            } else if (letters[i].slice(j, j + 2) === '11') {
              codedStr += '-';
            } else {
              break;
            }
          }
          arrStr.push(codedStr);
      }
  
    return arrStr.map((item) => {
      if (item === ' ') {
        return ' ';
      }
      return MORSE_TABLE[item]}).reduce((a,b) => a+b)
  }

module.exports = {
    decode
}