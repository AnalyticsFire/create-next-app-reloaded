import React from 'react';

const Header = props => (
  <header className="bg-white fixed-top">
    <div className="container p-3">
      <div className="row">
        <img
          src="/static/images/analyticsfire-logo.svg"
          className="col-8 col-sm-7 col-md-5 col-lg-3"
          alt="Analytics Fire"
        />
      </div>
    </div>
  </header>
);

export default Header;
