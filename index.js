function randomize(s){
  if(typeof s !== 'string'){
    throw new Error ("It should be a string");
  }

  const n = s.length;

  let newStr = "";
  let mp = new Map();

  while(mp.size!==n){
    let ind = Math.floor(Math.random()*n);
    if(mp.has(ind)) continue;
    mp.set(ind, s[ind]);
  }

  mp.forEach((val, _)=>{

    newStr+=val;
  })

  return newStr;
  
}

module.exports = randomize;
