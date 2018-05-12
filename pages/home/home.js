import React from 'react';
import Layout from '@root/components/layout';
import { func } from 'prop-types';
import config from 'config';
import { withI18next } from '@root/lib/withI18next';

export const Home = ({ t }) => (
  <Layout title={t('home:pageTitle')} className="home-page">
    <div className="container pt-4 pb-4">
      <h1 className="title text-center pb-3">
        {t('home:title', { env: config.get('env').toUpperCase() })}
      </h1>
      <img src="static/images/the-team.jpg" className="w-100" />
    </div>
  </Layout>
);

Home.propTypes = {
  t: func,
};

export default withI18next(['common', 'home'])(Home);
