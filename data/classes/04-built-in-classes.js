/*
we gonna learn about built-in object : such as Date()
*/

const today = new Date();  // date object represents the current date and time
console.log(today); // this date object has properties and methods ,that we can use that are related to the date
console.log(today.toLocaleTimeString());
// .toLocalTimeString() = gived the current time

/*
const today = dayjs();

DayJS uses this Date class behind the scenes.
DayJS gives us a lot of extra features.
So we use DayJS instead of Date directly.
*/