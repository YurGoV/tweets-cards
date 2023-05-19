import Box from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

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

export const userInfoStyles = {
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  bottom: '38px',
  justifyContent: 'space-between',
  minHeight: '64px',
  paddingTop: '20px',
  background: 'transparent',
  boxShadow: 'none',
  // '&:hover': {
  //   class: 'userInfo',
  //   display: 'none',
  // },
  // '&:hover:before': {
  //   class: 'noUserInfo',
  // },
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

