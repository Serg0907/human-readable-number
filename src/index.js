module.exports = function toReadable (number) {
    let string = number.toString(),
    items, tens, scalable, start, end, portions, portionsLen, portion, intVal, i, word, words;

if (parseInt(string) === 0) {
    return 'zero';
}

items = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

scalable = ['', 'thousand', 'million'];

start = string.length;
portions = [];
while (start > 0) {
    end = start;
    portions.push(string.slice((start = Math.max(0, start - 3)), end));
}

portionsLen = portions.length;
if (portionsLen > scalable.length) {
    return '';
}

words = [];
for (i = 0; i < portionsLen; i++) {

    portion = parseInt(portions[i]);

    if (portion) {

        intVal = portions[i].split('').reverse().map(parseFloat);

        if (intVal[1] === 1) {
            intVal[0] += 10;
        }

        if ((word = scalable[i])) {
            words.push(word);
        }

        if ((word = items[intVal[0]])) {
            words.push(word);
        }

        if ((word = tens[intVal[1]])) {
            words.push(word);
        }

        if ((word = items[intVal[2]])) {
            words.push(word + ' hundred');
        }

    }

}

return words.reverse().join(' ');

}
