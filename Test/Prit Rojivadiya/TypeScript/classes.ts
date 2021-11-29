import {Ibooking,Iuser,Irestaurent} from './interfaces'
import {bookingArr,usersArr,restaurentArr, diningArr} from "./data"

class User{
    
    addUser(userData:Iuser){
        const user = usersArr.find((u)=>{
            return u.id == userData.id
        })
        if(user){
            console.log('duplicate user id');
            return;
        }
        usersArr.push(userData)
    }

    showAllUser(){
        for(let user of usersArr){
            console.log(user);
        }
    }

}

class Restaurent{

    addRestaurent(restData: Irestaurent){
        const rest = restaurentArr.find((r)=>{
            return r.id == restData.id
        })
        if(rest){
            console.log('duplicate restaurent id');
            return;
        }
        restaurentArr.push(restData);
    }

    showAllRestaurent(){
        for(let restaurent of restaurentArr){
            console.log(restaurent);
        }
    }

    checkRestaurentAvailibility(rest_id: number, date: string){
        let data = [];
        for(let booking of bookingArr){
            if(booking.restaurent_id == rest_id && date == booking.date){
                data.push(booking);
            }
        }
        if(data.length == 0){
            console.log('no bookings are there!! you can book for any time')
        }else{
            console.log('following time is booked: ',data);
        }

        let filteredDining = diningArr.filter((d)=>{
            return d.restaurent_id == rest_id;
        })

        for(let data of filteredDining){
            console.log(`diningRoom: ${data.diningRoom}`);
            console.log(`capacity: `);
            for(let d of data.tables.capacity){
                console.log(d);
            }
            console.log('-----------------------')
        }

    }

}

class Booking{

    token: number = 1;

    newBooking(bookingData: Ibooking){

        // check restaurent available or not

        const restData = restaurentArr.find((r)=>{
            return r.id == bookingData.restaurent_id
        })
        
        if(!restData){
            console.log('no restaurent found')
            return
        }

        
        // check that booking date is not more the one month time period
        
        let bookingDate = new Date(bookingData.date);
        let currDate = new Date();
        
        let diff = bookingDate.getTime() - currDate.getTime()
        if(Math.abs(diff/(1000*3600*24)) > 30){
            console.log('you cannot book table in advance for more than one month time period')
            return
        }
        

        // checking that booking time more than 6 hours or not

        if(bookingDate.getDate() == currDate.getDate()){
            let currHour = new Date().getHours();
            let bookingHour = bookingData.time_from;
            if(bookingHour - currHour < 6){
                console.log('cannot booked with less than 6 hours time')
                return;
            }
        }

        
        // check table and dining room available withing metioned time

        const bookingDataArray = bookingArr.filter((b)=>{
            return bookingData.restaurent_id == b.restaurent_id; // getting data of bookings of particular restaurent
        })

        for(let data of bookingDataArray){
            if(bookingData.dining_room == data.dining_room && bookingData.table_id == data.table_id 
                && (bookingData.time_from >= data.time_from && bookingData.time_from < data.time_till
                || (bookingData.time_till > data.time_from && bookingData.time_till <= data.time_till))){
                console.log('table already booked');
                return;
            }else{
                const token = this.token
                console.log('table booked successfully');
                console.log('your token is ', token);
                this.token++;
                bookingArr.push(bookingData)
                return;
            }
        }

    }

}

export {Booking, Restaurent, User}