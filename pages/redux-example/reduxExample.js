import React, { Component } from 'react';
import Layout from '@root/components/layout';
import { func, string } from 'prop-types';
import { connect } from 'react-redux';
import { withI18next } from '@root/lib/withI18next';

export class ReduxExample extends Component {
  static getInitialProps({ store, isServer, pathname, query }) {
    store.dispatch({ type: 'FOO', payload: 'abcde' }); // component will be able to read from store's state when rendered
    return { custom: 'custom value' }; // you can pass some custom props to component from here
  }
  render() {
    return (
      <Layout title="Redux Example" className="redux-page">
        <div className="container pt-4 pb-4">
          <div>Prop from Redux {this.props.foo}</div>
          <div>Prop from getInitialProps {this.props.custom}</div>
        </div>
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  foo: state.foo,
});

ReduxExample.propTypes = {
  t: func,
  foo: string,
  custom: string,
};

export default withI18next(['common'])(connect(mapStateToProps)(ReduxExample));
