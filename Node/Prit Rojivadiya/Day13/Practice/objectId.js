const mongoose = require('mongoose');

// 12 bytes
    // 4 bytes timestamp
    // 3 bytes machine identifier
    // 2 bytes process identifier
    // 3 bytes counter

const id = mongoose.Types.ObjectId();

console.log(id);
console.log(id.getTimestamp());
console.log(id.toString());

const isvalid = mongoose.Types.ObjectId.isValid('1234');
console.log(isvalid);