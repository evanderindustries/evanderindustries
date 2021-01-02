import React from 'react';

const imagesInfo = [
  {
    image: '/images/insta/1.png',
    translateRatio: -50
  },
  {
    image: '/images/insta/2.png',
    translateRatio: 30
  },
  {
    image: '/images/insta/3.png',
    translateRatio: 50
  },
  {
    image: '/images/insta/4.png',
    translateRatio: -200
  },
  {
    image: '/images/insta/5.png',
    translateRatio: 180
  }
];

export default class SocialMedia extends React.Component {
  constructor(props) {
    super(props);

    this.followContainer = React.createRef();
    this.images = [];

    this.animate = this.animate.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.animate();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    window.requestAnimationFrame(this.animate);
  };

  animate() {
    if (!this.followContainer.current) {
      return;
    }
    const dimensions = this.followContainer.current.getBoundingClientRect();

    if (dimensions.top - window.innerHeight < 0 && dimensions.bottom > 0) {
      const scrolledRatio =
        (window.innerHeight - dimensions.top) / window.innerHeight;

      this.images.forEach((image, index) => {
        const translateRatio = imagesInfo[index] ? imagesInfo[index].translateRatio : 0;
        image &&
          (image.style.transform = `translateY(${scrolledRatio * translateRatio}px)`);
      });
    }
  };

  render() {
    return (
      <footer className="pt-5">
        <div
          ref={this.followContainer}
          className="custom-container px-3 mb-5 footer-follow"
        >
          <div className="row footer-follow--header">
            <div className="px-3 footer-follow--title">
              <p
                className="font-size-display2 mb-3 font-family-secondary"
                style={{ maxWidth: '26rem' }}
              >
                Follow me on Instagram
              </p>
              <div className="d-flex instagram-link-z-index">
                <a
                  href="https://www.instagram.com/evander_industries/"
                  className="d-flex py-1 align-items-center font-color-black borderbottom border-color-gray500"
                >
                  <p className="mr-3">Follow me</p>
                  <img src="/icon/arrow-long-right.svg" alt="Arrow icon"/>
                </a>
              </div>
            </div>
          </div>
          <div className="d-flex footer-follow--images">
            {imagesInfo.map((item, i) => (
              <div key={i} className="justify-content-sm-end flex-column follow-images">
                <div
                  ref={image => this.images.push(image)}
                  style={{
                    paddingBottom: '100%',
                    background: `url("${item.image}") center center/cover`
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </footer>
    );
  }
}
