import Box from '@mui/material/Paper';
import { Button } from '@mui/material';
// import { styled } from '@mui/material/styles';
import styled from '@emotion/styled';


export const tweetCardStyles = {
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
  // '&:hover': {
  //   background: '#ae78e7',
  //   borderColor: '#0062cc',
  //   boxShadow: 'none',
  //   fontWeight: 'bold',
  // },
};

// export const userInfoStyles = {
//   display: 'flex',
//   flexDirection: 'column',
//   position: 'relative',
//   bottom: '38px',
//   justifyContent: 'space-between',
//   minHeight: '64px',
//   paddingTop: '20px',
//   background: 'transparent',
//   boxShadow: 'none',
//   // '&:hover': {
//   //   class: 'userInfo',
//   //   display: 'none',
//   // },
//   // '&:hover:before': {
//   //   class: 'noUserInfo',
//   // },
// };

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
  // border: 'none',
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

/* 
const User = styled.div`
  position: relative;
  display: inline-block;
`;

const UserContent = styled.div`
  display: none;
  position: absolute;
`;

const Button = styled.div`
  background-color: green;
  color: white;
  &:hover + ${UserContent} {
    display: block;
  }
`;

export const DropDownMenu = () => {
  return (
    <User>
      <Button>Dropdown</Button>
      <UserContent>
        <p>TWEETS</p>
        <p>FOLLOWERS</p>
      </UserContent>
    </User>
  );
};
 */
