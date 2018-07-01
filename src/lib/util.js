export const get = (obj, keyPath) => {
  if(keyPath === '') {
    return obj
  }

  const keys = keyPath.split('.')
  
  let levelObj = obj
  if(!levelObj) {
    return void 0;
  }

  for(let index in keys) {
    const key = keys[index]
    levelObj = levelObj[key]
    if(Number(index) !== keys.length - 1) {
      if(!levelObj) {
        return void 0;
      } else {
        continue;
      }
    } else {
      return levelObj
    }
  }
}