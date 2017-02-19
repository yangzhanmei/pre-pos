function create_updated_collection(collection_a, object_b) {
  let array = [];
  let result = [];

  for(let c of collection_a) {
    if(!isExit(c,array)){
      array.push({key:c,count:1});
    }
  }

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

