import React from 'react';
import Root from '../components/common/Root';
import SocialMedia from '../components/common/SocialMedia';
import Head from 'next/head';
import Footer from '../components/common/Footer';

const About = () => (
  <Root>
    <Head>
      <title>About | Evander Industries</title>
    </Head>
    <div className="about-container">

      {/* Row */}
      <div className="row mt-5 pt-5">
        <div className="col-12 col-md-10 col-lg-6 offset-md-1 offset-lg-0 row-content">
            <div className="h-100 d-flex flex-column py-5 px-4 px-sm-5 justify-content-center">
              <h2 className="font-size-header mb-4">
                Introductions
              </h2>
              <h4 className="font-size-subheader mb-4">
                Hi, I'm Evander, a { new Date().getFullYear()-2009 }-year old artist, entrepreneur and (unprofessional) actor.
              </h4>
            </div>
          </div>

        <div className="col-12 col-lg-6">
          <div className="about-image h-100">
            <div className="d-flex align-items-center justify-content-center h-100">
              <img src="/about-head.jpg" alt="About me head illustration"/>
            </div>
          </div>
        </div>
      </div>

      {/* Row 2 */}
      <div className="row">
        <div className="col-12 col-lg-6">
          <div className="about-image h-100">
            <div className="d-flex align-items-center justify-content-center h-100">
              <img src="/about-face.jpg" alt="About me face illustration"/>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-10 col-lg-6 offset-md-1 offset-lg-0 row-content">
          <div className="h-100 d-flex flex-column justify-content-center py-5 px-4 px-sm-5">
            <h3 className="font-size-header mb-4">
              Commitment to charity
            </h3>
            <h4 className="font-size-subheader mb-4">
              For a long time, I have been selling my art for whatever it is that I wanted, donating only 20% to the ASPCA; but now, in these times, I know that it is significantly more important for me to donate at least 25% of profit to charities for humans. Now that this site is up, you, yes you, have a chance to help me do what I love and help people at the same time.
            </h4>
{/*            <div className="mt-3">
              <a className="px-4 py-3 flex-grow-1 font-color-white about-net" href="https://app.netlify.com/start/deploy?repository=https://github.com/chec/commercejs-nextjs-demo-store" target="_blank">
                Deploy to Netlify
              </a>
            </div>*/}
          </div>
        </div>
      </div>
    </div>
    <SocialMedia />
    <Footer />
  </Root>
);

export default About;
