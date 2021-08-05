// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/favicon.png" />
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
            integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
            crossOrigin="anonymous"
          />
          <link
            //href="https://fonts.googleapis.com/css?family=Recursive:300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&display=block"
            href="https://fonts.googleapis.com/css?family=Montserrat:300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&display=block"
            rel="stylesheet"
          />
          <link
            //href="https://fonts.googleapis.com/css?family=Permanent+Marker:400,700,900&display=block"
            href="https://fonts.googleapis.com/css?family=Concert+One&display=block"
            rel="stylesheet"
          />
          <link rel="stylesheet" href="https://unpkg.com/swiper@6.6.2/swiper-bundle.min.css" />
          <meta property="og:title" content="Evander Industries | Fine Art for a Good Cause" />
          <meta property="og:image" content="https://evanderindustries.com/images/marketing_logo.png" />
          <meta property="og:description" content="A storefront for Evander Industries." />
          <meta property="og:url" content="https://evanderindustries.com" />
          <meta property="twitter:title" content="Evander Industries | Fine Art for a Good Cause" />
          <meta name="twitter:creator" content="@evander_industries" />
          <meta property="twitter:image" content="https://evanderindustries.com/images/marketing_logo.png" />
          <meta property="twitter:description" content="A storefront for Evander Industries." />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
