function create_updated_collection(collection_a, object_b) {
  let result = [];
  let array = buildArray(collection_a);

  return result = array.map((a)=>{
    if(isExitInObject_b(a.key,object_b.value)){
      a.count -= parseInt(a.count/3);
    }
    return a;
  });
}

function isExitInObject_b(a,object_b) {

  return object_b.find((b)=>{return a===b})
}

function buildArray(collection_a) {
  let array = [];

  for(let c of collection_a) {
    if(c.length > 1){
      const sp = c.split("-");
      array.push({key:sp[0],count:parseInt(sp[1])});
    }
    else {
      if(!isExit(c,array)){
        array.push({key:c,count:1});
      }
    }
  }

  return array;
}


function isExit(c,array) {
  return array.find((r)=>{
    if(c===r.key){
      r.count ++;
      return 1;
    }
    else {
      return 0;
    }
  })
}

