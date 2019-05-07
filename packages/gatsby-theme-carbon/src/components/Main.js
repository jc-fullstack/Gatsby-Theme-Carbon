import styled from '@emotion/styled';
import { Grid } from './Grid';

const Main = styled(Grid)`
  padding-top: ${props => (props.padded ? '80px' : 0)};
  padding-bottom: 80px;
`;

export default Main;
