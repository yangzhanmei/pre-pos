function collect_same_elements(collection_a, collection_b) {
	return collection_a.filter((a)=>{
        if(isExit(a,collection_b)){
          return a;
        }
  })
}

function isExit(a,collection_b) {
  return collection_b.find((b)=>{return a===b})
}
