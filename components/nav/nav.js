import React, { Component } from 'react';
import NavLink from '@root/components/navLink';
import classnames from 'classnames';
import { func } from 'prop-types';
import { withI18next } from '@root/lib/withI18next';

export class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  render() {
    const { t } = this.props;
    return (
      <div className="bg-light">
        <nav className="container navbar navbar-expand-lg navbar-collapse-lg navbar-light bg-light pt-2 pb-2">
          <button
            className={classnames('navbar-toggler', {
              collapsed: !this.state.show,
            })}
            type="button"
            data-toggle="collapse"
            aria-controls="navbarNav"
            aria-expanded={this.state.show}
            aria-label="Toggle navigation"
            onClick={() => this.setState({ show: !this.state.show })}
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className={classnames('collapse navbar-collapse', {
              show: this.state.show,
            })}
          >
            <ul className="navbar-nav">
              <NavLink href="/" className="nav-item" linkClassName="nav-link">
                {t('common:nav.home')}
              </NavLink>
              <NavLink
                href="/about"
                className="nav-item"
                linkClassName="nav-link"
              >
                {t('common:nav.about')}
              </NavLink>
              <NavLink
                href="/redux-example"
                className="nav-item"
                linkClassName="nav-link"
              >
                {t('common:nav.redux')}
              </NavLink>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

Nav.propTypes = {
  t: func,
};

export default withI18next(['common'])(Nav);
