let nameSet = new Set();
// let nameSet = new Set(['Prit','Man','Raj','Prit'])
// add values to set
nameSet.add('Prit')
    .add('Prit')
    .add('Man')
    .add('Raj');
console.log(nameSet);
// iterate through set
for (let name of nameSet) {
    console.log(name);
}
// checking availability
console.log(nameSet.has('Man'));
// delete value
nameSet.delete('Raj');
console.log(nameSet);
// size of set
console.log(nameSet.size);
// clear all values for set
nameSet.clear();
console.log(nameSet);
