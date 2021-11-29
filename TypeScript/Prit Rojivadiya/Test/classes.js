"use strict";
exports.__esModule = true;
exports.User = exports.Restaurent = exports.Booking = void 0;
var data_1 = require("./data");
var User = /** @class */ (function () {
    function User() {
    }
    User.prototype.addUser = function (userData) {
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
        data_1.restaurentArr.push(restData);
    };
    Restaurent.prototype.showAllRestaurent = function () {
        for (var _i = 0, restaurentArr_1 = data_1.restaurentArr; _i < restaurentArr_1.length; _i++) {
            var restaurent = restaurentArr_1[_i];
            console.log(restaurent);
        }
    };
    Restaurent.prototype.checkRestaurentAvailibility = function (rest_id) {
    };
    return Restaurent;
}());
exports.Restaurent = Restaurent;
var Booking = /** @class */ (function () {
    function Booking() {
    }
    Booking.prototype.newBooking = function (bookingData) {
        console.log(bookingData);
        var dining = bookingData.dining_room;
        var table = bookingData.table_id;
        var persons = bookingData.total_persons;
        for (var _i = 0, restaurentArr_2 = data_1.restaurentArr; _i < restaurentArr_2.length; _i++) {
            var restaurent = restaurentArr_2[_i];
            if (bookingData.restaurent_id == restaurent.id) {
                for (var _a = 0, _b = restaurent.availibility; _a < _b.length; _a++) {
                    var avail = _b[_a];
                    if (avail.diningRoom == dining) {
                        console.log(avail.tables.capacity[0]);
                    }
                }
            }
        }
        // console.log('restaurent not availbale')
    };
    return Booking;
}());
exports.Booking = Booking;
