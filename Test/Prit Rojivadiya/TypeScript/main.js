"use strict";
exports.__esModule = true;
var classes_1 = require("./classes");
var user = new classes_1.User();
var restaurent = new classes_1.Restaurent();
var booking = new classes_1.Booking();
// adding user
user.addUser({
    id: 4,
    name: "Raj",
    address: "Surat Gujarat India",
    phone: 9965886645,
    email: "raj@gmail.com"
});
// show all users
user.showAllUser();
// add restaurent
restaurent.addRestaurent({
    id: 2,
    name: "R2",
    city: "Navsari",
    state: "Gujarat",
    country: "India"
});
// show all restaurent
restaurent.showAllRestaurent();
// check which table are booked at what time
restaurent.checkRestaurentAvailibility(1, "2021-11-30");
// book a table
booking.newBooking({
    restaurent_id: 1,
    user_id: 3,
    dining_room: "d2",
    table_id: "t2",
    total_persons: 8,
    time_from: 20,
    time_till: 22,
    date: "2021-12-12"
});
booking.newBooking({
    restaurent_id: 1,
    user_id: 3,
    dining_room: "d2",
    table_id: "t2",
    total_persons: 8,
    time_from: 22,
    time_till: 23,
    date: "2021-12-12"
});
