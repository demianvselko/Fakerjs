// const faker = require('faker/locale/en');
const faker = require('faker/locale/es');
// const faker = require('faker/locale/ru');

const firstName = faker.name.firstName();
const lastName = faker.name.lastName();

console.log(`Empleado: ${firstName} ${lastName}`);

const month = faker.date.month();
console.log(month)