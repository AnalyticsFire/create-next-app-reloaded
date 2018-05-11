import React from 'react';
import classnames from 'classnames';
import ActiveLink from '@root/components/activeLink';
import { withRouter } from 'next/router';
import { string, object, any } from 'prop-types';

// typically you want to use `next/link` for this usecase
// but this example shows how you can also access the router
// using the withRouter utility.

export const NavLink = ({
  children,
  router,
  href,
  className,
  linkClassName,
}) => (
  <li className={classnames(className, { active: router.pathname === href })}>
    <ActiveLink href={href} className={linkClassName}>
      {children}
    </ActiveLink>
  </li>
);

NavLink.propTypes = {
  children: any,
  router: object,
  href: string,
  className: string,
  linkClassName: string,
};

export default withRouter(NavLink);
