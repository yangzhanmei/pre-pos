function create_updated_collection(collection_a, object_b) {

  return result = collection_a.map((a)=>{
    if(isExit(a.key,object_b.value)){
      a.count --;
    }
    return a;
  });
}

function isExit(a,object_b) {

  return object_b.find((b)=>{return a===b})
}
