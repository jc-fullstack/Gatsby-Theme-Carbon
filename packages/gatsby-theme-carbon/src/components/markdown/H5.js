import React from 'react';
import responsiveStyles from '../shared/responsiveStyles';

const h5Css = ({ typeStyles, layout }) => [
  typeStyles.heading01,
  responsiveStyles,
  {
    marginTop: layout[0],
    marginBottom: `calc(0.5 * ${layout[0]})`,
  },
];

const H5 = ({ children, ...rest }) => (
  <h5 css={h5Css} {...rest}>
    {children}
  </h5>
);

export default H5;
