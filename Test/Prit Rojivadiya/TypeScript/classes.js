"use strict";
exports.__esModule = true;
exports.User = exports.Restaurent = exports.Booking = void 0;
var data_1 = require("./data");
var User = /** @class */ (function () {
    function User() {
    }
    User.prototype.addUser = function (userData) {
        var user = data_1.usersArr.find(function (u) {
            return u.id == userData.id;
        });
        if (user) {
            console.log('duplicate user id');
            return;
        }
        data_1.usersArr.push(userData);
    };
    User.prototype.showAllUser = function () {
        for (var _i = 0, usersArr_1 = data_1.usersArr; _i < usersArr_1.length; _i++) {
            var user = usersArr_1[_i];
            console.log(user);
        }
    };
    return User;
}());
exports.User = User;
var Restaurent = /** @class */ (function () {
    function Restaurent() {
    }
    Restaurent.prototype.addRestaurent = function (restData) {
        var rest = data_1.restaurentArr.find(function (r) {
            return r.id == restData.id;
        });
        if (rest) {
            console.log('duplicate restaurent id');
            return;
        }
        data_1.restaurentArr.push(restData);
    };
    Restaurent.prototype.showAllRestaurent = function () {
        for (var _i = 0, restaurentArr_1 = data_1.restaurentArr; _i < restaurentArr_1.length; _i++) {
            var restaurent = restaurentArr_1[_i];
            console.log(restaurent);
        }
    };
    Restaurent.prototype.checkRestaurentAvailibility = function (rest_id, date) {
        var data = [];
        for (var _i = 0, bookingArr_1 = data_1.bookingArr; _i < bookingArr_1.length; _i++) {
            var booking = bookingArr_1[_i];
            if (booking.restaurent_id == rest_id && date == booking.date) {
                data.push(booking);
            }
        }
        if (data.length == 0) {
            console.log('no bookings are there!! you can book for any time');
        }
        else {
            console.log('following time is booked: ', data);
        }
        var filteredDining = data_1.diningArr.filter(function (d) {
            return d.restaurent_id == rest_id;
        });
        for (var _a = 0, filteredDining_1 = filteredDining; _a < filteredDining_1.length; _a++) {
            var data_2 = filteredDining_1[_a];
            console.log("diningRoom: ".concat(data_2.diningRoom));
            console.log("capacity: ");
            for (var _b = 0, _c = data_2.tables.capacity; _b < _c.length; _b++) {
                var d = _c[_b];
                console.log(d);
            }
            console.log('-----------------------');
        }
    };
    return Restaurent;
}());
exports.Restaurent = Restaurent;
var Booking = /** @class */ (function () {
    function Booking() {
        this.token = 1;
    }
    Booking.prototype.newBooking = function (bookingData) {
        // check restaurent available or not
        var restData = data_1.restaurentArr.find(function (r) {
            return r.id == bookingData.restaurent_id;
        });
        if (!restData) {
            console.log('no restaurent found');
            return;
        }
        // check that booking date is not more the one month time period
        var bookingDate = new Date(bookingData.date);
        var currDate = new Date();
        var diff = bookingDate.getTime() - currDate.getTime();
        if (Math.abs(diff / (1000 * 3600 * 24)) > 30) {
            console.log('you cannot book table in advance for more than one month time period');
            return;
        }
        // checking that booking time more than 6 hours or not
        if (bookingDate.getDate() == currDate.getDate()) {
            var currHour = new Date().getHours();
            var bookingHour = bookingData.time_from;
            if (bookingHour - currHour < 6) {
                console.log('cannot booked with less than 6 hours time');
                return;
            }
        }
        // check table and dining room available withing metioned time
        var bookingDataArray = data_1.bookingArr.filter(function (b) {
            return bookingData.restaurent_id == b.restaurent_id; // getting data of bookings of particular restaurent
        });
        for (var _i = 0, bookingDataArray_1 = bookingDataArray; _i < bookingDataArray_1.length; _i++) {
            var data = bookingDataArray_1[_i];
            if (bookingData.dining_room == data.dining_room && bookingData.table_id == data.table_id
                && (bookingData.time_from >= data.time_from && bookingData.time_from < data.time_till
                    || (bookingData.time_till > data.time_from && bookingData.time_till <= data.time_till))) {
                console.log('table already booked');
                return;
            }
            else {
                var token = this.token;
                console.log('table booked successfully');
                console.log('your token is ', token);
                this.token++;
                data_1.bookingArr.push(bookingData);
                return;
            }
        }
    };
    return Booking;
}());
exports.Booking = Booking;
