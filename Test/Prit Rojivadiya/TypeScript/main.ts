/*
Online table reservation in the restaurant for specific date and time. 
This will provide the list of restaurants in the country so that the user can choose accordingly.
Provide the list of tables available for online reservation at different dining rooms in the restaurant.
Mention the number of guests that can be accommodated on the particular table.
Accept the booking for tables.
Online table reservations are done 6hrs in advance for the current date.
Table reservation can be done up to one month in advance.
Give a token number to the customer as an acknowledgement of booking.
*/

import {User,Restaurent,Booking} from './classes'

const user = new User();
const restaurent = new Restaurent();
const booking = new Booking();

// adding user
user.addUser({
        id: 4,
        name: "Raj",
        address: "Surat Gujarat India",
        phone: 9965886645,
        email: "raj@gmail.com"   
})

// show all users
user.showAllUser()


// add restaurent
restaurent.addRestaurent( {
    id: 2,
    name: "R2",
    city: "Navsari",
    state: "Gujarat",
    country: "India"
})

// show all restaurent
restaurent.showAllRestaurent();

// check which table are booked at what time
restaurent.checkRestaurentAvailibility(1,"2021-11-30")

// book a table
booking.newBooking({
    restaurent_id: 1,
    user_id: 3,
    dining_room: "d2",
    table_id: "t2",
    total_persons: 8,
    time_from: 21,
    time_till: 22,
    date: "2021-12-12",
})

booking.newBooking({
    restaurent_id: 1,
    user_id: 3,
    dining_room: "d2",
    table_id: "t2",
    total_persons: 8,
    time_from: 22,
    time_till: 23,
    date: "2021-12-12",
})
