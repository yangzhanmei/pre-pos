function collect_same_elements(collection_a, object_b) {
  const result = collection_a.filter((a)=>{
    if(isExit(a.key,object_b.value)){
      return a.key;
    }
  });

  return result.map((a)=>{
    return a.key;
  })
}

function isExit(a,object_b) {
  return object_b.find((b)=>{return a===b})
}
