import { NavLink } from 'react-router-dom';

import { experimentalStyled as styled } from '@mui/material/styles';

export const NavLinkStyled = styled(NavLink)`
  display: flex;
  color: #4b2a99;
  padding: 2px 15px;
  margin-left: 20px;
  min-width: 120px;
   max-width: 130px;
  text-decoration: none;
  justify-content: center;
  border: 1px solid #4b2a99;
  border-radius: 4px;
  :hover,
  :focus-visible {
    color: darkcyan;
    border: 1px solid darkcyan;
`;
