function skipBy(n){
  let result = [];
  for(let i = n ; i <= n+10 ; i+=3){
    for(let k = 0 ; k < 2 ; k++){
        result.push(k+i);
    }
  }
  return result
}