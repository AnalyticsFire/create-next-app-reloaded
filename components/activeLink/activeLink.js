import React from 'react';
import classnames from 'classnames';
import { withRouter } from 'next/router';
import { string, object, any } from 'prop-types';

// typically you want to use `next/link` for this usecase
// but this example shows how you can also access the router
// using the withRouter utility.

export const ActiveLink = ({ children, router, href, className }) => {
  const handleClick = e => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={classnames(className, { active: router.pathname === href })}
    >
      {children}
    </a>
  );
};

ActiveLink.propTypes = {
  children: any,
  router: object,
  href: string,
  className: string,
};

export default withRouter(ActiveLink);
