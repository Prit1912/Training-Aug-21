"use strict";
// There is a retail shop which need to manage the inventory,
// whenever some purchase is being made product quantity should be reduced, 
// if quanity is less than 5 reorder request should be raised.
// Design an interface and classes for the same.
exports.__esModule = true;
var classes_1 = require("./classes");
var customers = [];
function addCustomer(id, name, phone, email) {
    var customer = new classes_1.Customer(id, name, phone, email);
    customers.push(customer);
    customer.customer_detail();
}
addCustomer(1, 'Prit', 9925976644, 'prit@gmail.com');
addCustomer(2, 'Man', 8925976644, 'man@gmail.com');
addCustomer(3, 'Jay', 7925976644, 'jay@gmail.com');
addCustomer(4, 'Tirth', 6925976644, 'tirth@gmail.com');
addCustomer(5, 'Raj', 9825976644, 'raj@gmail.com');
var items = [];
function addItem(id, name, quantity) {
    var item = new classes_1.Item(id, name, quantity);
    items.push(item);
}
addItem(1, 'item1', 6);
addItem(2, 'item2', 5);
addItem(3, 'item3', 7);
addItem(4, 'item4', 8);
console.log(customers);
console.log(items);
function reOrder(item_id, quantity) {
    var item = items.find(function (i) {
        return i.item_id == item_id;
    });
    if (item === undefined) {
        console.log('item not found');
        return;
    }
    item.item_quantity += quantity;
    console.log(item);
}
function purchase(cust_id, item_id, qty) {
    var customer = customers.find(function (c) {
        return c.cust_id == cust_id;
    });
    if (customer === undefined) {
        console.log('customer not found');
        return;
    }
    var item = items.find(function (i) {
        return i.item_id == item_id;
    });
    if (item === undefined) {
        console.log('item not found');
        return;
    }
    if (qty > item.item_quantity) {
        console.log("".concat(item.item_name, " out of stock"));
        return;
    }
    // decrease quantity as per order
    item.item_quantity -= qty;
    if (item.item_quantity < 5) {
        reOrder(item.item_id, 5);
    }
    else {
        console.log(item);
    }
}
purchase(1, 2, 1);
purchase(1, 2, 2);
purchase(2, 3, 1);
