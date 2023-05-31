const moment = require('moment');

const search = (arr, searchParam, field) => arr.find(e => e[field] === searchParam);

const isDateFormatValid = date => moment(date, 'YYYY/MM/DD', true).isValid();

const getAge = birthday => new Date(new Date() - new Date(birthday)).getFullYear() - 1970;

module.exports = {
    search,
    isDateFormatValid,
    getAge,
}