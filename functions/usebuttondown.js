require('dotenv').config()
const fetch = require('node-fetch')
const { EMAIL_TOKEN } = process.env
exports.handler = async event => {
  console.log('Handler event received:', event)
  const email = JSON.parse(Buffer.from(event.body)).payload.email
  console.log(`Recieved a submission: ${email}`)
  return fetch('https://api.buttondown.email/v1/subscribers', {
    method: 'POST',
    headers: {
      Authorization: `Token ${EMAIL_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email }),
  })
  .then((function(e){
    const testData = e.json();
    //console.log('This is the testData:', testData);
    return testData;
  }))
  //.then(response => response.json())
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
      subS = 'ok'
      console.log('OK.');
    }
    return {
      statusCode: 200,
      body: JSON.stringify({ submitStatus: subS }),
    }
  })
  .catch(error => ({ statusCode: 422, body: String(error) }))
}

// require('dotenv').config()
// const fetch = require('node-fetch')
// const { EMAIL_TOKEN } = process.env
// const API_URL = 'https://api.buttondown.email/v1/subscribers'

// exports.handler = async event => {
//     const email = JSON.parse(event.body).payload.email
//     console.log(`Recieved a submission: ${email}`)
//     const requestOptions = {
//       method: 'POST',
//       headers: {
//         Authorization: `Token ${EMAIL_TOKEN}`,
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ email }),
//     };

//     try {
//       const response = await fetch(API_URL, requestOptions);
//       const data = await response.json();

//       // 400 BAD REQUEST buttondown sends an array with a string message
//       if (response.status === 400) {
//         return Promise.reject({
//           // buttondown api puts error messages as first string in an array
//           data: data[0],
//           status: response.status,
//         });
//       }

//       // 201 CREATED buttondown sends this as success message
//       else if (response.status === 201) {
//         return Promise.resolve({
//           data,
//           status: response.status,
//         });
//       }

//       // I have not identified the response
//       else {
//         console.error('UNKNOWN RESPONSE');
//         return Promise.reject({
//           status: response.status,
//         });
//       }
//     } catch (err) {
//       console.log(err);
//       throw err;
//     }



    //   data = JSON.stringify(data);
    //   console.log('Submitted to Buttondown:', data);
    //   let subS
    //   if (data.includes('already subscribed')) {
    //     console.log('Already subscribed.');
    //     subS = 'subscribed'
    //   } else if (data.includes('spammy')) {
    //     console.log('Address considered spam.');
    //     subS = 'spammy'
    //   } else if (data.includes('unsubscribed')) {
    //     console.log('Address unsubscribed.');
    //     subS = 'unsubscribed'
    //   } else {
    //     subS = 'ok'
    //     console.log('OK.');
    //   }
    //   return {
    //     statusCode: 200,
    //     body: JSON.stringify({ submitStatus: subS }),
    //   }
    // })
    // .catch(error => ({ statusCode: 422, body: String(error) }))


// }