function verifyContents(str, arr){
  let result = [];
  for(let i of arr){
      let included = 0;
    for(let k of str.split('')){
      if(i.includes(k)){
        included++
      }
    }
    if(included === str.length){
      result.push(i);
    }
  }
  return result;
}