import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';


const today = dayjs();  // object containing dqy , time , date and all
console.log(today);

const deliveryDate = today.add(7 , 'day');  // 7 days after today
console.log(deliveryDate);  // still has the same value 
console.log(deliveryDate.format('dddd , MMMM D'))  // it is now formatted to day , month date


/*
const today = dayjs();
This stores the current date and time in the today variable.

Example value:
2025-06-29T20:25:00.000+05:30
(which means June 29, 2025 at 8:25 PM in your timezone)

const deliveryDate = today.add(7, 'day');
This creates a new date that is 7 days after today.

deliveryDate still has the same format as today (includes date and time).

Example value:
2025-07-06T20:25:00.000+05:30
(which means July 6, 2025 at 8:25 PM)

*/