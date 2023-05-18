import Box from '@mui/material/Box';
import { tweetCardStyles } from './tweetCardStyles';
import goITlogo from '../../assets/GoITlogo.png';
import bubbledIcons from '../../assets/icons.png';
import userPicBorder from '../../assets/userPicBorder.png';
import Rectangle from '../../assets/Rectangle.png';
import FakeAvatar from '../../assets/fakeAvatar.jpg';

import { Button } from '@mui/material';

// import PropTypes from 'prop-types';

// export const TweetCard = ({ data }) => {
export const TweetCard = () => {
  return (
    <Box sx={tweetCardStyles}>
      <Box
        sx={{
          display: 'flex',
          maxWidth: '76px',
          padding: '0',
          margin: '0',
          left: '0%',
          right: '0%',
          textAlign: 'left',
          //   background: 'rgba(255, 255, 255, 0.3)',
        }}
      >
        <img src={goITlogo} alt='Go IT logo' />
      </Box>
      <Box
        sx={{
          display: 'flex',
          position: 'relative',
          bottom: '14px',
          justifyContent: 'space-around',
        }}
      >
        <img src={bubbledIcons} alt='bubbled Icons' />
      </Box>
      <Box
        sx={{
          display: 'flex',
          position: 'relative',
          top: '12px',
          justifyContent: 'space-around',
          width: '380px',
          padding: '0',
          marginLeft: '-20px',
        }}
      >
        <img src={Rectangle} alt='rectangle' />
      </Box>
      <Box
        sx={{
          display: 'flex',
          position: 'relative',
          bottom: '38px',
          justifyContent: 'space-around',
          zIndex: '1',
        }}
      >
        <img src={userPicBorder} alt='user picture' />
        <Box
          borderRadius='25%'
          sx={{
            display: 'flex',
            width: '65px',
            height: '65px',
            top: '8px',
            border: '1',
            borderRadius: '50%',
            position: 'absolute',
            overflow: 'hidden',
            zIndex: '-1',
          }}
        >
          <img src={FakeAvatar} alt='user picture' />
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          bottom: '38px',
          justifyContent: 'space-between',
          minHeight: '64px',
          paddingTop: '20px',
        }}
      >
        <p>TWEETS</p>
        <p>FOLLOWERS</p>
      </Box>
      <Button
        disableFocusRipple
        variant='contained'
        size='medium'
        sx={{
          width: '196px',
          height: '50px',
          marginLeft: 'auto',
          marginRight: 'auto',
          padding: '10px 28px',
          backgroundColor: '#EBD8FF',
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
          // '&:active': {
          //   // backgroundColor: '#ae78e7',
          //   // borderColor: '#0062cc',
          //   // boxShadow: 'none',
          //   // fontWeight: 'bold',
          //   // borderColor: '#EBD8FF',
          //   border: 'none',
          //   outline: 'none',
          // },
          '&:focus': {
            boxShadow: 'none',
            borderColor: '#EBD8FF',
            border: 'none',
            outline: 'none',
          },
        }}
      >
        FOLLOW
      </Button>
    </Box>
  );
};

// ContactsEl.propTypes = {
//   data: PropTypes.array,
// };
