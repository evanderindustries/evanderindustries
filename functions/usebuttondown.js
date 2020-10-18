require('dotenv').config()
const fetch = require('node-fetch')
const { EMAIL_TOKEN } = process.env
exports.handler = async event => {
  //console.log('Handler event received:', event)
  let body = event.body;
  // if (event.isBase64Encoded) {
  //   body = Buffer.from(event.body, 'base64').toString();
  //   console.log('isBase64Encoded');
  // }
  //console.log('Body:', body)
  const email = JSON.parse(body).email;
  //console.log(`Recieved a submission: ${email}`)
  return fetch('https://api.buttondown.email/v1/subscribers', {
    method: 'POST',
    headers: {
      Authorization: `Token ${EMAIL_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email }),
  })
  // .then((function(e){
  //   const testData = e.json();
  //   console.log('This is the testData:', testData);
  //   return testData;
  // }))
  .then(response => response.json())
  .then(data => {
    data = JSON.stringify(data);
    //console.log('Submitted to Buttondown:', data);
    let msg
    if (data.includes('already subscribed')) {
      msg = 'This user is already subscribed!'
    } else if (data.includes('spammy')) {
      msg = 'This address is considered spammy!'
    } else if (data.includes('unsubscribed')) {
      msg = 'This address was unsubscribed!'
    } else {
      msg = 'Check your inbox for a confirmation e-mail.'
    }
    console.log(msg)
    return {
      statusCode: 200,
      body: JSON.stringify({ statusMsg: msg }),
    }
  })
  .catch(error => ({ statusCode: 422, body: String(error) }))
}