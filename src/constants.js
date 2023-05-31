const ERROR = {
    CHILD_NOT_REGISTERED: 'You are not registered! Please do good things next time',
    CHILD_AGE_GREATER_THAN_10: 'You are not a child anymore!',
    INVALID_BIRTH_DATE: 'Invalid Birthdate',
    INTERNAL_ERROR: 'Internal Error'
}
const URL_USERPROFILES = 'https://raw.githubusercontent.com/alj-devops/santa-data/master/userProfiles.json';
const URL_USERS = 'https://raw.githubusercontent.com/alj-devops/santa-data/master/users.json';
const PENDING_WISHES = [];


module.exports = {
    ERROR,
    URL_USERPROFILES,
    URL_USERS,
    PENDING_WISHES
}