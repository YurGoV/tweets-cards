import Box from '@mui/material/Paper';
import { Button } from '@mui/material';
import styled from '@emotion/styled';

export const BoxUserInfo = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  bottom: '38px',
  justifyContent: 'space-between',
  minHeight: '64px',
  paddingTop: '20px',
  background: 'transparent',
  boxShadow: 'none',
  '&:hover': {
    class: 'invisible',
  },
  '&:hover:before': {
    class: 'noUserInfo',
  },
}));
export const ButtonStyled = styled(Button)(({ followed }) => ({
  width: '196px',
  height: '50px',
  marginLeft: 'auto',
  marginRight: 'auto',
  padding: '10px 28px',
  backgroundColor: followed === 'true' ? '#5CD3A8' : '#EBD8FF',
  borderColor: '#EBD8FF',
  boxShadow: '0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25)',
  borderRadius: '10.3108px',
  color: '#373737',
  '&:hover': {
    backgroundColor: '#ae78e7',
    borderColor: '#0062cc',
    boxShadow: 'none',
    fontWeight: 'bold',
  },
  '&:focus': {
    boxShadow: 'none',
    borderColor: '#EBD8FF',
    border: 'none',
    outline: 'none',
  },
}));
