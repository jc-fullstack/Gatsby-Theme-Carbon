import React from 'react';
import styled from '@emotion/styled';

import mq from '../../util/media-queries';
import responsiveStyles from '../shared/responsiveStyles';

const textCss = ({ typeStyles }) => [typeStyles.bodyLong02, responsiveStyles];

const List = styled.ol`
  list-style: none;
  margin-top: 0;
  margin-bottom: 1.5rem;

  li {
    margin-left: 1rem;
    counter-increment: step-counter;
    a {
      color: ${({ theme }) => theme.colors.black};
    }
    & :before {
      content: counter(step-counter) '. ';
      position: absolute;
      margin-left: -0.5rem;
      transform: translate(-100%, 0px);
    }
    & p {
      display: inline;
    }
    ${mq.md} {
      margin-left: 2rem;
    }
  }
`;

const Ol = ({ children }) => (
  <List css={textCss} className="carbon--mdx__ol">
    {children}
  </List>
);

export default Ol;
