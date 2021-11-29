import {Ibooking,Iuser,Irestaurent} from './interfaces'
import {bookingArr,usersArr,restaurentArr} from "./data"

class User{
    
    addUser(userData:Iuser){
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
        restaurentArr.push(restData);
    }

    showAllRestaurent(){
        for(let restaurent of restaurentArr){
            console.log(restaurent);
        }
    }

    checkRestaurentAvailibility(rest_id: number){
        // working
    }

}

class Booking{

    newBooking(bookingData: Ibooking){
        console.log(bookingData)
        const dining = bookingData.dining_room;
        const table = bookingData.table_id;
        const persons = bookingData.total_persons;
        const date = bookingData.date

        for(let restaurent of restaurentArr){
            if(bookingData.restaurent_id == restaurent.id){
                for(let avail of restaurent.availibility){
                   if(avail.diningRoom == dining){
                       for(let tbl of avail.tables.capacity){
                           if(tbl.table_id == table){
                                // working
                           }
                       }
                   }
                }
            }
        }
        console.log('restaurent not availbale')
    }

}

export {Booking, Restaurent, User}