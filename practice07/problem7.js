function pigLatin(str) {
    var arr = str.split(' ');
    var newarr = [];
    for (var i = 0; i < arr.length; i++) {
        var ltrOne = arr[i].slice(0, 1);
        var rest = arr[i].slice(1, arr[i].length);
        ltrOne += 'ay';
        var newWord = rest + ltrOne;
        newarr.push(newWord.toLowerCase())
    }
    return newarr.join(' ')
}
