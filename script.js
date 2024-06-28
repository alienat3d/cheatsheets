'use strict';

// * === Dates === * \\

// Проверка, является ли дата будним днём
const isWeekDay = (date = new Date()) => date.getDay() % 6 !== 0;

// Проверка, является ли дата выходным днём
const isWeekend = (date = new Date()) => date.getDay() % 6 === 0;

// Проверка, является ли дата сегодняшней
const isToday = date => date.toISOString().slice(0, 10) === new Date().toISOString().slice(0, 10);

// Проверка, находится ли дата между двумя датами
const isBetween = (date, min, max) => (date.getTime() >= min.getTime() && date.getTime() <= max.getTime());

// Проверка, происходит ли дата в текущем году
const isCurrentYear = date => date.getUTCFullYear() === new Date.getUTCFullYear();

// Проверка на корректность даты
const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());

// Вычисление дней между двумя датами
const dayDiff = (date1, date2) => Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000);

// __________________ \\
// * === Arrays === * \\

[1, 2, 3].push(4); // [1, 2, 3, 4]
[1, 2, 3].pop(); // [1, 2]
[1, 2, 3].shift(); // [2, 3]
[1, 2, 3].unshift(0); // [0, 1, 2, 3]
[1, 2, 3].concat([4, 5]); // [0, 1, 2, 3, 4, 5]
[1, 2, 3].join('-'); // 1-2-3
[1, 2, 3].slice(1) // [2, 3]
[1, 2, 3].splice(2, 1, 5) // [1, 2, 5]
[1, 2, 3].indexOf(2) // 1
[1, 2, 3, 1].lastIndexOf(1) // 3
[1, 2, 3].at(0) // 1
[1, 2, 3].includes(3) // true
[1, 2, 3].find(n => n % 2 === 0) // 2
[1, 2, 3].findIndex(n => n % 2 === 0) // 1
[1, 2, 3].map(n => n * 2) // [2, 4, 6]
[1, 2, 3].filter(n => n % 2 !== 0) // [1, 3]
[1, 2, 3].reduce((acc, cur) => acc + cur) // 6
[1, 2, 3].fill(0, 1) // [1, 0, 0]
[1, 2, 3].every(n => n > 0) // true
[1, 2, 3].some(n => n > 2) // true
[1, 2, 3].reverse() // [3, 2, 1]
[2, 1, 3].sort((a, b) => a - b) // [1, 2, 3]

