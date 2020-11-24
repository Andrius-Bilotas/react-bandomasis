import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ProductCardComponent extends Component {
    render() {
        return (
        <div className="card" style={{width: '18rem'}}>
          <img src="https://picsum.photos/200/200" class="card-img-top" alt="title" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#0" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
        );
    }
}