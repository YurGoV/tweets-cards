import Box from '@mui/material/Paper';
import { Button } from '@mui/material';
import styled from '@emotion/styled';


export const mainBoxStyles = {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  width: '340px',
  height: '420px',
  padding: '20px',
  background:
    'linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%)',
  boxShadow: '-2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23)',
  borderRadius: '20px',
};

export const cardStyles = {
  display: 'flex',
  maxWidth: '76px',
  padding: '0',
  margin: '0',
  left: '0%',
  right: '0%',
  textAlign: 'left',
};

export const bubbledIconsStyles = {
  display: 'flex',
  position: 'relative',
  bottom: '14px',
  justifyContent: 'space-around',
};

export const rectangleStyles = {
  display: 'flex',
  position: 'relative',
  top: '12px',
  justifyContent: 'space-around',
  width: '380px',
  padding: '0',
  marginLeft: '-20px',
};

export const userPicBorderStyles = {
  display: 'flex',
  position: 'relative',
  bottom: '38px',
  justifyContent: 'space-around',
  zIndex: '1',
};

export const avatarStyles = {
  display: 'flex',
  width: '65px',
  height: '65px',
  top: '8px',
  border: '1',
  borderRadius: '50%',
  position: 'absolute',
  overflow: 'hidden',
  zIndex: '-1',
};

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

