function count_same_elements(collection) {
  let array = [];
  let result = [];

  for(let c of collection){
    array = c.split("");
    if(array.length === 1){
        result = isExit(c,result,1);
    }
    else if(array.length <= 4){
        result = isExit(array[0],result,parseInt(array[2]));
    }
    else{
      const count = parseInt(array[2]*10)+parseInt(array[3]);
      result= isExit(array[0],result,count);
    }
  }

  return result;
}

function isExit(c,result,count){
  for(let r of result) {
    if (c === r.name) {
      r.summary += count;

      return result;
    }
  }

  result.push({name:c,summary:count});
  return result;
}
