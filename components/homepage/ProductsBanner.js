import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import ProductRow from '../products/ProductRow';
import { connect } from 'react-redux';

class ProductsBanner extends Component {
  render() {
    const { products } = this.props;

    return (
      <div className="custom-container py-5 my-5">
        <div className="d-flex flex-column align-items-center mb-5 pb-4">
          <p
            className="font-size-display2 mb-3 text-center font-family-secondary"
            style={{ maxWidth: '32rem' }}
          >
            Recent additions
          </p>
          <Link href="/collection">
            <a className="d-flex py-1 align-items-center font-color-black borderbottom border-color-gray500">
              <p className="mr-3">See more products</p>
              <img src="/icon/arrow-long-right.svg" />
            </a>
          </Link>
        </div>
        <ProductRow products={products.slice(0, 4)} />
      </div>
    );
  }
}

ProductsBanner.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
};

ProductsBanner.defaultProps = {
  products: [],
};

export default connect(state => state)(ProductsBanner);
