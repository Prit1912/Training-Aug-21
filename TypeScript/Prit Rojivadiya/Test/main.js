"use strict";
exports.__esModule = true;
var classes_1 = require("./classes");
var u1 = new classes_1.User();
var r1 = new classes_1.Restaurent();
var b1 = new classes_1.Booking();
u1.addUser({
    id: 4,
    name: "Raj",
    address: "Surat Gujarat India",
    phone: 9965886645,
    email: "raj@gmail.com"
});
u1.showAllUser();
r1.showAllRestaurent();
r1.checkRestaurentAvailibility(1);
b1.newBooking({
    restaurent_id: 1,
    user_id: 3,
    dining_room: "d2",
    table_id: "t3",
    total_persons: 8,
    time_from: 20,
    time_till: 21,
    date: "2021-12-01"
});
