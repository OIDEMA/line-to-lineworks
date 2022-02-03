const line = require('@line/bot-sdk');

module.exports = function getJWT(message, newtoken, accountId) {
  
  console.log({"message":message})
  console.log({"newToken":newtoken})
  console.log({"accountId":accountId})

  const client = new line.Client({
    channelAccessToken: newtoken
  });
  
  const Message = {
    type: 'text',
    text: message
  };
  
  client.pushMessage(accountId, Message)
    .then(() => {
      console.log('メッセージを送信しました')
    })
    .catch((err) => {
      console.log('エラーが発生しました')
    });
}
