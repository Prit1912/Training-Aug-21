interface Irestaurent{
    id: number,
    name: string,
    availibility: Idining[],
    city: string,
    state: string,
    country: string
}

interface Idining{
    diningRoom: string,
    tables: {
        total: number,
        capacity: {table_id: string, table_size: number}[]
    }
}

interface Iuser{
    id: number,
    name: string,
    address: string,
    phone: number,
    email: string
}

interface Ibooking{
    restaurent_id: number,
    user_id: number,
    dining_room: string,
    table_id: string,
    total_persons: number,
    time_from: number,
    time_till: number,
    date: string
}

export {Ibooking,Iuser,Irestaurent}
