import React from 'react';
import classnames from 'classnames';
import Head from './head';
import Header from '@root/components/header';
import Nav from '@root/components/nav';
import Footer from '@root/components/footer';
import { any, string, bool } from 'prop-types';

import '@root/styles/main.scss';

const Layout = ({ title, children, className, showNav = true }) => (
  <div className={classnames('position-relative', { className })}>
    <Head title={title} />
    <Header />
    <main>
      {showNav && <Nav />}
      {children}
    </main>
    <Footer />
  </div>
);

Layout.propTypes = {
  children: any,
  title: string,
  className: string,
  showNav: bool,
};

export default Layout;
