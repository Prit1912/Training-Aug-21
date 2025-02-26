"use strict";
exports.__esModule = true;
exports.diningArr = exports.usersArr = exports.restaurentArr = exports.bookingArr = void 0;
var restaurentArr = [
    {
        id: 1,
        name: "R1",
        city: "Surat",
        state: "Gujarat",
        country: "India"
    }
];
exports.restaurentArr = restaurentArr;
var diningArr = [
    {
        restaurent_id: 1,
        diningRoom: 'd1',
        tables: {
            total: 4,
            capacity: [
                { "table_id": "t1", "table_size": 4 },
                { "table_id": "t2", "table_size": 6 },
                { "table_id": "t3", "table_size": 8 },
                { "table_id": "t4", "table_size": 5 },
            ]
        }
    }, {
        restaurent_id: 1,
        diningRoom: "d2",
        tables: {
            total: 3,
            capacity: [
                { "table_id": "t1", "table_size": 4 },
                { "table_id": "t2", "table_size": 6 },
                { "table_id": "t3", "table_size": 8 }
            ]
        }
    }, {
        restaurent_id: 2,
        diningRoom: "d1",
        tables: {
            total: 3,
            capacity: [
                { "table_id": "t1", "table_size": 5 },
                { "table_id": "t2", "table_size": 7 },
                { "table_id": "t3", "table_size": 3 }
            ]
        }
    }
];
exports.diningArr = diningArr;
var usersArr = [
    {
        id: 1,
        name: "Prit",
        address: "Navsari Gujarat India",
        phone: 9955886644,
        email: "prit@gmail.com"
    },
    {
        id: 2,
        name: "Man",
        address: "Surat Gujarat India",
        phone: 9855886644,
        email: "man@gmail.com"
    },
    {
        id: 3,
        name: "Tith",
        address: "Navsari Gujarat India",
        phone: 9965886644,
        email: "tirth@gmail.com"
    }
];
exports.usersArr = usersArr;
var bookingArr = [
    {
        restaurent_id: 1,
        user_id: 1,
        dining_room: "d1",
        table_id: "t4",
        total_persons: 5,
        time_from: 20,
        time_till: 21,
        date: '2021-12-12'
    },
    {
        restaurent_id: 2,
        user_id: 2,
        dining_room: "d2",
        table_id: "t2",
        total_persons: 6,
        time_from: 20,
        time_till: 21,
        date: '2021-11-30'
    }
];
exports.bookingArr = bookingArr;
