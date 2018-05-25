function evenOdd(arr){
  let result = {even: [], odd: []};
  let nums = arr.filter(item=>{
    if(typeof item === 'number' && !isNaN(item))
      return item;
    else
      return false
  }).map(num=>{
    if(num%2 === 0)
      result.even.push(num)
    else
      result.odd.push(num)
  })
  return result
}