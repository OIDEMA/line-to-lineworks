const request = require('request');

const TOKEN = process.env.LINE_ACCESS_TOKEN

module.exports = function getUserAccount(userId) {
  const data = {
    url: `https://api.line.me/v2/bot/profile/${userId}`,
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + TOKEN
    },
  };
  request.get(data, (err, res) => {
    if (error) {
      console.log("Error", err);
      callback(err);
    } else {
      callback(res);
    }
  });
};

