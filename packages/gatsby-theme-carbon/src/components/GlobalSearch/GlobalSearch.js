import React, { useContext } from 'react';

import Search20 from '@carbon/icons-react/es/search/20';
import { HeaderGlobalAction } from 'carbon-components-react/lib/components/UIShell';
import GlobalSearchInput from './GlobalSearchInput';
import NavContext from '../../util/context/NavContext';

const GlobalSearch = () => {
  const { searchIsOpen, toggleNav } = useContext(NavContext);

  if (searchIsOpen) {
    return <GlobalSearchInput />;
  }

  return (
    <HeaderGlobalAction
      className="bx--header__action--search"
      aria-label="Search Website"
      onClick={() => {
        toggleNav('search', 'open');
        toggleNav('switcher', 'close');
      }}
    >
      <Search20 />
    </HeaderGlobalAction>
  );
};

export default GlobalSearch;
