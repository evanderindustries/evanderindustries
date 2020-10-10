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
    // .then(data => {
    //   console.log('Submitted to Buttondown:', data);
    //   if (data[0].includes('already subscribed')) {
    //     console.log('Already subscribed.');
    //     const msg = {
    //       statusCode: 200,
    //       headers: { 'content-type': 'application/json' },
    //       body: JSON.stringify({ message: 'This user is already Subscribed!'})
    //     }
    //     return msg
    //   }
    // })
    .then(data => ({
            statusCode: 200,
            body: JSON.stringify({ message: 'This user is already Subscribed!'})
      }))
    .catch(error => ({ statusCode: 422, body: String(error) }))
}