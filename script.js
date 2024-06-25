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