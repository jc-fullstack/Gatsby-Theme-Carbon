import React, { useContext } from 'react';

import { MDXProvider } from '@mdx-js/react';

import {
  WebsiteFooter,
  WebsiteSwitcher,
  WebsiteCodeSnippet,
} from '@carbon/addons-website';

// import timestamp from 'raw-loader!../../../build-timestamp';
import Packages from '../../package.json';

import LeftNav from './LeftNav';
import Meta from './Meta';
import Header from './Header';

import { useSmoothScroll, useDocSearch } from '../util/hooks';

// import favicon32 from '../../content/global/images/favicon-32.png';
import NavContext from '../util/context/NavContext';

import PageTable from './PageTable';

import { P, H1, H2, H3, H4, H5, Ul, Ol } from './markdown';

import '../styles/index.scss';

const PageLayout = ({ children, ...rest }) => {
  const { openState, toggleNav } = useContext(NavContext);
  useSmoothScroll();
  useDocSearch();

  const version = Packages.dependencies['carbon-components'];
  const reactVersion = Packages.dependencies['carbon-components-react'];
  const currentYear = new Date().getFullYear();
  // const lastUpdated = new Intl.DateTimeFormat(undefined, {
  //   year: 'numeric',
  //   month: 'long',
  //   day: 'numeric',
  // }).format(new Date(Number(timestamp)));

  const is404 = children.key === null;

  return (
    <>
      <Meta />
      <Header />
      <WebsiteSwitcher
        isSwitcherFinal={openState.switcher}
        isSwitcherOpen={openState.switcher}
        links={[
          { href: 'https://www.ibm.com/design/', linkText: 'IBM Design' },
          {
            href: 'https://www.ibm.com/design/language/',
            linkText: 'IBM Design Language',
          },
          {
            href: 'https://www.carbondesignsystem.com',
            linkText: 'IBM Product Design',
          },
          {
            href: 'https://www.ibm.com/standards/web/',
            linkText: 'IBM Digital Design',
          },
          {
            href: 'https://www.ibm.com/design/research/',
            linkText: 'IBM Design Research',
          },
          {
            href: 'https://www.ibm.com/design/thinking/',
            linkText: 'Enterprise Design Thinking',
          },
          {
            href: 'https://www.ibm.com/services/ibmix/',
            linkText: 'IBM iX',
          },
        ]}
      />
      <LeftNav homepage={rest.homepage} is404Page={is404} />
      <div className="container">
        <MDXProvider
          components={{
            p: P,
            h1: H1,
            h2: H2,
            h3: H3,
            h4: H4,
            h5: H5,
            ul: Ul,
            ol: Ol,
            pre: WebsiteCodeSnippet,
            table: PageTable,
          }}
        >
          {children}
        </MDXProvider>
        <WebsiteFooter
          logoOffset
          linksCol1={[
            { href: '/contributing/designers', linkText: 'Contribute' },
            { href: 'https://www.ibm.com/privacy', linkText: 'Privacy' },
            {
              href: 'https://www.ibm.com/legal',
              linkText: 'Terms of Use',
            },
            { href: 'https://www.ibm.com', linkText: 'IBM.com' },
          ]}
          linksCol2={[
            {
              href: 'https://dribbble.com/_carbondesign',
              linkText: 'Dribbble',
            },
            {
              href: 'https://medium.com/@_carbondesign',
              linkText: 'Medium',
            },
            {
              href: 'https://twitter.com/_carbondesign',
              linkText: 'Twitter',
            },
          ]}
        >
          <p>
            Have questions? Email us or open
            <br /> an issue in{' '}
            <a href="https://github.com/carbon-design-system/carbon-website/issues/new/choose">
              GitHub.
            </a>
          </p>
          <p>
            Vanilla Components version {version}
            <br />
            React Components version {reactVersion}
            <br />
            {/* Last updated {lastUpdated} */}
            <br />
            Copyright © {currentYear} IBM
          </p>
        </WebsiteFooter>
      </div>
    </>
  );
};

export default PageLayout;
