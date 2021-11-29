import {Ibooking,Irestaurent,Iuser} from './interfaces'

let restaurentArr: Irestaurent[] = [
    {
        id: 1,
        name: "R1",
        availibility: [
            {
                diningRoom: "d1",
                tables: {
                    total: 4,
                    capacity: [
                        {table_id: "t1",table_size: 4},
                        {table_id: "t2",table_size: 6},
                        {table_id: "t3",table_size: 8},
                        {table_id: "t4",table_size: 5},
                    ]
                }
            },
            {
                diningRoom: "d2",
                tables: {
                    total: 3,
                    capacity: [
                        {table_id: "t1",table_size: 4},
                        {table_id: "t2",table_size: 6},
                        {table_id: "t3",table_size: 8}
                    ]
                }
            }
            
        ],
        city: "Surat",
        state: "Gujarat",
        country: "India"
    }
]


let usersArr: Iuser[] = [
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
]


let bookingArr: Ibooking[] = [
    {
        restaurent_id: 1,
        user_id: 1,
        dining_room: "d1",
        table_id: "t4",
        total_persons: 5,
        time_from: 20,
        time_till: 21,
        date: '2021-11-30'
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
]

export {bookingArr,restaurentArr,usersArr}