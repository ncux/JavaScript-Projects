
function reverseStr(str) {
    var revString = '';
    for(i = 0; i <= str.length - 1; i++) {
        revString = str[i] + revString;
    }
    return revString;
}

reverseStr('cat');