
function reverseStr(str) {
  let revString = '';
  str.split('').forEach(function (char) {
      revString = char + revString;
  });
    return revString;
}

