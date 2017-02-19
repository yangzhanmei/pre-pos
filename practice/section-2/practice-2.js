function count_same_elements(collection) {
  let result = [];

  for(let c of collection) {
    if(c.length > 1){
      const sp = c.split("-");
      result.push({key:sp[0],count:parseInt(sp[1])});
    }
    else {
      if(!isExit(c,result)){
        result.push({key:c,count:1});
      }
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
