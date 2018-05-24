function convertToAscii(str){
  let charNumStr = str.split('').map((item,index)=>{
    return item.charCodeAt(0);
  }).join('')
  return charNumStr
}