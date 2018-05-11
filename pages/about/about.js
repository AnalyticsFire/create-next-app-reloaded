import React from 'react';
import Layout from '@root/components/layout';
import { func } from 'prop-types';
import { withI18next } from '@root/lib/withI18next';

export const About = ({ t }) => (
  <Layout title={t('about:pageTitle')} className="about-page">
    <div className="container pt-4 pb-4">
      <h1 className="title text-center pb-3">{t('about:title')}</h1>
      <blockquote className="blockquote text-center">
        {t('about:goal')}
      </blockquote>
      <p className="text-center">{t('about:how')}</p>
    </div>
  </Layout>
);

About.propTypes = {
  t: func,
};

export default withI18next(['common', 'about'])(About);
