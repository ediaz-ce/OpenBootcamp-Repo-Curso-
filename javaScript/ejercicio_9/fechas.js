let fecha = new Date();
let birthday = new  Date(2003, 02, 22);
let yaFue = ((fecha.getTime()) > (birthday.getTime()));
console.log(yaFue);
let monthBday = birthday.getMonth();
let yearBday = birthday.getFullYear();
