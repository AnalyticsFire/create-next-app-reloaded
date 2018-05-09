import Head from './head';
import { any, string } from 'prop-types';

import '@root/styles/main.scss';

const Layout = props => (
  <main className={props.className || ''}>
    <Head title={props.title} />
    {props.children}
  </main>
);

Layout.propTypes = {
  children: any,
  title: string,
  className: string,
};

export default Layout;
