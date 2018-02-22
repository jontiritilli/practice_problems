function fibonacci(num){
  var a = 1, b = 0, temp;
  var arr = [];
  while (num >= 0){
    arr.push(b)
    temp = a;
    a = a + b;
    b = temp;
    num--;

  }

  return arr;
}