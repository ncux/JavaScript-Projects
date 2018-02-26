
function reverseStr(str) {
    var revString = '';
    for(i = str.length - 1; i >= 0; i--) {
        revString += str[i];
    }
    return revString;
}

reverseStr('car');