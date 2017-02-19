function count_same_elements(collection) {
  let result = [];

  for(let c of collection) {
    if(!isExit(c,result)){
      result.push({key:c,count:1});
    }
  }

  return result;
}

function isExit(c,result) {
  return result.find((r)=>{
    if(c===r.key){
      r.count ++;
      return 1;
    }
    else {
      return 0;
    }
  })
}
