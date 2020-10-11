require('dotenv').config()
const fetch = require('node-fetch')
const { EMAIL_TOKEN } = process.env
exports.handler = async event => {
  const email = JSON.parse(event.body).payload.email
  console.log(`Recieved a submission: ${email}`)
  return fetch('https://api.buttondown.email/v1/subscribers', {
    method: 'POST',
    headers: {
      Authorization: `Token ${EMAIL_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email }),
  })
    .then(response => response.json())
    .then(data => {
      data = JSON.stringify(data);
      console.log('Submitted to Buttondown:', data);
      let subS
      if (data.includes('already subscribed')) {
        console.log('Already subscribed.');
        subS = 'subscribed'
      } else if (data.includes('spammy')) {
        console.log('Address considered spam.');
        subS = 'spammy'
      } else if (data.includes('unsubscribed')) {
        console.log('Address unsubscribed.');
        subS = 'unsubscribed'
      } else {
        console.log('OK.');
      }
      return {
        statusCode: 200,
        body: JSON.stringify({ submitStatus: subS })
      }
    })
    .catch(error => ({ statusCode: 422, body: String(error) }))
}