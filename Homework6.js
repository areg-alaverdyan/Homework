// 1.Given an object. Invert it (keys become values and values become keys). If there is
//more than key for that given value, concat the values.

function swap (obj){
    var retobj = {};
    for(let key in obj){
        if (retobj[obj[key]]) {
            retobj[obj[key]] += key
            
        } else {
            retobj[obj[key]] = key;
        }
      
    }
    return retobj;
  }

  // 2. Given two objects. Write a function that performs shallow compare.

  function areEqual(a, b) {
    for(let key in a) {
        if(!(b[key]) || a[key] !== b[key]) {
            return false;
        }
    }
    for(let key in b) {
        if(!(a[key]) || a[key] !== b[key]) {
            return false;
        }
    }
    return true;
}

// 3. Determine if a word or phrase is an isogram. An isogram (also known as a &quot;non pattern
//word&quot;) is a word or phrase without a repeating letter.

function isIsogram (string) {
    for (let i = 0; i<string.length; i++) {
        for (let j = i+1; j<string.length; j++) {
            if (string[i] === string[j]) {
                return false
            }
        }
    }
    return true
}