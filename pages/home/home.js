import Layout from '../../components/layout';
import { func } from 'prop-types';
import { withI18next } from '../../lib/withI18next';

const Home = ({ t }) => (
  <Layout title="Home" className="home-page">
    <div className="container">
      <h1>{t('title')}</h1>
    </div>
  </Layout>
);

Home.propTypes = {
  t: func,
};

export default withI18next(['home'])(Home);
