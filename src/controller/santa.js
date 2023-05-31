const { asyncHandler } = require("../middleware/async");
const { ERROR, URL_USERS, URL_USERPROFILES, PENDING_WISHES } = require("../constants");
const { search, isDateFormatValid, getAge } = require("../helpers");
const axios = require("axios");

exports.root = asyncHandler(async (req, res, next) => {
  res.render("santa");
});

exports.savePendingWish = asyncHandler(async (req, res, next) => {
  try {

    console.log(req.method);

    const { username, wish } = req.body;

    console.log(req.body);

    if (!username.trim().length) {
      return res.render("error", {
        error: ERROR.CHILD_NOT_REGISTERED,
      });
    }

    const registeredUsers = await axios.get(URL_USERS);

    const user = search(registeredUsers.data, username, "username");

    if (user === null || user === undefined) {
      return res.render("error", {
        error: ERROR.CHILD_NOT_REGISTERED,
      });
    }

    const userId = user.uid;

    const userProfileInfo = await axios.get(URL_USERPROFILES);

    const userData = search(userProfileInfo.data, userId, "userUid");

    const { address, birthdate } = userData;

    if (!isDateFormatValid(birthdate)) {
      return res.render("error", { error: ERROR.INVALID_BIRTH_DATE });
    }

    if (getAge(birthdate) > 10) {
      return res.render("error", {
        error: ERROR.CHILD_AGE_GREATER_THAN_10,
      });
    }

    PENDING_WISHES.push({ username, address, wish });
    return res.render("santa");
  } catch (e) {
    console.log(e);
    return res.render("error", { error: ERROR.INTERNAL_ERROR });
  }
});
