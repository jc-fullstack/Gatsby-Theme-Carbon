import React from 'react';
import { SideNavLink } from 'carbon-components-react/lib/components/UIShell';
import { Link } from 'gatsby';
import LaunchIcon from '@carbon/icons-react/lib/launch/16';

const LeftNavResourceLinks = ({ links }) =>
  links ? (
    <>
      <hr className="bx--side-nav__divider" />
      {links.map((link, i) => (
        <SideNavLink
          style={{ marginTop: i === 0 ? '1rem' : 0 }}
          icon={<LaunchIcon />}
          href={link.href}
          className="bx--side-nav--website-link"
          element={!link.href.includes('http') ? Link : 'a'}
        >
          {link.title}
        </SideNavLink>
      ))}
    </>
  ) : null;

export default LeftNavResourceLinks;
