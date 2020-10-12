import React from 'react';

const Footer = () => (

  <footer className="pt-5 bg-gray100">
    <div className="custom-container mb-5 pb-5 pt-5">
      <div className="row d-flex align-items-center justify-content-center">
        {/*<div className="col-12 col-sm-6 col-md-4">
          <p className="font-family-secondary font-size-display1 mb-4">
            Follow us
          </p>
          <div className="d-flex font-color-medium mb-5 pb-3 pb-md-0 mb-md-0">
            <div className="pr-5">
              <a
                href="https://twitter.com/commercejs"
                className="mb-3 d-block font-color-medium"
                target="_blank"
              >
                Twitter
              </a>
            </div>
            <div>
              <a
                href="https://www.instagram.com/commerce.js/"
                className="d-block font-color-medium"
                target="_blank"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>*/}
        <div className="col-12 col-md-4">
          <p className="font-family-secondary font-size-display1 mb-3">
            Newsletter
          </p>
          <EmailForm />
{/*          <form className="position-relative email-form" name="newsletter" method="POST" data-netlify="true" netlify-honeypot="bot-field">
            <div hidden aria-hidden="true">
              <label>
                Don’t fill this out if you're human: 
                <input name="bot-field" />
              </label>
            </div>
            <div>
              <input className="border-none h-48 w-100" placeholder="email address" type="email" name="email" id="email" required />
              <button className="bg-transparent position-absolute right-0 top-50 translateY--50 p-1 px-3 mr-2 border border-color-gray500 submit-btn" type="submit">Submit</button>
            </div>
          </form>*/}
        </div>
      </div>
    </div>
    <div className="pt-md-5">
      <div className="bg-brand900">
        <div className="custom-container d-flex flex-column flex-md-row align-items-center justify-content-between">
          <div className="pt-5 pb-0 pt-md-4 pb-md-4 d-flex align-items-center flex-wrap justify-content-center">
            {/*<a
              href="https://app.netlify.com/start/deploy?repository=https://github.com/chec/commercejs-nextjs-demo-store"
              className="font-color-brand font-size-caption text-uppercase text-center"
              target="_blank"
            >
              Deploy to Netlify
            </a>
            <p className="px-2 font-color-brand font-size-caption">-</p>
            <a
              href="https://github.com/chec/commercejs-nextjs-demo-store"
              className="font-color-brand font-size-caption text-uppercase text-center"
              target="_blank"
            >
              Clone in GitHub
            </a>
            <p className="px-2 font-color-brand font-size-caption">-</p>
            <a
              href="https://github.com/chec/commercejs-nextjs-demo-store"
              className="font-color-brand font-size-caption text-uppercase text-center"
              target="_blank"
            >
              Contribute
            </a>*/}
            <span className="font-color-brand font-size-caption text-uppercase">Site by Evander Industries and&nbsp;</span>
            <a
              href="https://entekadesign.com/"
              className="font-color-brand font-size-caption text-uppercase text-center"
              target="_blank"
            >
              Enteka Design
            </a>
          </div>
          <div className="font-color-brand font-size-caption py-4 text-right text-uppercase text-center">
          {/*<a
              href="https://commercejs.com/"
              className="font-color-brand font-size-caption text-uppercase text-center"
              target="_blank"
            >
              &copy; 2020 Evander Industries
            </a>*/}
            &copy; { new Date().getFullYear() } Evander Industries
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;

// const processForm = form => {
//   const data = new FormData(form)
//   data.append('form-name', 'newsletter');
//   fetch('/', {
//     method: 'POST',
//     body: data,
//   })
//   .then(() => {
//     form.innerHTML = `<div class="form--success">Almost there! Check your inbox for a confirmation e-mail.</div>`;
//   })
//   .catch(error => {
//     form.innerHTML = `<div class="form--error">Error: ${error}</div>`;
//   })
// }

// const emailForm = document.querySelector('.email-form')
// if (emailForm) {
//   emailForm.addEventListener('submit', e => {
//     e.preventDefault();
//     processForm(emailForm);
//   })
// }

class EmailForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    const form = document.querySelector('#newsletter-form');
    const data = new FormData(event.target);
    data.append('form-name', 'newsletter');
    // console.log('Data: ')
    // for (var value of data.values()) {
    //    console.log(value); 
    // }
    // fetch('/', {
    //   method: 'POST',
    //   body: data,
    // })
    fetch(event.target.getAttribute('action'), {
      method: 'POST',
      body: data,
      //body: new URLSearchParams(data).toString()
    })
    // .then(response => response.json())
    // //.then((function(e){return e.json()}))
    // // .then(response => response.text())
    // // .then(text => console.log(`This is the response: ${text}`))
    // .then(data => {
    //   console.log('This is the data:', data);
    //   let msg
    //   if (data.submitStatus === 'subscribed') {
    //     msg = 'This user is already subscribed!'
    //   } else if (data.submitStatus === 'spammy') {
    //     msg = 'This address is considered spammy!'
    //   } else if (data.submitStatus === 'unsubscribed') {
    //     msg = 'This address is unsubscribed!'
    //   } else {
    //     msg = 'Almost there! Check your inbox for a confirmation e-mail.'
    //   }
    //   form.innerHTML = `<div class="form--success">${msg}</div>`;
    // })
    .then((function(e){
      const testData = e.json();
      console.log('This is the data:', testData);
      return testData;
      //return e.json()
    }))
    .then(result => {
      console.log('This is the result:', result);
    })
    // .then(() => {
    //   form.innerHTML = `<div class="form--success">${}</div>`;
    // })
    .catch(error => {
      form.innerHTML = `<div class="form--error">Error: ${error}</div>`;
    })
    event.preventDefault();
  }

  render() {
    return (
      <form action="#" className="position-relative" id="newsletter-form" name="newsletter" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={this.handleSubmit}>
        <div hidden aria-hidden="true">
          <label>
            Don’t fill this out if you're human: 
            <input name="bot-field" />
          </label>
        </div>
        <div>
          <input className="border-none h-48 w-100" value={this.state.value} onChange={this.handleChange} placeholder="email address" type="email" name="email" id="email" required />
          <button className="bg-transparent position-absolute right-0 top-50 translateY--50 p-1 px-3 mr-2 border border-color-gray500 submit-btn" type="submit">Submit</button>
        </div>
      </form>
    );
  }
}