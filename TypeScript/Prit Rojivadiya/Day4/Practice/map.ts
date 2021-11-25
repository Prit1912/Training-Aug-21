let ageMap = new Map();

// set value
ageMap.set('Prit',21)
      .set('Man', 17)
      .set('Raj',20)

// another method
// let ageMap = new Map([
//     ['Prit',21],
//     ['Man',17],
//     ['Raj',20]
// ])


console.log(ageMap);


// iterate through keys
for(let key of ageMap.keys()){
    console.log('key = '+key)
}


// iterate through values
for(let value of ageMap.values()){
    console.log('value = '+value)
}


// iterate through all entries
for(let entry of ageMap.entries()){
    console.log(entry[0],entry[1]);
}


// get value
console.log(ageMap.get('Prit'))


// checking availibilty
console.log(ageMap.has('Prit'));
console.log(ageMap.has('jay'));


// remove entry
ageMap.delete('Raj');
console.log(ageMap)


// size of map
console.log(ageMap.size)


// clear map
ageMap.clear();
console.log(ageMap);

export {}