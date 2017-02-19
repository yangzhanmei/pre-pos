function collect_same_elements(collection_a, object_b) {
  return collection_a.filter((a)=>{
    if(isExit(a,object_b.value)){
      return a;
    }
  })
}

function isExit(a,object_b) {
  return object_b.find((b)=>{return a===b})
}
