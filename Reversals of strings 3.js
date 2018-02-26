
function reverseStr(str) {
    var revString = '';
    for(let char of str) {
        revString = char + revString;
    }
    return revString;
}

revString('dog');