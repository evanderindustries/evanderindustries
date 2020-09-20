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
          <div className="position-relative">
            <input
              className="border-none h-48 w-100"
              placeholder="email address"
            />
            {/*<button className="bg-transparent position-absolute right-0 top-50 translateY--50 pr-2 h-48">
              <img src="/icon/arrow-long-right.svg" className="w-24" alt="Arrow icon"/>
            </button>*/}
          </div>
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
            &copy; 2020 Evander Industries
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
